using Microsoft.Win32;
using System.Diagnostics;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Threading;

namespace VirtualAvatar.App;

public sealed class WorldWindow : Window
{
    readonly App app = App.CurrentApp;
    readonly Canvas scene = new() { Width = 1200, Height = 700, ClipToBounds = true };
    readonly Image avatar = new() { Width = 130, Height = 130, RenderTransformOrigin = new Point(.5, .7) };
    readonly DispatcherTimer timer = new() { Interval = TimeSpan.FromSeconds(1.0 / 30) };
    readonly Stopwatch time = Stopwatch.StartNew();
    readonly MotionEngine motion = new(18);
    readonly AvatarConfig local;
    Point? target;
    double last;
    public WorldWindow()
    {
        Title = "Virtual Avatar · Mundo interactivo"; Width = 1100; Height = 750; MinWidth = 700; MinHeight = 500;
        local = app.Config.Clone(); local.Size = 130; local.X = 250; local.Y = 400; local.Automatic = false; local.Locked = false;
        var root = new DockPanel(); Content = root;
        var toolbar = new WrapPanel { Margin = new Thickness(8) }; DockPanel.SetDock(toolbar, Dock.Top); root.Children.Add(toolbar);
        var add = new Button { Content = "Añadir objeto PNG / SVG" }; toolbar.Children.Add(add); add.Click += (_, _) => AddObject();
        var color = new TextBox { Text = app.Config.WorldColor, Width = 110 }; toolbar.Children.Add(color);
        var background = new Button { Content = "Cambiar fondo" }; toolbar.Children.Add(background);
        background.Click += (_, _) => { app.Config.WorldColor = color.Text; app.Config.Validate(); color.Text = app.Config.WorldColor; RefreshBackground(); app.Save(); };
        toolbar.Children.Add(new TextBlock { Text = "Clic en el suelo: caminar · Clic en personaje: salto · Arrastra objetos · Clic derecho: quitar" });
        var viewport = new Viewbox { Child = scene, Stretch = Stretch.Uniform }; root.Children.Add(viewport);
        RefreshBackground();
        foreach (var item in app.Config.World) DrawObject(item);
        try { avatar.Source = app.Assets.Animation(app.Config)[0]; } catch { avatar.Source = app.Assets.Default; }
        scene.Children.Add(avatar);
        avatar.MouseLeftButtonDown += (_, e) => { target = null; motion.SetState(AvatarState.Jump, .65); e.Handled = true; };
        scene.MouseLeftButtonDown += (_, e) => { var point = e.GetPosition(scene); target = new Point(Math.Clamp(point.X - local.Size / 2, 0, 1070), Math.Clamp(point.Y - local.Size / 2, 0, 570)); };
        timer.Tick += (_, _) =>
        {
            var now = time.Elapsed.TotalSeconds; double x = 0, y = 0;
            if (target is Point point)
            {
                x = point.X - local.X; y = point.Y - local.Y;
                if (Math.Sqrt(x * x + y * y) < 5) { target = null; x = y = 0; }
            }
            motion.Tick(local, now - last, new Bounds(0, 0, 1200, 700), x, y); last = now;
            var pose = motion.CurrentPose(local);
            Canvas.SetLeft(avatar, local.X); Canvas.SetTop(avatar, local.Y + pose.Y);
            avatar.RenderTransform = new TransformGroup { Children = { new ScaleTransform(motion.FacingLeft ? -pose.ScaleX : pose.ScaleX, pose.ScaleY), new RotateTransform(pose.Angle) } };
        };
        Closed += (_, _) => { timer.Stop(); app.Save(); }; timer.Start();
    }
    void RefreshBackground() => scene.Background = new SolidColorBrush((Color)ColorConverter.ConvertFromString(app.Config.WorldColor));
    void AddObject()
    {
        var dialog = new OpenFileDialog { Filter = "Objeto decorativo|*.png;*.svg" }; if (dialog.ShowDialog(this) != true) return;
        try
        {
            if (app.Config.World.Count >= 32) throw new InvalidDataException("Máximo 32 objetos por escena.");
            var item = new WorldObject { Asset = app.Assets.Import(dialog.FileName), Name = System.IO.Path.GetFileNameWithoutExtension(dialog.FileName) };
            app.Config.World.Add(item); DrawObject(item); app.Save();
        }
        catch (Exception error) { MessageBox.Show(error.Message, "Objeto no importado"); }
    }
    void DrawObject(WorldObject item)
    {
        Image image;
        try { image = new() { Source = app.Assets.Load(item.Asset), Width = item.Size, Height = item.Size, Cursor = Cursors.SizeAll, ToolTip = item.Name }; }
        catch { return; }
        Canvas.SetLeft(image, item.X); Canvas.SetTop(image, item.Y); scene.Children.Add(image);
        Point? start = null; double originX = 0, originY = 0;
        image.MouseLeftButtonDown += (_, e) => { start = e.GetPosition(scene); originX = item.X; originY = item.Y; image.CaptureMouse(); e.Handled = true; };
        image.MouseMove += (_, e) =>
        {
            if (start is not Point origin || e.LeftButton != MouseButtonState.Pressed) return;
            var delta = e.GetPosition(scene) - origin;
            item.X = Math.Clamp(originX + delta.X, 0, 1200 - item.Size); item.Y = Math.Clamp(originY + delta.Y, 0, 700 - item.Size);
            Canvas.SetLeft(image, item.X); Canvas.SetTop(image, item.Y);
        };
        image.MouseLeftButtonUp += (_, e) => { start = null; image.ReleaseMouseCapture(); app.Save(); e.Handled = true; };
        var menu = new ContextMenu();
        var remove = new MenuItem { Header = "Quitar objeto de la escena" }; remove.Click += (_, _) => { app.Config.World.Remove(item); scene.Children.Remove(image); app.Save(); };
        var larger = new MenuItem { Header = "Aumentar tamaño" }; larger.Click += (_, _) => { item.Size = Math.Min(400, item.Size + 20); image.Width = image.Height = item.Size; app.Save(); };
        var smaller = new MenuItem { Header = "Reducir tamaño" }; smaller.Click += (_, _) => { item.Size = Math.Max(24, item.Size - 20); image.Width = image.Height = item.Size; app.Save(); };
        menu.Items.Add(larger); menu.Items.Add(smaller); menu.Items.Add(remove); image.ContextMenu = menu;
    }
}

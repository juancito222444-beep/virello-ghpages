using System.Diagnostics;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Media.Effects;
using System.Windows.Threading;

namespace VirtualAvatar.App;

public sealed class AvatarWindow : Window
{
    readonly App app = App.CurrentApp;
    readonly Viewbox view = new() { Stretch = Stretch.Uniform, Margin = new Thickness(26) };
    readonly Grid body = new() { Width = 160, Height = 180, RenderTransformOrigin = new Point(.5, .7) };
    readonly MotionEngine motion = new();
    readonly ScaleTransform scale = new();
    readonly RotateTransform rotation = new();
    readonly TranslateTransform offset = new();
    readonly DispatcherTimer timer = new() { Interval = TimeSpan.FromSeconds(1.0 / 30) };
    readonly Stopwatch clock = Stopwatch.StartNew();
    NativeDesktop? native;
    IReadOnlyList<ImageSource> frames = [];
    readonly List<(Image Image, bool Mask)> images = [];
    readonly List<ImageBrush> masks = [];
    Point? dragStart;
    Point original;
    bool dragged;
    double lastTime, lastSave;
    int lastFrame = -1;
    bool stopping;
    public bool HotkeyAvailable => native?.HotkeyAvailable == true;
    public AvatarState State => motion.State;
    public Visual AvatarVisual => body;
    public bool NativeClickThrough => native?.IsClickThrough == true;
    public AvatarWindow()
    {
        Title = "Virtual Avatar"; AllowsTransparency = true; WindowStyle = WindowStyle.None; Background = Brushes.Transparent;
        ResizeMode = ResizeMode.NoResize; ShowInTaskbar = false; ShowActivated = false; Focusable = true;
        Content = view; view.Child = body;
        body.RenderTransform = new TransformGroup { Children = { scale, rotation, offset } };
        SourceInitialized += (_, _) =>
        {
            native = new(new WindowInteropHelper(this).Handle, () => { app.Config.ClickThrough = !app.Config.ClickThrough; Apply(); app.Save(); });
            if (!native.HotkeyAvailable && !app.IsVerification) MessageBox.Show("Ctrl+Shift+X ya está ocupado. Click-through queda desactivado. Puedes usar la bandeja para abrir el editor.", "Virtual Avatar");
            Apply(); ClampPosition();
        };
        MouseLeftButtonDown += BeginDrag; MouseMove += Drag; MouseLeftButtonUp += EndDrag;
        MouseRightButtonUp += (_, e) => { OpenMenu(); e.Handled = true; };
        Deactivated += (_, _) => { if (dragStart is not null) FinishDrag(); };
        timer.Tick += (_, _) => Tick(); timer.Start();
        Closing += (_, _) => { Stop(); app.Dispatcher.BeginInvoke(new Action(app.Quit)); };
    }
    Bounds Desktop => new(SystemParameters.VirtualScreenLeft, SystemParameters.VirtualScreenTop, SystemParameters.VirtualScreenWidth, SystemParameters.VirtualScreenHeight);
    public void ClampPosition() { MotionEngine.Clamp(app.Config, Desktop); Left = app.Config.X; Top = app.Config.Y; }
    public void CenterOnScreen()
    { var area = SystemParameters.WorkArea; app.Config.X = area.Left + (area.Width - app.Config.Size) / 2; app.Config.Y = area.Top + (area.Height - app.Config.Size) / 2; ClampPosition(); app.Save(); }
    public void Apply()
    {
        var c = app.Config; c.Validate(); Width = Height = c.Size; Left = c.X; Top = c.Y; Topmost = c.Topmost;
        if (c.ClickThrough && !HotkeyAvailable) c.ClickThrough = false;
        try { native?.SetClickThrough(c.ClickThrough); }
        catch (System.ComponentModel.Win32Exception error) { c.ClickThrough = false; MessageBox.Show(error.Message, "No se pudo cambiar la interacción"); }
        body.Children.Clear(); images.Clear(); masks.Clear(); lastFrame = -1;
        try { frames = app.Assets.Animation(c); }
        catch (Exception error) { frames = [app.Assets.Default]; MessageBox.Show("No se pudo abrir el avatar. Se conserva el activo original.\n" + error.Message, "Virtual Avatar"); }
        var color = (Color)ColorConverter.ConvertFromString(c.Color);
        var outline = (Color)ColorConverter.ConvertFromString(c.OutlineColor);
        if (c.Shadow) AddSilhouette(Colors.Black, 8, 9, .35);
        if (c.Glow > 0)
        {
            var glow = AddSilhouette(color, 0, 0, .7); glow.Effect = new BlurEffect { Radius = c.Glow };
        }
        if (c.Outline > 0)
            for (var i = 0; i < 8; i++) { var angle = i * Math.PI / 4; AddSilhouette(outline, Math.Cos(angle) * c.Outline, Math.Sin(angle) * c.Outline, 1); }
        if (c.Silhouette) AddSilhouette(color, 0, 0, 1);
        else
        {
            var image = new Image { Stretch = Stretch.Fill }; images.Add((image, false)); body.Children.Add(image);
            if (c.Tint) AddSilhouette(color, 0, 0, .4);
        }
        foreach (var layer in c.Layers.Where(l => l.Visible))
        {
            try
            {
                var image = new Image { Source = app.Assets.Load(layer.Asset), Width = 160 * layer.Scale, Height = 180 * layer.Scale,
                    RenderTransformOrigin = new Point(.5, .5), RenderTransform = new TransformGroup { Children = { new RotateTransform(layer.Rotation), new TranslateTransform(layer.X, layer.Y) } } };
                body.Children.Add(image);
            }
            catch (Exception) { /* Keep configuration; missing accessory is repairable in the editor. */ }
        }
        UpdateFrame(0); Opacity = c.Opacity;
    }
    Border AddSilhouette(Color color, double x, double y, double opacity)
    {
        var mask = new ImageBrush { Stretch = Stretch.Fill }; masks.Add(mask);
        var border = new Border { Background = new SolidColorBrush(color), OpacityMask = mask, Opacity = opacity, RenderTransform = new TranslateTransform(x, y) };
        body.Children.Add(border); return border;
    }
    void UpdateFrame(int index)
    {
        if (frames.Count == 0 || index == lastFrame) return; lastFrame = index;
        foreach (var item in images) item.Image.Source = frames[index];
        foreach (var mask in masks) mask.ImageSource = frames[index];
    }
    void Tick()
    {
        var now = clock.Elapsed.TotalSeconds; var dt = now - lastTime; lastTime = now; var c = app.Config;
        double x = 0, y = 0;
        if (IsActive && dragStart is null)
        {
            bool Down(string name) => Enum.TryParse<Key>(name, true, out var key) && Keyboard.IsKeyDown(key);
            x = (Down(c.RightKey) ? 1 : 0) - (Down(c.LeftKey) ? 1 : 0); y = (Down(c.DownKey) ? 1 : 0) - (Down(c.UpKey) ? 1 : 0);
        }
        var cursor = native?.Cursor(); motion.Tick(c, dt, Desktop, x, y, cursor?.X, cursor?.Y);
        if (dragStart is null) { Left = c.X; Top = c.Y; }
        var pose = motion.CurrentPose(c);
        scale.ScaleX = (c.Flip ^ motion.FacingLeft ? -1 : 1) * pose.ScaleX; scale.ScaleY = pose.ScaleY;
        rotation.Angle = c.Rotation + pose.Angle; offset.Y = pose.Y;
        if (frames.Count > 0) UpdateFrame((int)(now * 8 * c.AnimationSpeed) % frames.Count);
        if (now - lastSave > 10) { lastSave = now; app.Save(); }
    }
    void BeginDrag(object sender, MouseButtonEventArgs e)
    {
        Activate(); Focus(); motion.SetState(AvatarState.Clicked, .6);
        if (app.Config.Locked) return;
        dragStart = native?.Cursor() ?? PointToScreen(e.GetPosition(this)); original = new Point(Left, Top); dragged = false; CaptureMouse();
    }
    void Drag(object sender, MouseEventArgs e)
    {
        if (dragStart is not Point start || e.LeftButton != MouseButtonState.Pressed) return;
        var point = native?.Cursor() ?? PointToScreen(e.GetPosition(this)); var delta = point - start;
        if (delta.Length < 3 && !dragged) return; dragged = true; motion.SetState(AvatarState.Dragged);
        app.Config.X = original.X + delta.X; app.Config.Y = original.Y + delta.Y; ClampPosition();
    }
    void EndDrag(object sender, MouseButtonEventArgs e) => FinishDrag();
    void FinishDrag() { dragStart = null; ReleaseMouseCapture(); motion.SetState(dragged ? AvatarState.Idle : AvatarState.Clicked, .6); app.Save(); }
    public void PreviewState(AvatarState state) => motion.SetState(state, state == AvatarState.Jump ? .65 : 2);
    void OpenMenu()
    {
        var menu = new ContextMenu { Background = new SolidColorBrush(Color.FromRgb(23, 33, 57)), Foreground = Brushes.White };
        void Item(string label, Action action) { var item = new MenuItem { Header = label }; item.Click += (_, _) => action(); menu.Items.Add(item); }
        Item("Personalizar avatar / cambiar imagen / color / tamaño", app.OpenEditor);
        Item("Animaciones y accesorios", app.OpenEditor);
        Item("Mundo interactivo", app.OpenWorld);
        Item("Movimiento automático", () => { app.Config.Automatic = !app.Config.Automatic; app.Save(); });
        Item("Always on Top", () => { app.Config.Topmost = !app.Config.Topmost; Apply(); app.Save(); });
        Item("Bloquear posición", () => { app.Config.Locked = !app.Config.Locked; app.Save(); });
        Item("Click-through · Ctrl+Shift+X", () => { app.Config.ClickThrough = !app.Config.ClickThrough; Apply(); app.Save(); });
        Item("Configuración", app.OpenEditor); Item("Cerrar", app.Quit);
        ContextMenu = menu; menu.IsOpen = true;
    }
    public void Stop() { if (stopping) return; stopping = true; timer.Stop(); native?.Dispose(); }
}

using Microsoft.Win32;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Shapes;
using System.Windows.Threading;

namespace VirtualAvatar.App;

public sealed class EditorWindow : Window
{
    readonly App app = App.CurrentApp;
    readonly StackPanel settings = new() { Margin = new Thickness(14) };
    readonly DispatcherTimer save = new() { Interval = TimeSpan.FromMilliseconds(600) };
    readonly Border preview = new() { BorderBrush = Brushes.SlateBlue, BorderThickness = new Thickness(1), Padding = new Thickness(12), Width = 300, Height = 300 };
    readonly Grid previewGrid = new() { HorizontalAlignment = HorizontalAlignment.Left };
    public EditorWindow()
    {
        Title = "Virtual Avatar · Avatar Editor"; Width = 1000; Height = 760; MinWidth = 760; MinHeight = 560;
        var grid = new Grid(); grid.ColumnDefinitions.Add(new ColumnDefinition { Width = new GridLength(370) }); grid.ColumnDefinitions.Add(new ColumnDefinition());
        Content = grid;
        var scroll = new ScrollViewer { Content = settings, VerticalScrollBarVisibility = ScrollBarVisibility.Auto }; grid.Children.Add(scroll);
        var right = new StackPanel { Margin = new Thickness(25), VerticalAlignment = VerticalAlignment.Center };
        Grid.SetColumn(right, 1); grid.Children.Add(right);
        right.Children.Add(new TextBlock { Text = "AVATAR EDITOR", FontSize = 24, FontWeight = FontWeights.Bold });
        right.Children.Add(new TextBlock { Text = "Arrastra el punto inferior para cambiar tamaño. El escritorio solo muestra al personaje cuando cierras este editor." });
        preview.Child = new Rectangle { Fill = new VisualBrush(app.Avatar.AvatarVisual), Stretch = Stretch.Uniform };
        previewGrid.Children.Add(preview);
        foreach (var (x, y) in new[] { (-1, -1), (1, -1), (-1, 1), (1, 1) })
        {
            var thumb = new Thumb { Width = 14, Height = 14, Background = Brushes.DeepSkyBlue, HorizontalAlignment = x < 0 ? HorizontalAlignment.Left : HorizontalAlignment.Right, VerticalAlignment = y < 0 ? VerticalAlignment.Top : VerticalAlignment.Bottom, Cursor = x == y ? Cursors.SizeNWSE : Cursors.SizeNESW };
            thumb.DragDelta += (_, e) => Change(() => app.Config.Size += (x * e.HorizontalChange + y * e.VerticalChange) / 2);
            thumb.DragCompleted += (_, _) => Build(); previewGrid.Children.Add(thumb);
        }
        UpdatePreviewSize(); right.Children.Add(previewGrid);
        right.Children.Add(new TextBlock { Text = "Ctrl+Shift+X: alternar click-through. WASD: mueve el personaje cuando tiene foco. Bandeja: recuperar interacción.", Margin = new Thickness(3, 20, 3, 5) });
        right.Children.Add(Button("Probar salto", () => app.Avatar.PreviewState(AvatarState.Jump)));
        right.Children.Add(Button("Abrir mundo interactivo", app.OpenWorld));
        right.Children.Add(Button("Guardar y cerrar editor", () => { app.Save(); Close(); }));
        save.Tick += (_, _) => { save.Stop(); app.Save(); };
        Closed += (_, _) => { save.Stop(); app.Save(); };
        Build();
    }
    void Change(Action action)
    {
        var previous = app.Config.Clone();
        try { action(); app.Config.Validate(); app.Avatar.Apply(); app.Avatar.ClampPosition(); UpdatePreviewSize(); save.Stop(); save.Start(); }
        catch (Exception error) { app.ReplaceConfig(previous); MessageBox.Show(error.Message, "Revisa el cambio"); }
    }
    void UpdatePreviewSize() { preview.Width = preview.Height = Math.Clamp(app.Config.Size, 64, 420); previewGrid.Width = previewGrid.Height = preview.Width + 16; }
    static Button Button(string text, Action action)
    { var button = new Button { Content = text }; button.Click += (_, _) => action(); return button; }
    void Heading(string title) => settings.Children.Add(new TextBlock { Text = title, FontSize = 18, FontWeight = FontWeights.SemiBold, Margin = new Thickness(3, 20, 3, 6) });
    void Toggle(string title, bool value, Action<bool> change, bool enabled = true)
    {
        var box = new CheckBox { Content = title, IsChecked = value, IsEnabled = enabled };
        box.Click += (_, _) => Change(() => change(box.IsChecked == true)); settings.Children.Add(box);
    }
    void Slider(string title, double value, double min, double max, Action<double> change)
    {
        var label = new TextBlock { Text = $"{title}: {value:0.##}" }; settings.Children.Add(label);
        var slider = new Slider { Minimum = min, Maximum = max, Value = value, Margin = new Thickness(8), SmallChange = (max - min) / 100 };
        slider.ValueChanged += (_, _) => { label.Text = $"{title}: {slider.Value:0.##}"; Change(() => change(slider.Value)); }; settings.Children.Add(slider);
    }
    TextBox Text(string title, string value)
    { settings.Children.Add(new TextBlock { Text = title }); var box = new TextBox { Text = value, MaxLength = 100 }; settings.Children.Add(box); return box; }
    void ImportAvatar()
    {
        var dialog = new OpenFileDialog { Filter = "Avatar PNG / SVG|*.png;*.svg", Multiselect = false };
        if (dialog.ShowDialog(this) != true) return;
        try { var asset = app.Assets.Import(dialog.FileName); Change(() => { app.Config.Asset = asset; app.Config.Frames.Clear(); app.Config.SheetRows = app.Config.SheetColumns = 1; }); Build(); }
        catch (Exception error) { MessageBox.Show(error.Message, "Importación conservada sin cambios"); }
    }
    void Build()
    {
        settings.Children.Clear(); var c = app.Config;
        Heading("Personaje y apariencia"); settings.Children.Add(Button("Cambiar avatar PNG / SVG", ImportAvatar));
        settings.Children.Add(Button("Usar personaje incluido", () => { Change(() => { app.Config.Asset = ""; app.Config.Frames.Clear(); app.Config.SheetRows = app.Config.SheetColumns = 1; }); Build(); }));
        Slider("Tamaño", c.Size, 64, 768, v => app.Config.Size = v);
        Slider("Rotación", c.Rotation, -180, 180, v => app.Config.Rotation = v);
        Slider("Opacidad", c.Opacity, .15, 1, v => app.Config.Opacity = v);
        var color = Text("Color hexadecimal (#RRGGBB)", c.Color);
        settings.Children.Add(Button("Aplicar color", () => Change(() => app.Config.Color = color.Text)));
        Toggle("Modo Silueta", c.Silhouette, v => app.Config.Silhouette = v); Toggle("Aplicar tinte sobre la imagen", c.Tint, v => app.Config.Tint = v);
        Toggle("Voltear horizontalmente", c.Flip, v => app.Config.Flip = v);
        Slider("Grosor del contorno", c.Outline, 0, 8, v => app.Config.Outline = v);
        var outline = Text("Color del contorno", c.OutlineColor); settings.Children.Add(Button("Aplicar contorno", () => Change(() => app.Config.OutlineColor = outline.Text)));
        Slider("Glow / brillo", c.Glow, 0, 30, v => app.Config.Glow = v); Toggle("Sombra", c.Shadow, v => app.Config.Shadow = v);
        Heading("Ventana y movimiento");
        Toggle("Always on Top", c.Topmost, v => app.Config.Topmost = v); Toggle("Bloquear posición", c.Locked, v => app.Config.Locked = v);
        Toggle("Click-through · Ctrl+Shift+X", c.ClickThrough, v => app.Config.ClickThrough = v, app.Avatar.HotkeyAvailable);
        settings.Children.Add(Button("Centrar en pantalla", app.Avatar.CenterOnScreen));
        Slider("Velocidad de movimiento", c.Speed, 10, 400, v => app.Config.Speed = v);
        var up = Text("Arriba", c.UpKey); var left = Text("Izquierda", c.LeftKey); var down = Text("Abajo", c.DownKey); var right = Text("Derecha", c.RightKey);
        settings.Children.Add(Button("Guardar teclas", () =>
        {
            if (new[] { up, left, down, right }.Any(b => !Enum.TryParse<Key>(b.Text, true, out _))) { MessageBox.Show("Escribe nombres de teclas: W, A, S, D, Up, Left, Down, Right…"); return; }
            Change(() => { app.Config.UpKey = up.Text; app.Config.LeftKey = left.Text; app.Config.DownKey = down.Text; app.Config.RightKey = right.Text; });
        }));
        Toggle("Movimiento automático", c.Automatic, v => app.Config.Automatic = v);
        Toggle("Caminar", c.Wander, v => app.Config.Wander = v); Toggle("Pausas aleatorias", c.Pause, v => app.Config.Pause = v);
        Toggle("Mirar hacia el movimiento", c.Look, v => app.Config.Look = v); Toggle("Sentarse", c.Sit, v => app.Config.Sit = v);
        Toggle("Dormir", c.Sleep, v => app.Config.Sleep = v); Toggle("Saltar", c.Jump, v => app.Config.Jump = v);
        Toggle("Reaccionar al cursor", c.ReactToMouse, v => app.Config.ReactToMouse = v); Toggle("Seguir cursor (opcional)", c.FollowCursor, v => app.Config.FollowCursor = v);
        Heading("Animación"); Toggle("Idle procedural", c.IdleAnimation, v => app.Config.IdleAnimation = v);
        Slider("Velocidad de animación", c.AnimationSpeed, .2, 3, v => app.Config.AnimationSpeed = v);
        var states = new ComboBox { ItemsSource = Enum.GetValues<AvatarState>(), SelectedIndex = 0 }; settings.Children.Add(states);
        settings.Children.Add(Button("Probar estado", () => app.Avatar.PreviewState((AvatarState)states.SelectedItem)));
        settings.Children.Add(Button("Importar secuencia PNG (orden por nombre, máximo 32)", () =>
        {
            var dialog = new OpenFileDialog { Filter = "Frames PNG|*.png", Multiselect = true };
            if (dialog.ShowDialog(this) != true) return;
            try
            {
                if (dialog.FileNames.Length > 32) throw new InvalidDataException("Máximo 32 frames.");
                var frames = dialog.FileNames.Order(StringComparer.OrdinalIgnoreCase).Select(app.Assets.Import).ToList();
                Change(() => app.Config.Frames = frames);
            }
            catch (Exception error) { MessageBox.Show(error.Message); }
        }));
        var columns = Text("Spritesheet: columnas (1–8)", c.SheetColumns.ToString()); var rows = Text("Filas (1–8)", c.SheetRows.ToString());
        settings.Children.Add(Button("Usar avatar como spritesheet", () =>
        {
            if (!int.TryParse(columns.Text, out var x) || !int.TryParse(rows.Text, out var y)) return;
            Change(() => { app.Config.SheetColumns = x; app.Config.SheetRows = y; app.Config.Frames.Clear(); });
        }));
        settings.Children.Add(Button("Solo imagen / detener frames", () => Change(() => { app.Config.Frames.Clear(); app.Config.SheetColumns = app.Config.SheetRows = 1; })));
        BuildLayers();
        Heading("Presets persistentes");
        var preset = Text("Nombre del preset", "Avatar 1"); var saved = new ComboBox { ItemsSource = app.Store.Presets().ToList() }; settings.Children.Add(saved);
        settings.Children.Add(Button("Guardar preset", () =>
        {
            try
            {
                if (app.Store.Presets().Contains(preset.Text.Trim()) && MessageBox.Show("¿Reemplazar este preset?", "Preset existente", MessageBoxButton.YesNo) != MessageBoxResult.Yes) return;
                app.Store.SavePreset(preset.Text, app.Config); saved.ItemsSource = app.Store.Presets().ToList();
            }
            catch (Exception error) { MessageBox.Show(error.Message); }
        }));
        settings.Children.Add(Button("Cargar preset", () => { if (saved.SelectedItem is string name) { try { app.ReplaceConfig(app.Store.LoadPreset(name)); Build(); } catch (Exception error) { MessageBox.Show(error.Message); } } }));
    }
    void BuildLayers()
    {
        Heading("Accesorios / capas");
        settings.Children.Add(Button("Añadir accesorio PNG / SVG", () =>
        {
            var dialog = new OpenFileDialog { Filter = "Accesorio|*.png;*.svg" }; if (dialog.ShowDialog(this) != true) return;
            try { if (app.Config.Layers.Count >= 12) throw new InvalidDataException("Máximo 12 capas."); var asset = app.Assets.Import(dialog.FileName); Change(() => app.Config.Layers.Add(new() { Asset = asset, Name = System.IO.Path.GetFileNameWithoutExtension(dialog.FileName) })); Build(); }
            catch (Exception error) { MessageBox.Show(error.Message); }
        }));
        foreach (var layer in app.Config.Layers.ToArray())
        {
            Toggle(layer.Name + " · visible", layer.Visible, v => layer.Visible = v);
            Slider("Posición X · " + layer.Name, layer.X, -160, 160, v => layer.X = v);
            Slider("Posición Y", layer.Y, -180, 180, v => layer.Y = v);
            Slider("Escala", layer.Scale, .1, 3, v => layer.Scale = v); Slider("Giro", layer.Rotation, -180, 180, v => layer.Rotation = v);
            settings.Children.Add(Button("Subir capa", () => { Change(() => { var i = app.Config.Layers.IndexOf(layer); if (i >= 0 && i < app.Config.Layers.Count - 1) { app.Config.Layers.RemoveAt(i); app.Config.Layers.Insert(i + 1, layer); } }); Build(); }));
            settings.Children.Add(Button("Bajar capa", () => { Change(() => { var i = app.Config.Layers.IndexOf(layer); if (i > 0) { app.Config.Layers.RemoveAt(i); app.Config.Layers.Insert(i - 1, layer); } }); Build(); }));
            settings.Children.Add(Button("Quitar " + layer.Name, () => { Change(() => app.Config.Layers.Remove(layer)); Build(); }));
        }
    }
}

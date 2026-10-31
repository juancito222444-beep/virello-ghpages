using System.Windows;
using Forms = System.Windows.Forms;

namespace VirtualAvatar.App;

public partial class App : Application
{
    public ConfigStore Store { get; private set; } = null!;
    public AvatarConfig Config { get; private set; } = new();
    public AvatarAssets Assets { get; private set; } = null!;
    public AvatarWindow Avatar { get; private set; } = null!;
    EditorWindow? editor;
    WorldWindow? world;
    Forms.NotifyIcon? tray;
    bool readOnlyConfiguration;
    string lastSaved = "";
    public bool IsVerification { get; private set; }
    string? verificationRoot;
    System.Threading.Mutex? instance;
    public static App CurrentApp => (App)Current;
    protected override void OnStartup(StartupEventArgs e)
    {
        base.OnStartup(e);
        IsVerification = e.Args.Contains("--verify");
        if (!IsVerification)
        {
            instance = new System.Threading.Mutex(true, @"Local\VirtualAvatar.Desktop", out var created);
            if (!created) { MessageBox.Show("Virtual Avatar ya está abierto. Usa su icono de bandeja para personalizarlo."); Shutdown(); return; }
        }
        verificationRoot = IsVerification ? Path.Combine(Path.GetTempPath(), "VirtualAvatarVerify-" + Guid.NewGuid().ToString("N")) : null;
        Store = new(verificationRoot ?? Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "VirtualAvatar"));
        try { Config = Store.Load(); }
        catch (Exception error) when (error is IOException or System.Text.Json.JsonException or InvalidDataException or UnauthorizedAccessException)
        {
            readOnlyConfiguration = true;
            MessageBox.Show("No se pudo leer la configuración. Se abre un avatar temporal; el archivo original se conserva.\n" + error.Message, "Virtual Avatar");
        }
        Config.ClickThrough = false; // Always start recoverable, never invisible to input after a crash.
        Assets = new(Store); Avatar = new(); MainWindow = Avatar;
        if (IsVerification)
        {
            Avatar.Show();
            var timer = new System.Windows.Threading.DispatcherTimer { Interval = TimeSpan.FromMilliseconds(600) };
            timer.Tick += (_, _) => { timer.Stop(); RunVerification(e.Args); }; timer.Start(); return;
        }
        var menu = new Forms.ContextMenuStrip();
        menu.Items.Add("Avatar Editor", null, (_, _) => Dispatcher.Invoke(OpenEditor));
        menu.Items.Add("Recuperar interacción", null, (_, _) => Dispatcher.Invoke(() => { Config.ClickThrough = false; Avatar.Apply(); }));
        menu.Items.Add("Centrar personaje", null, (_, _) => Dispatcher.Invoke(() => Avatar.CenterOnScreen()));
        menu.Items.Add("Mundo interactivo", null, (_, _) => Dispatcher.Invoke(OpenWorld));
        menu.Items.Add("Cerrar", null, (_, _) => Dispatcher.Invoke(Quit));
        tray = new Forms.NotifyIcon { Icon = System.Drawing.SystemIcons.Application, Text = "Virtual Avatar · Ctrl+Shift+X", ContextMenuStrip = menu, Visible = true };
        tray.DoubleClick += (_, _) => Dispatcher.Invoke(OpenEditor);
        Avatar.Show();
    }
    public void ReplaceConfig(AvatarConfig config)
    {
        config.Validate(); var reopenWorld = world is not null; world?.Close();
        Config = config.Clone(); Config.ClickThrough = false;
        Avatar.Apply(); Avatar.ClampPosition(); Save();
        if (reopenWorld) OpenWorld();
    }
    public void Save()
    {
        if (readOnlyConfiguration) return;
        try
        {
            var serialized = System.Text.Json.JsonSerializer.Serialize(Config);
            if (serialized == lastSaved) return;
            Store.Save(Config); lastSaved = serialized;
        }
        catch (Exception error) when (error is IOException or UnauthorizedAccessException or InvalidDataException)
        { tray?.ShowBalloonTip(4000, "No se pudo guardar", error.Message, Forms.ToolTipIcon.Warning); }
    }
    public void OpenEditor()
    {
        Config.ClickThrough = false; Avatar.Apply();
        if (editor is not null) { editor.Activate(); return; }
        editor = new(); editor.Closed += (_, _) => { editor = null; Save(); }; editor.Show();
    }
    public void OpenWorld()
    {
        if (world is not null) { world.Activate(); return; }
        world = new(); world.Closed += (_, _) => { world = null; Save(); }; world.Show();
    }
    public void Quit() { Save(); tray?.Dispose(); tray = null; Avatar.Stop(); Shutdown(); }
    void RunVerification(string[] args)
    {
        var exit = 0; object report;
        try
        {
            var pixels = new byte[32 * 32 * 4];
            for (var y = 8; y < 24; y++) for (var x = 8; x < 24; x++) for (var channel = 0; channel < 4; channel++) pixels[(y * 32 + x) * 4 + channel] = 255;
            var bitmap = System.Windows.Media.Imaging.BitmapSource.Create(32, 32, 96, 96, System.Windows.Media.PixelFormats.Pbgra32, null, pixels, 128);
            var encoder = new System.Windows.Media.Imaging.PngBitmapEncoder(); encoder.Frames.Add(System.Windows.Media.Imaging.BitmapFrame.Create(bitmap));
            var fixture = Path.Combine(Store.Root, "synthetic.png"); using (var file = File.Create(fixture)) encoder.Save(file);
            Config.Asset = Assets.Import(fixture); Config.Silhouette = true; Config.Color = "#FF0000"; Config.IdleAnimation = false; Avatar.Apply(); Avatar.UpdateLayout();
            var rendered = new System.Windows.Media.Imaging.RenderTargetBitmap(160, 180, 96, 96, System.Windows.Media.PixelFormats.Pbgra32);
            rendered.Render(Avatar.AvatarVisual); var output = new byte[160 * 180 * 4]; rendered.CopyPixels(output, 160 * 4, 0);
            var center = (90 * 160 + 80) * 4;
            if (output[3] != 0 || output[center + 3] < 240 || output[center + 2] < 240 || output[center] > 10) throw new InvalidDataException("Alpha or silhouette rendering failed.");
            if (!Avatar.AllowsTransparency || Avatar.WindowStyle != WindowStyle.None || !Avatar.Topmost || !Avatar.HotkeyAvailable) throw new InvalidDataException("Window flags or global hotkey failed.");
            Config.ClickThrough = true; Avatar.Apply(); if (!Avatar.NativeClickThrough) throw new InvalidDataException("Native click-through flag failed.");
            Config.ClickThrough = false; Avatar.Apply(); if (Avatar.NativeClickThrough) throw new InvalidDataException("Click-through recovery failed.");
            var svg = Path.Combine(Store.Root, "synthetic.svg");
            File.WriteAllText(svg, "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\"><path d=\"M0 64 L32 0 L64 64 Z\" fill=\"#00FF00\"/></svg>");
            var svgAsset = Assets.Import(svg); if (Assets.Load(svgAsset).Width <= 0) throw new InvalidDataException("SVG import failed.");
            File.WriteAllText(svg, "<svg xmlns=\"http://www.w3.org/2000/svg\"><script>alert(1)</script></svg>");
            var unsafeRejected = false; try { Assets.Import(svg); } catch (InvalidDataException) { unsafeRejected = true; }
            if (!unsafeRejected) throw new InvalidDataException("Unsafe SVG accepted.");
            Save(); if (!Store.Load().Silhouette) throw new InvalidDataException("Persistence failed.");
            var desktopMemory = System.Diagnostics.Process.GetCurrentProcess().WorkingSet64;
            Config.Asset = ""; Config.Silhouette = false; Avatar.Apply();
            OpenEditor(); OpenWorld(); editor!.UpdateLayout(); world!.UpdateLayout();
            if (!editor.IsVisible || !world.IsVisible) throw new InvalidDataException("Editor or world did not open.");
            var destination = Array.IndexOf(args, "--verify-report");
            if (destination >= 0 && destination + 1 < args.Length)
            {
                void Snapshot(Window window, string suffix)
                {
                    var capture = new System.Windows.Media.Imaging.RenderTargetBitmap((int)window.ActualWidth, (int)window.ActualHeight, 96, 96, System.Windows.Media.PixelFormats.Pbgra32);
                    capture.Render(window); var png = new System.Windows.Media.Imaging.PngBitmapEncoder(); png.Frames.Add(System.Windows.Media.Imaging.BitmapFrame.Create(capture));
                    using var file = new FileStream(Path.ChangeExtension(args[destination + 1], suffix), FileMode.CreateNew); png.Save(file);
                }
                Snapshot(editor, "editor.png"); Snapshot(world, "world.png");
            }
            report = new { passed = true, alphaCorner = output[3], silhouetteRed = output[center + 2], hotkeyRegistered = true, clickThroughStyleAndRecovery = true, svgLoaded = true, unsafeSvgRejected = true, editorAndWorldOpened = true, workingSetBytes = desktopMemory, editorAndWorldWorkingSetBytes = System.Diagnostics.Process.GetCurrentProcess().WorkingSet64, note = "Does not simulate clicks reaching a second application or measure long-running memory." };
        }
        catch (Exception error) { exit = 1; report = new { passed = false, error = error.ToString() }; }
        var json = System.Text.Json.JsonSerializer.Serialize(report, new System.Text.Json.JsonSerializerOptions { WriteIndented = true });
        Console.WriteLine(json);
        var reportIndex = Array.IndexOf(args, "--verify-report");
        if (reportIndex >= 0 && reportIndex + 1 < args.Length)
        {
            try { using var file = new FileStream(args[reportIndex + 1], FileMode.CreateNew); using var writer = new StreamWriter(file); writer.Write(json); }
            catch (IOException) { exit = 1; }
        }
        Avatar.Stop(); Shutdown(exit);
    }
    protected override void OnExit(ExitEventArgs e)
    {
        tray?.Dispose();
        instance?.Dispose();
        if (verificationRoot is not null) { try { Directory.Delete(verificationRoot, true); } catch (IOException) { } }
        base.OnExit(e);
    }
}

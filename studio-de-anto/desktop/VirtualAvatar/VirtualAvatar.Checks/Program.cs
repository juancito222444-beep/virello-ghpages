using VirtualAvatar.Core;

var count = 0;
void Check(string name, Action test) { test(); count++; Console.WriteLine("PASS " + name); }
void Assert(bool value) { if (!value) throw new Exception("Regression failed"); }
void Reject(Action action) { try { action(); } catch (InvalidDataException) { return; } throw new Exception("Unsafe input accepted"); }
var root = Path.Combine(Path.GetTempPath(), "virtual-avatar-check-" + Guid.NewGuid().ToString("N"));
try
{
    var store = new ConfigStore(root);
    Check("round-trip preserves appearance, positions, layers and world", () =>
    {
        var c = new AvatarConfig { X = -80, Y = 200, Use3D = true, Outfit3D = "street", HairStyle3D = "bob", EyesColor3D = "#12ABEF", Silhouette = true, Color = "#FF1234", Rotation = 42, Automatic = true, Frames = ["a.png"], Layers = [new() { Asset = "hat.png", X = 12, Rotation = 20 }], World = [new() { Asset = "tree.png", X = 90 }] };
        store.Save(c); var restored = store.Load();
        Assert(restored.X == -80 && restored.Color == "#FF1234" && restored.Silhouette && restored.Layers[0].X == 12 && restored.World[0].Asset == "tree.png" && restored.Frames.Count == 1 && restored.Use3D && restored.Outfit3D == "street" && restored.HairStyle3D == "bob" && restored.EyesColor3D == "#12ABEF");
    });
    Check("presets and clones do not share mutable layers", () =>
    {
        var c = store.Load(); store.SavePreset("Avatar rojo", c); var clone = store.LoadPreset("Avatar rojo"); clone.Layers[0].X = 400;
        Assert(store.LoadPreset("Avatar rojo").Layers[0].X == 12); Assert(c.Layers[0].X == 12);
        var duplicate = c.Clone(); duplicate.Frames.Clear(); Assert(c.Frames.Count == 1);
    });
    Check("path traversal cannot escape private asset or preset directories", () =>
    {
        Reject(() => store.SavePreset("../outside", new())); Reject(() => store.ResolveAsset("../secret.png")); Reject(() => store.ResolveAsset("a\\b.png"));
    });
    Check("invalid config is preserved instead of silently overwritten", () =>
    {
        var path = Path.Combine(root, "settings.json"); File.WriteAllText(path, "{\"Version\":99}"); Reject(() => store.Load()); Assert(File.ReadAllText(path) == "{\"Version\":99}");
        store.Save(new()); Assert(!Directory.EnumerateFiles(root, "*.tmp").Any());
    });
    Check("numeric limits keep the avatar visible and finite", () =>
    {
        var c = new AvatarConfig { Size = 99999, Opacity = 0, X = double.NaN, Glow = 100, Color = "bad" }; c.Validate();
        Assert(c.Size == 768 && c.Opacity == .15 && double.IsFinite(c.X) && c.Glow == 30 && c.Color == "#71B7FF");
    });
    Check("invalid keys and excessive frame counts fail", () =>
    {
        Reject(() => new AvatarConfig { UpKey = "A" }.Validate()); Reject(() => new AvatarConfig { Frames = Enumerable.Repeat("a.png", 33).ToList() }.Validate());
    });
    Check("manual diagonal speed is normalized", () =>
    {
        var c = new AvatarConfig { X = 300, Y = 300, Size = 100, Speed = 100 }; var engine = new MotionEngine();
        engine.Tick(c, .1, new(0, 0, 2000, 1000), 1, 1);
        Assert(Math.Abs(Math.Sqrt(Math.Pow(c.X - 300, 2) + Math.Pow(c.Y - 300, 2)) - 10) < .001);
    });
    Check("locked position ignores manual and automatic movement", () =>
    {
        var c = new AvatarConfig { X = 100, Y = 100, Locked = true, Automatic = true }; new MotionEngine().Tick(c, .1, new(0, 0, 1000, 1000), 1, 1); Assert(c.X == 100 && c.Y == 100);
    });
    Check("off-screen position recovers within negative-origin desktops", () =>
    {
        var c = new AvatarConfig { X = -9999, Y = 9999, Size = 200 }; MotionEngine.Clamp(c, new(-1920, 0, 3840, 1080)); Assert(c.X == -1920 && c.Y == 880);
    });
    Check("suspended time cannot teleport the avatar", () =>
    {
        var c = new AvatarConfig { X = 100, Y = 100, Speed = 100 }; var engine = new MotionEngine(); engine.Tick(c, 10000, new(0, 0, 2000, 1000), 1); Assert(c.X == 110);
    });
    Check("disabled automatic behaviors never enter those states", () =>
    {
        var c = new AvatarConfig { Automatic = true, Wander = false, Pause = false, Sit = false, Sleep = false, Jump = false }; var engine = new MotionEngine();
        for (var i = 0; i < 100; i++) engine.Tick(c, .1, new(0, 0, 2000, 1000)); Assert(engine.State == AvatarState.Idle);
    });
    Check("idle can stop and all procedural states produce finite poses", () =>
    {
        var c = new AvatarConfig { IdleAnimation = false }; var engine = new MotionEngine(); Assert(engine.CurrentPose(c) == new Pose(0, 0, 1, 1));
        foreach (var state in Enum.GetValues<AvatarState>()) { engine.SetState(state); var p = engine.CurrentPose(c); Assert(double.IsFinite(p.Y) && p.ScaleX > 0 && p.ScaleY > 0); }
    });
    Console.WriteLine($"{count} core checks passed. Windows window behavior is not exercised by these checks.");
}
finally { Directory.Delete(root, true); }

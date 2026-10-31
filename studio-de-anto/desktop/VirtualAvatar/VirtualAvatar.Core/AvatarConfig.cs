using System.Text.Json;

namespace VirtualAvatar.Core;

public enum AvatarState { Idle, Walk, Run, Jump, Sit, Sleep, Dragged, Clicked }
public sealed class LayerConfig
{
    public string Name { get; set; } = "Accesorio";
    public string Asset { get; set; } = "";
    public double X { get; set; }
    public double Y { get; set; }
    public double Scale { get; set; } = 1;
    public double Rotation { get; set; }
    public bool Visible { get; set; } = true;
}
public sealed class WorldObject : LayerBase
{
    public string Name { get; set; } = "Objeto";
    public string Asset { get; set; } = "";
}
public class LayerBase
{
    public double X { get; set; } = 100;
    public double Y { get; set; } = 100;
    public double Size { get; set; } = 100;
}
public sealed class AvatarConfig
{
    public bool Use3D { get; set; }
    public string Outfit3D { get; set; } = "cardigan";
    public string HairStyle3D { get; set; } = "long";
    public string HairColor3D { get; set; } = "#292037";
    public string EyesColor3D { get; set; } = "#73508D";
    public string SkinColor3D { get; set; } = "#F2CDBD";
    public string ClothingColor3D { get; set; } = "#B3A0DC";
    public string AccentColor3D { get; set; } = "#F8EEE8";
    public double Turn3D { get; set; }
    public int Version { get; set; } = 1;
    public string Asset { get; set; } = "";
    public double X { get; set; } = 100;
    public double Y { get; set; } = 100;
    public double Size { get; set; } = 200;
    public double Rotation { get; set; }
    public double Opacity { get; set; } = 1;
    public string Color { get; set; } = "#71B7FF";
    public bool Silhouette { get; set; }
    public bool Tint { get; set; }
    public bool Flip { get; set; }
    public double Outline { get; set; }
    public string OutlineColor { get; set; } = "#FFFFFF";
    public double Glow { get; set; }
    public bool Shadow { get; set; }
    public bool Topmost { get; set; } = true;
    public bool Locked { get; set; }
    public bool ClickThrough { get; set; }
    public bool IdleAnimation { get; set; } = true;
    public double AnimationSpeed { get; set; } = 1;
    public double Speed { get; set; } = 90;
    public bool Automatic { get; set; }
    public bool Wander { get; set; } = true;
    public bool Pause { get; set; } = true;
    public bool Look { get; set; } = true;
    public bool Sit { get; set; } = true;
    public bool Sleep { get; set; } = true;
    public bool Jump { get; set; } = true;
    public bool ReactToMouse { get; set; } = true;
    public bool FollowCursor { get; set; }
    public string UpKey { get; set; } = "W";
    public string LeftKey { get; set; } = "A";
    public string DownKey { get; set; } = "S";
    public string RightKey { get; set; } = "D";
    public List<string> Frames { get; set; } = [];
    public int SheetColumns { get; set; } = 1;
    public int SheetRows { get; set; } = 1;
    public List<LayerConfig> Layers { get; set; } = [];
    public string WorldColor { get; set; } = "#172139";
    public List<WorldObject> World { get; set; } = [];

    public AvatarConfig Clone() => JsonSerializer.Deserialize<AvatarConfig>(JsonSerializer.Serialize(this))!;
    static double Limit(double value, double low, double high, double fallback) => double.IsFinite(value) ? Math.Clamp(value, low, high) : fallback;
    static string Hex(string? value, string fallback) => value is { Length: 7 } && value[0] == '#' && value.Skip(1).All(Uri.IsHexDigit) ? value : fallback;
    public void Validate()
    {
        if (Version != 1) throw new InvalidDataException("Versión de configuración no compatible.");
        Outfit3D = new[] { "cardigan", "street", "dress" }.Contains(Outfit3D) ? Outfit3D : "cardigan";
        HairStyle3D = new[] { "long", "bob", "ponytail" }.Contains(HairStyle3D) ? HairStyle3D : "long";
        HairColor3D = Hex(HairColor3D, "#292037"); EyesColor3D = Hex(EyesColor3D, "#73508D"); SkinColor3D = Hex(SkinColor3D, "#F2CDBD");
        ClothingColor3D = Hex(ClothingColor3D, "#B3A0DC"); AccentColor3D = Hex(AccentColor3D, "#F8EEE8");
        Turn3D = Limit(Turn3D, -180, 180, 0);
        X = Limit(X, -50000, 50000, 100); Y = Limit(Y, -50000, 50000, 100);
        Size = Limit(Size, 64, 768, 200); Rotation = Limit(Rotation, -180, 180, 0);
        Opacity = Limit(Opacity, .15, 1, 1); Outline = Limit(Outline, 0, 8, 0); Glow = Limit(Glow, 0, 30, 0);
        Speed = Limit(Speed, 10, 400, 90); AnimationSpeed = Limit(AnimationSpeed, .2, 3, 1);
        Color = Hex(Color, "#71B7FF"); OutlineColor = Hex(OutlineColor, "#FFFFFF"); WorldColor = Hex(WorldColor, "#172139");
        Asset ??= ""; Frames ??= []; Layers ??= []; World ??= [];
        if (Frames.Count > 32 || Layers.Count > 12 || World.Count > 32) throw new InvalidDataException("Demasiados frames, capas u objetos.");
        if (Frames.Any(x => x is null) || Layers.Any(x => x is null) || World.Any(x => x is null)) throw new InvalidDataException("La configuración contiene elementos vacíos.");
        SheetColumns = Math.Clamp(SheetColumns, 1, 8); SheetRows = Math.Clamp(SheetRows, 1, 8);
        var keys = new[] { UpKey, LeftKey, DownKey, RightKey };
        if (keys.Any(k => string.IsNullOrWhiteSpace(k) || k.Length > 12) || keys.Distinct(StringComparer.OrdinalIgnoreCase).Count() != 4)
            throw new InvalidDataException("Usa cuatro teclas distintas para el movimiento.");
        foreach (var layer in Layers)
        {
            layer.X = Limit(layer.X, -160, 160, 0); layer.Y = Limit(layer.Y, -180, 180, 0);
            layer.Scale = Limit(layer.Scale, .1, 3, 1); layer.Rotation = Limit(layer.Rotation, -180, 180, 0);
        }
        foreach (var item in World)
        {
            item.X = Limit(item.X, 0, 1200, 100); item.Y = Limit(item.Y, 0, 700, 100); item.Size = Limit(item.Size, 24, 400, 100);
        }
    }
}

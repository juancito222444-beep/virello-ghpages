using System.Text.Json;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;

namespace VirtualAvatar.App;

// Original Studio mesh, exported locally; no browser, URLs or external model loader.
public sealed class NativeHana
{
    static readonly JsonDocument source = JsonDocument.Parse(File.ReadAllText(Path.Combine(AppContext.BaseDirectory, "Assets", "hana-native.json")));
    static readonly Dictionary<int, MeshGeometry3D> geometryCache = new();
    static readonly Dictionary<string, ImageBrush> textureCache = new();
    readonly Dictionary<string, AxisAngleRotation3D> joints = new();
    readonly AxisAngleRotation3D turn = new(new Vector3D(0, 1, 0), 0);
    readonly AxisAngleRotation3D rest = new(new Vector3D(0, 0, 1), 0);
    readonly GeometryModel3D? face;
    readonly Material? openEyes, closedEyes;
    ScaleTransform3D? eyeScale;
    public Viewport3D View { get; } = new() { ClipToBounds = true, IsHitTestVisible = false };
    public NativeHana(AvatarConfig config)
    {
        var world = new Model3DGroup();
        world.Children.Add(new AmbientLight(Color.FromRgb(125, 115, 130)));
        world.Children.Add(new DirectionalLight(Color.FromRgb(235, 225, 220), new Vector3D(-1, -2, -3)));
        world.Children.Add(new DirectionalLight(Color.FromRgb(95, 90, 120), new Vector3D(1, 0, 1)));
        var character = Build(source.RootElement.GetProperty("root"), config);
        var resting = new Model3DGroup { Transform = new Transform3DGroup { Children = {
            new TranslateTransform3D(0, 2.5, 0), new RotateTransform3D(rest), new TranslateTransform3D(0, -2.5, 0) } } };
        resting.Children.Add(character); var rotate = new Model3DGroup { Transform = new RotateTransform3D(turn) }; rotate.Children.Add(resting); world.Children.Add(rotate);
        turn.Angle = config.Turn3D;
        View.Camera = new PerspectiveCamera(new Point3D(0, 2.5, 9.5), new Vector3D(0, 0, -1), new Vector3D(0, 1, 0), 35);
        View.Children.Add(new ModelVisual3D { Content = world });
        face = FindFace(character);
        if (face is not null) { openEyes = new DiffuseMaterial(Texture(source.RootElement.GetProperty("open").GetString()!)); closedEyes = new DiffuseMaterial(Texture(source.RootElement.GetProperty("closed").GetString()!)); face.Material = openEyes; face.BackMaterial = openEyes; }
    }
    static GeometryModel3D? FindFace(Model3D node)
    {
        if (node is GeometryModel3D mesh && mesh.Material is DiffuseMaterial material && material.Brush is ImageBrush) return mesh;
        if (node is Model3DGroup group) foreach (var child in group.Children) if (FindFace(child) is { } found) return found;
        return null;
    }
    static ImageBrush Texture(string encoded)
    {
        if (textureCache.TryGetValue(encoded, out var cached)) return cached;
        var bytes = Convert.FromBase64String(encoded[(encoded.IndexOf(',') + 1)..]);
        using var stream = new MemoryStream(bytes); var image = new BitmapImage(); image.BeginInit(); image.CacheOption = BitmapCacheOption.OnLoad; image.StreamSource = stream; image.EndInit(); image.Freeze();
        var brush = new ImageBrush(image) { Stretch = Stretch.Fill }; brush.Freeze(); textureCache[encoded] = brush; return brush;
    }
    static ImageBrush TintedEyes(string encoded, string hex)
    {
        var source = Texture(encoded).ImageSource!;
        var converted = new FormatConvertedBitmap((BitmapSource)source, PixelFormats.Pbgra32, null, 0);
        var bitmap = new WriteableBitmap(converted); var pixels = new byte[bitmap.PixelWidth * bitmap.PixelHeight * 4]; bitmap.CopyPixels(pixels, bitmap.PixelWidth * 4, 0);
        var target = (Color)ColorConverter.ConvertFromString(hex); var width = bitmap.PixelWidth; var height = bitmap.PixelHeight;
        for (var y = 0; y < height; y++) for (var x = 0; x < width; x++)
        {
            var u = (double)x / width; var v = (double)y / height;
            var left = Math.Pow((u - .279) / .088, 2) + Math.Pow((v - .428) / .096, 2);
            var right = Math.Pow((u - .721) / .088, 2) + Math.Pow((v - .428) / .096, 2);
            if (Math.Min(left, right) > 1) continue;
            var i = (y * width + x) * 4; var b = pixels[i]; var g = pixels[i + 1]; var r = pixels[i + 2]; var max = Math.Max(r, Math.Max(g, b)); var min = Math.Min(r, Math.Min(g, b));
            if (max < 35 || max > 235 || max - min < 22) continue;
            pixels[i] = (byte)(target.B * max / 255); pixels[i + 1] = (byte)(target.G * max / 255); pixels[i + 2] = (byte)(target.R * max / 255);
        }
        bitmap.WritePixels(new Int32Rect(0, 0, width, height), pixels, width * 4, 0); bitmap.Freeze(); var brush = new ImageBrush(bitmap) { Stretch = Stretch.Fill }; brush.Freeze(); return brush;
    }
    static MeshGeometry3D Geometry(int index)
    {
        if (geometryCache.TryGetValue(index, out var cached)) return cached;
        var entry = source.RootElement.GetProperty("geometries")[index];
        double[] Values(string name) => entry.GetProperty(name).EnumerateArray().Select(v => v.GetDouble()).ToArray();
        var mesh = new MeshGeometry3D(); var p = Values("positions"); var n = Values("normals"); var uv = Values("uv");
        for (var i = 0; i < p.Length; i += 3) mesh.Positions.Add(new Point3D(p[i], p[i + 1], p[i + 2]));
        for (var i = 0; i < n.Length; i += 3) mesh.Normals.Add(new Vector3D(n[i], n[i + 1], n[i + 2]));
        for (var i = 0; i < uv.Length; i += 2) mesh.TextureCoordinates.Add(new Point(uv[i], 1 - uv[i + 1]));
        foreach (var value in entry.GetProperty("indices").EnumerateArray()) mesh.TriangleIndices.Add(value.GetInt32());
        mesh.Freeze(); geometryCache[index] = mesh; return mesh;
    }
    Model3D Build(JsonElement node, AvatarConfig c)
    {
        var result = new Model3DGroup(); var name = node.GetProperty("name").GetString() ?? "";
        if (name.StartsWith("outfit:") ? name != "outfit:" + c.Outfit3D : name.StartsWith("hair:") ? name != "hair:" + c.HairStyle3D : name == "pants" ? c.Outfit3D != "street" : !node.GetProperty("visible").GetBoolean()) return result;
        var a = node.GetProperty("matrix").EnumerateArray().Select(v => v.GetDouble()).ToArray();
        var transforms = new Transform3DGroup();
        if (name == "eyes") { eyeScale = new ScaleTransform3D(1, 1, 1); transforms.Children.Add(eyeScale); }
        if (name is "head" or "leftArm" or "rightArm" or "leftHip" or "rightHip")
        { var rotation = new AxisAngleRotation3D(new Vector3D(1, 0, 0), 0); joints[name] = rotation; transforms.Children.Add(new RotateTransform3D(rotation)); }
        transforms.Children.Add(new MatrixTransform3D(new Matrix3D(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]))); result.Transform = transforms;
        if (node.TryGetProperty("geometry", out var id))
        {
            var m = node.GetProperty("material"); var materialName = m.GetProperty("name").GetString();
            var color = materialName switch { "skin" => c.SkinColor3D, "hair" or "hairLight" => c.HairColor3D, "cloth" => c.ClothingColor3D, "accent" => c.AccentColor3D, "eyeIris" => c.EyesColor3D, _ => m.GetProperty("color").GetString()! };
            Brush brush = m.TryGetProperty("texture", out var texture) ? Texture(texture.GetString()!) : new SolidColorBrush((Color)ColorConverter.ConvertFromString(color));
            var material = new MaterialGroup(); material.Children.Add(new DiffuseMaterial(brush));
            if (materialName is "skin" or "hair" or "hairLight" or "eyeIris")
            {
                var shine = materialName switch { "hair" or "hairLight" => Color.FromArgb(105, 255, 239, 226), "eyeIris" => Color.FromArgb(155, 255, 255, 255), _ => Color.FromArgb(48, 255, 226, 208) };
                var gloss = new SolidColorBrush(shine); gloss.Freeze(); material.Children.Add(new SpecularMaterial(gloss, materialName is "hair" or "hairLight" ? 42 : materialName == "eyeIris" ? 70 : 18));
            }
            if (material.CanFreeze) material.Freeze();
            result.Children.Add(new GeometryModel3D(Geometry(id.GetInt32()), material) { BackMaterial = material });
        }
        foreach (var child in node.GetProperty("children").EnumerateArray()) result.Children.Add(Build(child, c));
        return result;
    }
    public void Animate(double time, AvatarState state, AvatarConfig c)
    {
        var t = c.IdleAnimation ? time * c.AnimationSpeed : 0; var walking = state is AvatarState.Walk or AvatarState.Run; rest.Angle = state == AvatarState.Sleep ? 88 : 0;
        var blink = t > 0 && t % 5.1 < .16; if (eyeScale is not null) eyeScale.ScaleY = state == AvatarState.Sleep || blink ? .05 : 1;
        foreach (var (name, rotation) in joints)
        {
            rotation.Axis = name == "head" ? new Vector3D(0, 0, 1) : new Vector3D(1, 0, 0);
            rotation.Angle = name == "head" ? state == AvatarState.Sleep ? 65 : Math.Sin(t * .7) : name.EndsWith("Hip") && (state is AvatarState.Sit or AvatarState.Sleep) ? -68 : name.EndsWith("Knee") && (state is AvatarState.Sit or AvatarState.Sleep) ? 112 : walking ? Math.Sin(t * 8 + (name.StartsWith("right") ? Math.PI : 0) + (name.EndsWith("Arm") ? Math.PI : 0)) * 20 : 0;
            if (name == "rightArm" && state == AvatarState.Clicked) { rotation.Axis = new Vector3D(0, 0, 1); rotation.Angle = -140 + Math.Sin(t * 12) * 8; }
        }
        if (face is not null) { face.Material = state == AvatarState.Sleep || blink ? closedEyes : openEyes; face.BackMaterial = face.Material; }
    }
}

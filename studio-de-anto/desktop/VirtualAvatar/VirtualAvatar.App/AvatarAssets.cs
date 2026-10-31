using System.Buffers.Binary;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Xml;
using System.Xml.Linq;
using System.Text.RegularExpressions;
using SharpVectors.Converters;
using SharpVectors.Renderers.Wpf;

namespace VirtualAvatar.App;

public sealed class AvatarAssets(ConfigStore store)
{
    readonly Dictionary<string, ImageSource> cache = [];
    public ImageSource Default { get; } = DefaultAvatar();
    public string Import(string source)
    {
        var extension = Path.GetExtension(source).ToLowerInvariant();
        if (extension is not ".png" and not ".svg") throw new InvalidDataException("Importa PNG transparente o SVG vectorial.");
        if (new FileInfo(source).Length is <= 0 or > 8 * 1024 * 1024) throw new InvalidDataException("Cada activo debe ocupar entre 1 byte y 8 MB.");
        if (extension == ".svg") ValidateSvg(source); else ValidatePng(source);
        var name = Guid.NewGuid().ToString("N") + extension; var target = store.ResolveAsset(name);
        File.Copy(source, target, false);
        try { _ = Load(name); return name; }
        catch { File.Delete(target); throw; }
    }
    static int ValidatePng(string path)
    {
        using var file = File.OpenRead(path); Span<byte> header = stackalloc byte[24]; file.ReadExactly(header);
        if (!header[..8].SequenceEqual(new byte[] { 137, 80, 78, 71, 13, 10, 26, 10 })) throw new InvalidDataException("PNG inválido.");
        var width = BinaryPrimitives.ReadUInt32BigEndian(header[16..20]); var height = BinaryPrimitives.ReadUInt32BigEndian(header[20..24]);
        if (width is 0 or > 4096 || height is 0 or > 4096) throw new InvalidDataException("Máximo 4096 × 4096 píxeles por PNG.");
        return (int)width;
    }
    static void ValidateSvg(string path)
    {
        if (new FileInfo(path).Length > 2 * 1024 * 1024) throw new InvalidDataException("SVG: máximo 2 MB.");
        using var reader = XmlReader.Create(path, new XmlReaderSettings { DtdProcessing = DtdProcessing.Prohibit, XmlResolver = null, MaxCharactersInDocument = 2 * 1024 * 1024 });
        var document = XDocument.Load(reader);
        var allowed = new HashSet<string> { "svg", "g", "path", "rect", "circle", "ellipse", "line", "polyline", "polygon", "defs", "linearGradient", "radialGradient", "stop", "clipPath", "title", "desc" };
        if (document.Root?.Name.LocalName != "svg") throw new InvalidDataException("SVG inválido.");
        foreach (var element in document.Root.DescendantsAndSelf())
        {
            if (!allowed.Contains(element.Name.LocalName)) throw new InvalidDataException("Este SVG contiene elementos no admitidos. Exporta trazados vectoriales simples.");
            foreach (var attribute in element.Attributes())
            {
                var value = attribute.Value;
                if (attribute.Name.LocalName.StartsWith("on", StringComparison.OrdinalIgnoreCase) || attribute.Name.LocalName is "href" or "base"
                    || value.Contains("@", StringComparison.Ordinal) || value.Contains("://", StringComparison.Ordinal) && !attribute.IsNamespaceDeclaration
                    || value.Contains("javascript:", StringComparison.OrdinalIgnoreCase) || value.Contains("data:", StringComparison.OrdinalIgnoreCase))
                    throw new InvalidDataException("SVG sin scripts, imágenes incrustadas ni referencias externas.");
                foreach (Match match in Regex.Matches(value, @"url\s*\(([^)]*)\)", RegexOptions.IgnoreCase))
                    if (!match.Groups[1].Value.Trim(' ', '\'', '"').StartsWith('#')) throw new InvalidDataException("Referencia SVG externa no permitida.");
            }
        }
    }
    public ImageSource Load(string name)
    {
        if (string.IsNullOrEmpty(name)) return Default;
        if (cache.TryGetValue(name, out var existing)) return existing;
        var path = store.ResolveAsset(name); ImageSource image;
        if (Path.GetExtension(path).Equals(".svg", StringComparison.OrdinalIgnoreCase))
        {
            ValidateSvg(path);
            var drawing = new FileSvgReader(new WpfDrawingSettings { IncludeRuntime = false, TextAsGeometry = true }).Read(path);
            image = new DrawingImage(drawing ?? throw new InvalidDataException("No se pudo renderizar el SVG."));
        }
        else
        {
            var width = ValidatePng(path);
            using var stream = File.OpenRead(path);
            var bitmap = new BitmapImage(); bitmap.BeginInit(); bitmap.CacheOption = BitmapCacheOption.OnLoad; bitmap.DecodePixelWidth = Math.Min(512, width);
            bitmap.StreamSource = stream; bitmap.EndInit(); image = bitmap;
        }
        if (image.CanFreeze) image.Freeze();
        // Bound retained decoded assets. Active visuals keep their own references.
        if (cache.Count >= 64) cache.Clear(); cache[name] = image; return image;
    }
    public IReadOnlyList<ImageSource> Animation(AvatarConfig config)
    {
        if (config.Frames.Count > 0) return config.Frames.Select(Load).ToList();
        var image = Load(config.Asset);
        if (config.SheetColumns == 1 && config.SheetRows == 1) return [image];
        if (image is not BitmapSource bitmap) throw new InvalidDataException("Un spritesheet debe ser PNG.");
        var width = bitmap.PixelWidth / config.SheetColumns; var height = bitmap.PixelHeight / config.SheetRows;
        if (width < 1 || height < 1) throw new InvalidDataException("La cuadrícula no cabe en la imagen.");
        var frames = new List<ImageSource>();
        for (var y = 0; y < config.SheetRows; y++) for (var x = 0; x < config.SheetColumns; x++)
        { var frame = new CroppedBitmap(bitmap, new Int32Rect(x * width, y * height, width, height)); frame.Freeze(); frames.Add(frame); }
        return frames;
    }
    static ImageSource DefaultAvatar()
    {
        var group = new DrawingGroup();
        group.Children.Add(new GeometryDrawing(Brushes.Transparent, null, new RectangleGeometry(new Rect(0, 0, 160, 180))));
        group.Children.Add(new GeometryDrawing(new SolidColorBrush(Color.FromRgb(94, 165, 255)), null, Geometry.Parse("M32,63 L38,15 L65,40 Q80,32 96,40 L125,15 L130,65 Q150,130 116,158 Q80,178 44,157 Q14,135 32,63 Z")));
        group.Children.Add(new GeometryDrawing(Brushes.White, null, new EllipseGeometry(new Point(61, 88), 12, 17)));
        group.Children.Add(new GeometryDrawing(Brushes.White, null, new EllipseGeometry(new Point(102, 88), 12, 17)));
        group.Children.Add(new GeometryDrawing(Brushes.MidnightBlue, null, new EllipseGeometry(new Point(65, 90), 5, 9)));
        group.Children.Add(new GeometryDrawing(Brushes.MidnightBlue, null, new EllipseGeometry(new Point(98, 90), 5, 9)));
        group.Children.Add(new GeometryDrawing(Brushes.Pink, null, new EllipseGeometry(new Point(80, 116), 8, 5)));
        var image = new DrawingImage(group); image.Freeze(); return image;
    }
}

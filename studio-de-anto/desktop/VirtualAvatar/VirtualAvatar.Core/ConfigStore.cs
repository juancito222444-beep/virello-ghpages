using System.Text.Json;

namespace VirtualAvatar.Core;

public sealed class ConfigStore
{
    public string Root { get; }
    public string Assets => Path.Combine(Root, "assets");
    static readonly JsonSerializerOptions Options = new() { WriteIndented = true };
    public ConfigStore(string root) { Root = root; Directory.CreateDirectory(Assets); Directory.CreateDirectory(Path.Combine(root, "presets")); }
    public AvatarConfig Load() => Read(Path.Combine(Root, "settings.json"));
    public void Save(AvatarConfig config) => Write(Path.Combine(Root, "settings.json"), config);
    public IEnumerable<string> Presets() => Directory.EnumerateFiles(Path.Combine(Root, "presets"), "*.json").Select(Path.GetFileNameWithoutExtension).OfType<string>().Order();
    string PresetPath(string name)
    {
        if (string.IsNullOrWhiteSpace(name) || name.Length > 60 || name.Any(c => !char.IsLetterOrDigit(c) && c != ' ' && c != '-' && c != '_'))
            throw new InvalidDataException("Nombre de preset inválido: usa letras, números, espacios, guiones o guion bajo.");
        return Path.Combine(Root, "presets", name.Trim() + ".json");
    }
    public void SavePreset(string name, AvatarConfig config) => Write(PresetPath(name), config);
    public AvatarConfig LoadPreset(string name) => Read(PresetPath(name));
    public string ResolveAsset(string name)
    {
        if (name is "." or ".." || name != Path.GetFileName(name) || name.Contains('/') || name.Contains('\\') || string.IsNullOrWhiteSpace(name)) throw new InvalidDataException("Activo inválido.");
        return Path.Combine(Assets, name);
    }
    static AvatarConfig Read(string path)
    {
        if (!File.Exists(path)) return new();
        if (new FileInfo(path).Length > 1024 * 1024) throw new InvalidDataException("Configuración demasiado grande.");
        var config = JsonSerializer.Deserialize<AvatarConfig>(File.ReadAllText(path)) ?? throw new InvalidDataException("Configuración vacía.");
        config.Validate(); return config;
    }
    static void Write(string path, AvatarConfig config)
    {
        config.Validate(); var temporary = path + "." + Guid.NewGuid().ToString("N") + ".tmp";
        try
        {
            using (var file = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None))
            { JsonSerializer.Serialize(file, config, Options); file.Flush(true); }
            File.Move(temporary, path, true);
        }
        finally { if (File.Exists(temporary)) File.Delete(temporary); }
    }
}

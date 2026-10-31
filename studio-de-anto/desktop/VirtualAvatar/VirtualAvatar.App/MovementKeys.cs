using System.Windows.Input;

namespace VirtualAvatar.App;

public static class MovementKeys
{
    public static bool TryGet(string text, out Key key) => Enum.TryParse(text, true, out key)
        && Enum.IsDefined(key) && key is not Key.None and not Key.System and not Key.ImeProcessed and not Key.DeadCharProcessed;
}

using System.Runtime.InteropServices;
using System.Windows.Interop;

namespace VirtualAvatar.App;

public sealed class NativeDesktop : IDisposable
{
    readonly nint handle;
    readonly HwndSource source;
    readonly Action toggle;
    public bool HotkeyAvailable { get; }
    public bool IsClickThrough => (GetWindowLongPtr(handle, Style).ToInt64() & Transparent) != 0;
    const int Style = -20, Transparent = 0x20, ToolWindow = 0x80, HotkeyId = 0x481;
    [DllImport("user32.dll", SetLastError = true)] static extern bool RegisterHotKey(nint window, int id, uint modifiers, uint key);
    [DllImport("user32.dll")] static extern bool UnregisterHotKey(nint window, int id);
    [DllImport("user32.dll", EntryPoint = "GetWindowLongPtrW", SetLastError = true)] static extern nint GetWindowLongPtr(nint window, int index);
    [DllImport("user32.dll", EntryPoint = "SetWindowLongPtrW", SetLastError = true)] static extern nint SetWindowLongPtr(nint window, int index, nint value);
    [DllImport("user32.dll")] static extern bool GetCursorPos(out Point point);
    [DllImport("user32.dll", SetLastError = true)] static extern bool SetWindowPos(nint window, nint after, int x, int y, int width, int height, uint flags);
    [StructLayout(LayoutKind.Sequential)] public struct Point { public int X, Y; }
    public NativeDesktop(nint hwnd, Action toggle)
    {
        handle = hwnd; this.toggle = toggle; source = HwndSource.FromHwnd(hwnd); source.AddHook(Hook);
        // MOD_CONTROL | MOD_SHIFT | MOD_NOREPEAT, X.
        HotkeyAvailable = RegisterHotKey(handle, HotkeyId, 0x4006, 0x58);
    }
    public void SetClickThrough(bool enabled)
    {
        var style = GetWindowLongPtr(handle, Style).ToInt64() | ToolWindow;
        style = enabled && HotkeyAvailable ? style | Transparent : style & ~Transparent;
        Marshal.SetLastPInvokeError(0);
        var previous = SetWindowLongPtr(handle, Style, (nint)style);
        if (previous == 0 && Marshal.GetLastPInvokeError() != 0) throw new System.ComponentModel.Win32Exception(Marshal.GetLastPInvokeError());
        if (!SetWindowPos(handle, 0, 0, 0, 0, 0, 0x37)) throw new System.ComponentModel.Win32Exception(Marshal.GetLastPInvokeError());
    }
    nint Hook(nint hwnd, int message, nint wparam, nint lparam, ref bool handled)
    { if (message == 0x0312 && (int)wparam == HotkeyId) { toggle(); handled = true; } return 0; }
    public System.Windows.Point Cursor()
    {
        GetCursorPos(out var point);
        return source.CompositionTarget.TransformFromDevice.Transform(new System.Windows.Point(point.X, point.Y));
    }
    public void Dispose() { if (HotkeyAvailable) UnregisterHotKey(handle, HotkeyId); source.RemoveHook(Hook); }
}

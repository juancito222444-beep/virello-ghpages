namespace VirtualAvatar.Core;

public readonly record struct Bounds(double Left, double Top, double Width, double Height);
public readonly record struct Pose(double Y, double Angle, double ScaleX, double ScaleY);
public sealed class MotionEngine(int seed = 7)
{
    readonly Random random = new(seed);
    double remaining, dx, dy, elapsed;
    public AvatarState State { get; private set; } = AvatarState.Idle;
    public bool FacingLeft { get; private set; }
    public void SetState(AvatarState state, double duration = 1) { State = state; remaining = duration; }
    public void Tick(AvatarConfig c, double dt, Bounds bounds, double inputX = 0, double inputY = 0, double? mouseX = null, double? mouseY = null)
    {
        dt = double.IsFinite(dt) ? Math.Clamp(dt, 0, .1) : 0; elapsed += dt * c.AnimationSpeed;
        if (State == AvatarState.Dragged) return;
        if (c.Locked) { remaining -= dt; if (remaining <= 0) State = AvatarState.Idle; return; }
        if (inputX != 0 || inputY != 0)
        {
            var length = Math.Sqrt(inputX * inputX + inputY * inputY); dx = inputX / length; dy = inputY / length;
            State = AvatarState.Walk; remaining = .1;
        }
        else
        {
            remaining -= dt;
            if (c.Automatic && c.FollowCursor && mouseX is double mx && mouseY is double my)
            {
                var x = mx - (c.X + c.Size / 2); var y = my - (c.Y + c.Size / 2); var length = Math.Sqrt(x * x + y * y);
                State = length > 60 ? AvatarState.Walk : AvatarState.Idle; dx = length > 0 ? x / length : 0; dy = length > 0 ? y / length : 0;
            }
            else if (c.Automatic && remaining <= 0)
            {
                var choices = new List<AvatarState>();
                if (c.Pause) choices.Add(AvatarState.Idle); if (c.Wander) choices.Add(AvatarState.Walk);
                if (c.Sit) choices.Add(AvatarState.Sit); if (c.Sleep) choices.Add(AvatarState.Sleep); if (c.Jump) choices.Add(AvatarState.Jump);
                State = choices.Count == 0 ? AvatarState.Idle : choices[random.Next(choices.Count)];
                if (c.Look && State is AvatarState.Idle or AvatarState.Sit) FacingLeft = random.Next(2) == 0;
                var angle = random.NextDouble() * Math.PI * 2; dx = Math.Cos(angle); dy = Math.Sin(angle); remaining = State == AvatarState.Jump ? .65 : 2 + random.NextDouble() * 4;
            }
            else if (!c.Automatic && remaining <= 0) State = AvatarState.Idle;
        }
        if (c.ReactToMouse && c.Automatic && mouseX is double px && mouseY is double py && State == AvatarState.Sleep && Math.Abs(px - c.X - c.Size / 2) < c.Size && Math.Abs(py - c.Y - c.Size / 2) < c.Size)
            SetState(AvatarState.Clicked, .6);
        if (State is AvatarState.Walk or AvatarState.Run)
        {
            var speed = c.Speed * (State == AvatarState.Run ? 2 : 1); c.X += dx * speed * dt; c.Y += dy * speed * dt;
            if (c.Look && dx != 0) FacingLeft = dx < 0;
        }
        Clamp(c, bounds);
    }
    public static void Clamp(AvatarConfig c, Bounds b)
    {
        c.X = Math.Clamp(c.X, b.Left, Math.Max(b.Left, b.Left + b.Width - c.Size));
        c.Y = Math.Clamp(c.Y, b.Top, Math.Max(b.Top, b.Top + b.Height - c.Size));
    }
    public Pose CurrentPose(AvatarConfig c)
    {
        var wave = Math.Sin(elapsed * 3);
        return State switch
        {
            AvatarState.Walk => new(-Math.Abs(Math.Sin(elapsed * 8)) * 3, Math.Sin(elapsed * 8) * 3, 1, 1),
            AvatarState.Run => new(-Math.Abs(Math.Sin(elapsed * 12)) * 6, Math.Sin(elapsed * 12) * 5, 1.03, .97),
            AvatarState.Jump => new(-Math.Abs(Math.Sin(Math.Clamp(remaining / .65, 0, 1) * Math.PI)) * 30, 0, .93, 1.06),
            AvatarState.Sit => new(12, 0, 1.08, .82),
            AvatarState.Sleep => new(20, -10, 1.12, .65 + wave * .015),
            AvatarState.Dragged => new(0, Math.Sin(elapsed * 8) * 7, .94, 1.06),
            AvatarState.Clicked => new(-Math.Abs(wave) * 8, wave * 8, 1.07, .93),
            _ => c.IdleAnimation ? new(wave * 3, wave * 1.5, 1 + wave * .012, 1 - wave * .012) : new(0, 0, 1, 1)
        };
    }
}

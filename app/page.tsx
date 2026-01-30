import CountdownTimer from "./components/CountdownTimer";
import RotatingMask from "./components/RotatingMask";
import SleepingSheep from "./components/SleepingSheep";

export default function Home() {
  return (
    <main className="h-screen w-screen min-w-0 min-h-0 max-w-[100vw] max-h-[100vh] overflow-hidden bg-grid flex flex-col items-center justify-center px-main py-main relative">
      <div className="bg-breathing-wave" aria-hidden />
      <div className="relative z-10 w-full max-w-fluid min-w-0 mx-auto text-center space-y-fluid-section flex flex-col items-center justify-center overflow-hidden min-h-0 flex-1 py-main-inner">
        {/* 3D Rotating Mask */}
        <RotatingMask />

        {/* Theme: Mask */}
        <div className="space-y-fluid-block">
          <p className="text-fluid-sm font-medium uppercase tracking-[0.2em] text-[var(--color-hack-muted)]">
            Theme
          </p>
          <h1 className="text-fluid-hero font-bold tracking-tight">
            <span className="text-gradient-mask">Mask</span>
          </h1>
        </div>

        {/* Badge — glassmorphism */}
        <div className="glass inline-flex items-center gap-[clamp(0.25rem,1.5vmin,0.75rem)] rounded-full px-fluid py-fluid text-fluid-base font-medium text-[var(--color-hack-text-soft)]">
          <span className="relative flex h-[clamp(0.375rem,1.5vmin,0.75rem)] w-[clamp(0.375rem,1.5vmin,0.75rem)]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-hack-success)] opacity-75" />
            <span className="relative inline-flex h-[clamp(0.375rem,1.5vmin,0.75rem)] w-[clamp(0.375rem,1.5vmin,0.75rem)] rounded-full bg-[var(--color-hack-success)]" />
          </span>
          Countdown to end
        </div>

        {/* Subhead: end date (local time) */}
        <p className="text-fluid-lg text-[var(--color-hack-text-soft)] max-w-fluid-xs mx-auto">
          Hackathon ends February 1, 2026 at 10:00 AM <span className="text-[var(--color-hack-muted)]"></span>.
        </p>

        {/* Sleeping sheep at night (6pm–6am) */}
        <SleepingSheep />

        {/* Countdown to Feb 1, 2026 10:00 AM (your local time) */}
        <CountdownTimer />

        {/* CTA strip — glassmorphism */}
        <div className="glass-strong rounded-2xl p-fluid-card shadow-xl">
          <p className="text-fluid-base text-[var(--color-hack-muted)]">
            Good luck & God speed.
          </p>
        </div>
      </div>
    </main>
  );
}

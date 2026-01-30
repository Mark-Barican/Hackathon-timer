import CountdownTimer from "./components/CountdownTimer";
import RotatingMask from "./components/RotatingMask";
import SleepingSheep from "./components/SleepingSheep";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid flex flex-col items-center justify-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* 3D Rotating Mask */}
        <RotatingMask />

        {/* Theme: Mask */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-hack-muted)]">
            Theme
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient-mask">Mask</span>
          </h1>
        </div>

        {/* Badge — glassmorphism */}
        <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[var(--color-hack-text-soft)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-hack-success)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-hack-success)]" />
          </span>
          Countdown to end
        </div>

        {/* Subhead: end date (local time) */}
        <p className="text-lg sm:text-xl text-[var(--color-hack-text-soft)] max-w-xl mx-auto">
          Hackathon ends February 1, 2026 at 10:00 AM <span className="text-[var(--color-hack-muted)]"></span>.
        </p>

        {/* Sleeping sheep at night (6pm–6am) */}
        <SleepingSheep />

        {/* Countdown to Feb 1, 2026 10:00 AM (your local time) */}
        <CountdownTimer />

        {/* CTA strip — glassmorphism */}
        <div className="glass-strong rounded-2xl px-6 py-4 shadow-xl">
          <p className="text-sm text-[var(--color-hack-muted)]">
            Good luck. God speed.
          </p>
        </div>
      </div>
    </main>
  );
}

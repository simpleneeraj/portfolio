export function ProgressCard() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="project-bar group relative flex flex-col gap-2.5 bg-white border border-black/10 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Animated glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,180,80,0.12),transparent_40%)]" />

      {/* Tag + Year */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          {/* Blinking dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>

          {/* <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-accent bg-accent/8 px-2 py-0.5 rounded-sm">
            Ideas in Progress
          </span> */}
        </div>

        <span className="text-[11px] text-ink-3">
          {new Date().getFullYear()}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl font-normal leading-tight text-ink relative z-10">
        Work in Progress
      </h3>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-ink-2 flex-1 relative z-10">
        Researching, designing, and building the next product experience. Stay
        tuned.
      </p>

      {/* Bottom progress line */}
      <div className="relative z-10 mt-2 h-[2px] w-full overflow-hidden rounded-full bg-black/5">
        <div className="h-full w-1/3 animate-[loading_2s_ease-in-out_infinite] rounded-full bg-accent" />
      </div>
    </a>
  );
}

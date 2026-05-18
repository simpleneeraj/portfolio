import { Link } from "@/portfolio.config";

export function LinkItem({ link }: { link: Link }) {
  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 bg-white border border-black/10 rounded-xl px-5 py-3.5 transition-all duration-200 hover:translate-x-1 hover:border-ink/30"
    >
      {/* Emoji icon */}
      <div className="w-9 h-9 rounded-lg bg-surface-2 flex items-center justify-center text-[18px] shrink-0">
        {link.emoji}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-medium text-ink leading-tight">{link.title}</p>
        <p className="text-[12px] text-ink-3 mt-0.5 truncate">{link.subtitle}</p>
      </div>

      {/* Chevron */}
      <span className="text-ink-3 text-lg transition-transform duration-200 group-hover:translate-x-0.5">
        ›
      </span>
    </a>
  );
}

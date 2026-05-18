import { profile, socials } from "@/portfolio.config";
import { SocialIcon } from "./SocialIcon";
import Image from "next/image";

export function Hero() {
  const firstName = profile.name.replace(profile.nameItalic, "").trim();

  return (
    <div className="stagger border-b border-black/10 pb-10 mb-12">
      {/* Name + Avatar row */}
      <div className="flex items-end justify-between gap-8">
        <div className="flex-1">
          <h1 className="font-serif text-[clamp(40px,9vw,64px)] leading-[0.95] tracking-[-0.02em] text-ink font-normal">
            {firstName && <span>{firstName} </span>}
            <em className="not-italic text-accent italic">{profile.nameItalic}</em>
          </h1>

          <p className="mt-1 text-sm font-medium text-ink-3 tracking-wider uppercase">
            {profile.tagline}
          </p>
        </div>

        {/* Avatar */}
        <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-full overflow-hidden border-[3px] border-accent-light shrink-0">
          {profile.avatar ? (
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-accent-light flex items-center justify-content-center font-serif text-2xl text-accent select-none flex items-center justify-center">
              {profile.avatarInitials}
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      <p className="mt-5 text-[15px] leading-[1.7] text-ink-2 max-w-[480px]">
        {profile.bio}
      </p>

      {/* Status pill */}
      {profile.status && (
        <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
          {profile.status}
        </div>
      )}

      {/* Socials */}
      <div className="mt-5 flex flex-wrap gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-2 bg-white border border-black/10 rounded-full px-3.5 py-1.5 transition-all duration-200 hover:border-ink hover:text-ink hover:bg-surface-2"
          >
            <SocialIcon icon={s.icon} />
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

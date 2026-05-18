'use client';
import { Hero } from '@/components/Hero';
import { LinkItem } from '@/components/LinkItem';
import { ProgressCard } from '@/components/ProgressCard';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, links, profile } from '@/portfolio.config';
import HeartDuotoneIcon from '@iconify-react/iconamoon/heart-duotone';

export default function HomeClient() {
  return (
    <main className="relative z-10 max-w-[680px] mx-auto px-5 sm:px-6 py-14 sm:py-20 pb-20">
      <Hero />

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-12">
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-4">
            Projects
          </p>
          <div className="stagger grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
            <ProgressCard />
          </div>
        </section>
      )}

      {/* Links */}
      {links.length > 0 && (
        <section className="mb-12">
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-4">
            Links
          </p>
          <div className="stagger flex flex-col gap-2">
            {links.map((link) => (
              <LinkItem key={link.title} link={link} />
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="flex items-center gap-1 justify-center pt-6 border-t border-black/10 text-center text-[12px] text-ink-3">
        {profile.copyright}
        <HeartDuotoneIcon className="text-rose-400 size-4" />
        {new Date().getFullYear()}
      </footer>
    </main>
  );
}

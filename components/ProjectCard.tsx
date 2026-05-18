import { Project } from "@/portfolio.config";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-bar group relative flex flex-col gap-2.5 bg-white border border-black/10 rounded-2xl p-5 overflow-hidden transition-all duration-200 hover:translate-y-[-3px] hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Tag + Year */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-accent bg-accent/8 px-2 py-0.5 rounded-sm">
          {project.tag}
        </span>
        {project.year && (
          <span className="text-[11px] text-ink-3">{project.year}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl font-normal leading-tight text-ink">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-ink-2 flex-1">
        {project.description}
      </p>

      {/* Arrow */}
      <span className="text-lg text-ink-3 self-end transition-all duration-200 group-hover:translate-x-[3px] group-hover:translate-y-[-3px] group-hover:text-accent">
        ↗
      </span>
    </a>
  );
}

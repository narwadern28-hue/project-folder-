import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../lib/data";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <Link
      to={`/project/${project.id}`}
      className={`group relative block overflow-hidden bg-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-brass ${className}`}
      aria-label={`${project.title} — ${project.category}, ${project.location}`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />

      {/* Hover reveal — always visible on touch, revealed on hover for desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100" />

      <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ivory/10 text-ivory opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 lg:translate-y-2 lg:group-hover:translate-y-0">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 sm:p-7 lg:translate-y-5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brass">
          {project.category}
          <span className="h-px w-4 bg-brass/60" aria-hidden="true" />
          <span className="text-ivory/60 normal-case tracking-normal">{project.location}</span>
        </p>
        <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ivory">
          {project.title}
        </h3>
        <p className="mt-2 hidden max-w-md text-sm leading-relaxed text-ivory/65 sm:block lg:line-clamp-2">
          {project.brief}
        </p>
      </div>
    </Link>
  );
}

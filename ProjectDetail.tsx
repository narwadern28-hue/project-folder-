import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { projects } from "../lib/data";

export default function ProjectDetail() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  if (!project) return <Navigate to="/portfolio" replace />;

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    { label: "Scope", value: project.scope },
    { label: "Size", value: project.size },
    { label: "Duration", value: project.duration },
    { label: "Completed", value: project.year },
  ];

  return (
    <>
      {/* Hero */}
      <section className="grain relative flex min-h-[62vh] items-end overflow-hidden bg-ink">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-40 sm:px-8">
          <Reveal>
            <Link
              to={`/portfolio/category/${project.categorySlug}`}
              className="inline-flex items-center gap-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brass transition-colors hover:text-ivory"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {project.category}
            </Link>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] font-medium tracking-tight text-balance text-ivory sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-ivory/60">
              {project.location} · {project.year}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta band */}
      <section className="border-b rule bg-linen/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {meta.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.05}
              className={`px-5 py-7 sm:px-7 ${i !== 0 ? "border-l rule" : ""}`}
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-espresso/45">
                {m.label}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-espresso">
                {m.value}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {project.story.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={`leading-[1.9] text-espresso/75 ${
                  i === 0
                    ? "text-lg first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.8] first-letter:text-brass"
                    : "mt-6"
                }`}
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={`${project.title} — detail ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Prev / next */}
          <Reveal className="mt-16">
            <div className="grid gap-px border rule bg-sand sm:grid-cols-2">
              <Link
                to={`/project/${prev.id}`}
                className="group flex items-center gap-4 bg-ivory p-6 transition-colors hover:bg-linen"
              >
                <ArrowLeft className="h-5 w-5 shrink-0 text-brass transition-transform duration-300 group-hover:-translate-x-1" />
                <span>
                  <span className="block text-[0.62rem] uppercase tracking-[0.24em] text-espresso/45">
                    Previous project
                  </span>
                  <span className="mt-1 block font-display text-lg font-medium tracking-tight">
                    {prev.title}
                  </span>
                </span>
              </Link>
              <Link
                to={`/project/${next.id}`}
                className="group flex items-center justify-end gap-4 bg-ivory p-6 text-right transition-colors hover:bg-linen"
              >
                <span>
                  <span className="block text-[0.62rem] uppercase tracking-[0.24em] text-espresso/45">
                    Next project
                  </span>
                  <span className="mt-1 block font-display text-lg font-medium tracking-tight">
                    {next.title}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-brass transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

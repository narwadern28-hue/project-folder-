import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import CtaBand from "../components/CtaBand";
import { categories, categoryBySlug, projects } from "../lib/data";

export default function Portfolio() {
  const { slug } = useParams();
  const active = slug ?? "all";
  const category = categoryBySlug(slug);

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.categorySlug === active),
    [active]
  );

  if (slug && !category) return <Navigate to="/portfolio" replace />;

  return (
    <>
      {/* Header band */}
      <section className="border-b rule bg-linen/70">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 md:pt-20">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-terracotta">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              Portfolio
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {category ? (
                <>
                  {category.label},{" "}
                  <em className="font-light text-terracotta italic">
                    the Ashoka way.
                  </em>
                </>
              ) : (
                <>
                  Selected work,{" "}
                  <em className="font-light text-terracotta italic">
                    2011 — today.
                  </em>
                </>
              )}
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-espresso/65">
              {category
                ? category.tagline
                : "Homes, cafés, offices, kitchens and turnkey builds — each one led by a senior designer and finished by our own hands."}
            </p>
          </Reveal>

          {/* Filter chips */}
          <Reveal delay={0.1}>
            <div className="no-scrollbar -mx-5 mt-10 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              <Link
                to="/portfolio"
                className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  active === "all"
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-espresso/20 text-espresso/60 hover:border-espresso hover:text-espresso"
                }`}
              >
                All
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/portfolio/category/${c.slug}`}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    active === c.slug
                      ? "border-espresso bg-espresso text-ivory"
                      : "border-espresso/20 text-espresso/60 hover:border-espresso hover:text-espresso"
                  }`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-8 text-[0.7rem] uppercase tracking-[0.24em] text-espresso/45">
              Showing {filtered.length}{" "}
              {filtered.length === 1 ? "project" : "projects"}
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={(i % 3) * 0.08}
                  className={i % 5 === 0 ? "sm:col-span-2" : ""}
                >
                  <ProjectCard project={p} className="aspect-[4/3]" />
                </Reveal>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Your project could be{" "}
            <em className="font-light text-brass italic">the next entry here.</em>
          </>
        }
      />
    </>
  );
}

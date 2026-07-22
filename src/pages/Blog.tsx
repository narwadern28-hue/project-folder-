import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { posts } from "../lib/data";

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section className="border-b rule bg-linen/70">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 md:pt-20">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-terracotta">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              The Journal
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Notes from{" "}
              <em className="font-light text-terracotta italic">the studio floor.</em>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-espresso/65">
              Occasional long-form writing on materials, craft and the
              discipline of warm, considered spaces — written by the designers,
              not the marketing department.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured entry */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="flex flex-wrap items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
                  Latest entry · {featured.category}
                  <span className="h-px w-4 bg-espresso/25" aria-hidden="true" />
                  <span className="font-normal normal-case tracking-normal text-espresso/45">
                    {featured.date}
                  </span>
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-balance transition-colors group-hover:text-terracotta sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-espresso/65">
                  {featured.excerpt}
                </p>
                <p className="mt-6 inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-espresso transition-colors group-hover:text-terracotta">
                  Read the entry
                  <ArrowRight className="h-3.5 w-3.5 text-brass transition-transform duration-300 group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </Reveal>

          {/* Remaining entries */}
          <div className="mt-16 grid gap-10 border-t rule pt-14 md:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group grid gap-6 sm:grid-cols-[40%_1fr]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div>
                    <p className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
                      {post.category}
                      <span className="h-px w-4 bg-espresso/25" aria-hidden="true" />
                      <span className="font-normal normal-case tracking-normal text-espresso/45">
                        {post.date}
                      </span>
                    </p>
                    <h3 className="mt-3 font-display text-[1.4rem] leading-snug font-medium tracking-tight transition-colors group-hover:text-terracotta">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-espresso/60">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-2 text-xs text-espresso/45">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <Link
                to="/contact"
                className="group flex min-h-[12rem] flex-col justify-between border rule bg-espresso p-8 text-ivory"
              >
                <p className="font-display text-xl leading-snug font-medium tracking-tight">
                  Reading about craft is pleasant.{" "}
                  <em className="text-brass italic">Living in it is better.</em>
                </p>
                <span className="mt-6 inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brass">
                  Start the conversation
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

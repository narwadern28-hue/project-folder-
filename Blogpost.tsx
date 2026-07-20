import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { posts } from "../lib/data";

export default function BlogPost() {
  const { slug } = useParams();
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];

  if (!post) return <Navigate to="/blog" replace />;

  const next = posts[(index + 1) % posts.length];

  return (
    <>
      {/* Header */}
      <section className="border-b rule bg-linen/60">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-14 sm:px-8 md:pt-18">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-terracotta transition-colors hover:text-clay"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              The Journal
            </Link>
            <p className="mt-8 flex flex-wrap items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-espresso/50">
              {post.category}
              <span className="h-px w-4 bg-espresso/25" aria-hidden="true" />
              {post.date}
              <span className="h-px w-4 bg-espresso/25" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
            </p>
            <h1 className="mt-5 font-display text-3xl leading-[1.15] font-medium tracking-tight text-balance sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-espresso/65">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-10 aspect-[16/8] overflow-hidden md:mt-14">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>

      {/* Article */}
      <article className="article mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-18">
        {post.content.map((section, i) => (
          <Reveal key={i}>
            {i === 1 && <blockquote>{post.pullQuote}</blockquote>}
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className={
                  i === 0 && j === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.8] first-letter:text-brass"
                    : undefined
                }
              >
                {p}
              </p>
            ))}
          </Reveal>
        ))}

        <Reveal>
          <div className="mt-14 flex items-center gap-4 border-t rule pt-8 text-[0.68rem] uppercase tracking-[0.22em] text-espresso/50">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            Filed under {post.category} · Written by the Ashoka studio team
          </div>
        </Reveal>
      </article>

      {/* Next entry */}
      <section className="border-t rule bg-linen/60">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
          <Reveal>
            <Link to={`/blog/${next.slug}`} className="group block">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-espresso/50">
                Next entry
              </p>
              <p className="mt-3 flex items-start justify-between gap-6 font-display text-2xl leading-snug font-medium tracking-tight transition-colors group-hover:text-terracotta sm:text-3xl">
                {next.title}
                <ArrowRight className="mt-1.5 h-5 w-5 shrink-0 text-brass transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

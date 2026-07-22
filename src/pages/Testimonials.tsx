import { Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import BeforeAfter from "../components/BeforeAfter";
import { testimonials } from "../lib/data";

const reviewStats = [
  { value: "4.9", label: "Average client rating" },
  { value: "70+", label: "Verified reviews" },
  { value: "92%", label: "Work through referral" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            In their words,{" "}
            <em className="font-light text-brass italic">not ours.</em>
          </>
        }
        copy="We are a small studio, so every client is a reference. Every project below is verifiable on request."
        image="/images/after.jpg"
      />

      {/* Stats */}
      <section className="border-b rule bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">
          {reviewStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`flex items-center gap-5 px-6 py-9 sm:px-8 ${i !== 0 ? "border-t sm:border-t-0 sm:border-l rule" : ""}`}
            >
              <p className="font-display text-4xl font-medium tracking-tight text-espresso sm:text-5xl">
                {s.value}
              </p>
              <p className="text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.2em] text-espresso/50">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote cards */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
                <figure className="flex h-full flex-col border rule bg-[#FBF7EF] p-8">
                  <div className="flex items-center gap-1 text-brass" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[0.95rem] leading-[1.8] text-espresso/75">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-7 border-t rule pt-5">
                    <p className="font-medium text-espresso">{t.name}</p>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-terracotta">
                      {t.context}
                    </p>
                    <p className="mt-0.5 text-xs text-espresso/50">{t.location}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}

            {/* CTA tile completing the grid */}
            <Reveal delay={0.16} className="h-full">
              <Link
                to="/contact"
                className="group flex h-full min-h-[18rem] flex-col justify-between bg-espresso p-8 text-ivory transition-colors duration-500 hover:bg-cocoa"
              >
                <p className="font-display text-2xl leading-snug font-medium tracking-tight">
                  The kindest sentence in this grid{" "}
                  <em className="text-brass italic">hasn’t been written yet.</em>
                </p>
                <span className="mt-8 inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-brass">
                  Start your project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Big before/after */}
      <section className="border-t rule bg-linen py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Proof in Pixels"
            title="The room does the talking."
            copy="A builder-finish apartment transformed over sixteen weeks — drag the handle to move between the day we arrived and the evening we handed over the keys."
          />
          <Reveal delay={0.15} className="mt-12">
            <BeforeAfter
              before="/images/before.jpg"
              after="/images/after.jpg"
              ratio="aspect-[4/3] md:aspect-[16/9]"
              caption="Mehra Residence, Gurugram · 3,400 sq ft · 16 weeks"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

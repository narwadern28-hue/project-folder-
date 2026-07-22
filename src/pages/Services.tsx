import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import SectionHeading from "../components/SectionHeading";
import { services, processSteps } from "../lib/data";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything a space needs,{" "}
            <em className="font-light text-brass italic">under one roof.</em>
          </>
        }
        copy="Five specialist practices, each with its own dedicated team — all sharing one drawing culture, one workshop standard and one accountable hand."
        image="/images/service-bathroom.jpg"
      />

      {services.map((s, i) => {
        const Icon = s.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-28 py-16 md:py-24 ${i !== 0 ? "border-t rule" : ""} ${
              reversed ? "bg-linen/60" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="group relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                    <span className="absolute -top-5 left-6 grid h-14 w-14 place-items-center bg-espresso font-display text-lg text-brass shadow-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                <div className={reversed ? "lg:order-1" : ""}>
                  <Reveal>
                    <span className="grid h-12 w-12 place-items-center border rule text-brass">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 leading-[1.85] text-espresso/70">
                      {s.description}
                    </p>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-espresso/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-7 border-l-2 border-brass pl-4 text-xs leading-relaxed text-espresso/55">
                      <span className="font-semibold uppercase tracking-[0.18em] text-espresso/70">
                        Ideal for: 
                      </span>
                      {s.idealFor}
                    </p>
                    <Link
                      to={`/portfolio/category/${s.slug}`}
                      className="group mt-8 inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-terracotta transition-colors hover:text-clay"
                    >
                      View {s.title.toLowerCase()} projects
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Compact process strip */}
      <section className="grain relative bg-espresso py-16 text-ivory md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            dark
            eyebrow="One Process"
            title="However we begin, we finish the same way — carefully."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.number} delay={i * 0.1}>
                  <div className="flex items-center gap-4 border-t border-ivory/15 pt-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brass/50 text-brass">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="font-display text-xs tracking-[0.3em] text-brass">
                        {s.number}
                      </p>
                      <p className="mt-1 font-display text-lg font-medium">
                        {s.title}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

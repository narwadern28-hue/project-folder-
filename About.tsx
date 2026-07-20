import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";

const milestones = [
  { year: "2011", text: "Founded in a two-room office in Anand Lok, with one carpenter and a drawing board." },
  { year: "2014", text: "First full turnkey farmhouse — the project that shaped our single-hand philosophy." },
  { year: "2017", text: "Partner workshops in Rajasthan formalised; custom furniture brought fully in-house." },
  { year: "2020", text: "Modular kitchen vertical launched with our own precision-built system." },
  { year: "2024", text: "180th project delivered. 92% of new work now arrives through client referral." },
];

const studioWay = [
  { us: "One accountable team, drawing to keys", them: "A designer who hands you a contractor list" },
  { us: "Weekly photo reports — proactive, detailed", them: "You chase the site for updates" },
  { us: "Custom furniture built in our own workshops", them: "Catalogue pieces with a markup" },
  { us: "Budget agreed once, then held", them: "Estimates that grow on site" },
  { us: "Styled handover and a year of aftercare", them: "Keys handed over the wall and silence" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            The studio behind{" "}
            <em className="font-light text-brass italic">the quiet rooms.</em>
          </>
        }
        copy="Fourteen years, five crafts, one unchanging belief: a room should hold the shape of the life lived inside it."
        image="/images/about-studio.jpg"
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Founded on a drawing board, built by hand."
              />
              <Reveal delay={0.12}>
                <p className="mt-6 leading-[1.85] text-espresso/70">
                  Ashoka Interiors was founded in 2011 by principal designer{" "}
                  <span className="font-medium text-espresso">Meera Ashoka</span>,
                  who left a large architecture practice with a simple
                  conviction: homes were being designed by committees and built
                  by strangers, and it showed. The studio she imagined would
                  stay small enough for its founder to know every site — and
                  disciplined enough to build what it drew.
                </p>
                <p className="mt-4 leading-[1.85] text-espresso/70">
                  Today we are a forty-person studio of designers, site
                  engineers, carpenters and project managers, working alongside
                  two partner workshops in Rajasthan. We take on a limited
                  number of commissions each year so that senior hands — not
                  junior stand-ins — lead every project.
                </p>
                <p className="mt-4 leading-[1.85] text-espresso/70">
                  The measure of our work is not the handover photograph. It is
                  the call we get three years later: the brass has darkened
                  beautifully, the kitchen still closes like a whisper, and
                  could we please design the new office too?
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/hero.jpg"
                    alt="The Kala Villa living room — walnut panelling and warm brass"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -left-0 max-w-[15rem] bg-espresso p-6 text-ivory shadow-[0_30px_60px_-25px_rgba(30,24,20,0.5)] sm:-left-8">
                  <p className="font-display text-4xl font-medium text-brass">40</p>
                  <p className="mt-1 text-xs leading-relaxed text-ivory/65">
                    designers, engineers and craftspeople — one studio, one
                    standard.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="mt-28">
            <Reveal>
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                A few years that mattered
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-x-10 gap-y-10 border-t rule pt-10 sm:grid-cols-2 lg:grid-cols-5">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.08}>
                  <p className="font-display text-3xl font-medium tracking-tight text-brass">
                    {m.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-espresso/60">
                    {m.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="grain relative overflow-hidden bg-espresso py-20 text-ivory md:py-28">
        <img
          src="/images/craft.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <p className="font-display text-2xl leading-[1.5] font-light tracking-tight sm:text-[2rem]">
              “We are not in the business of decorating rooms. We are in the
              business of how{" "}
              <em className="text-brass italic">mornings feel</em> — and that
              is a much older, much stricter craft.”
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              <span>
                <span className="block text-sm font-medium">Meera Ashoka</span>
                <span className="mt-0.5 block text-[0.68rem] uppercase tracking-[0.22em] text-ivory/50">
                  Principal Designer &amp; Founder
                </span>
              </span>
            </footer>
          </Reveal>
        </div>
      </section>

      {/* The studio way */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Why Clients Stay"
            title={
              <>
                The studio way, against{" "}
                <em className="font-light text-terracotta italic">
                  the industry default.
                </em>
              </>
            }
            copy="Most of our clients arrive after a difficult first experience elsewhere. Here is the difference they notice first."
          />

          <div className="mx-auto mt-14 max-w-4xl">
            {studioWay.map((row, i) => (
              <Reveal key={row.us} delay={i * 0.06}>
                <div className="grid gap-3 border-b rule py-6 sm:grid-cols-2 sm:gap-8">
                  <p className="flex items-start gap-3 text-sm leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    <span>
                      <span className="font-medium text-espresso">{row.us}</span>
                    </span>
                  </p>
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-espresso/45">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-espresso/25" />
                    {row.them}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <div className="mt-10 text-center">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-terracotta transition-colors hover:text-clay"
                >
                  See how we work
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

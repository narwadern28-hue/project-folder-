import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import BeforeAfter from "../components/BeforeAfter";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ConsultationForm from "../components/ConsultationForm";
import {
  featuredProjects,
  services,
  processSteps,
  posts,
  studio,
} from "../lib/data";

const stats = [
  { value: "14", label: "Years of practice" },
  { value: "180+", label: "Projects delivered" },
  { value: "5", label: "Specialist verticals" },
  { value: "92%", label: "Clients via referral" },
];

const principles = [
  {
    n: "01",
    title: "Material honesty",
    text: "Stone that looks like stone. Wood allowed to age. We specify for how a material weathers a life — not how it photographs on day one.",
  },
  {
    n: "02",
    title: "Craft in the details",
    text: "Mitred corners, hand-finished edges, brass that patinas. The last five percent of a detail carries ninety percent of its feeling.",
  },
  {
    n: "03",
    title: "Light as a material",
    text: "We plan a room around the sun’s arc — then layer warm, dimmable light for the hours after it leaves.",
  },
  {
    n: "04",
    title: "Built around your rituals",
    text: "Morning chai in the east light; a chair for the evening reader. We map how you live before we move a single wall.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const mosaic = featuredProjects.slice(0, 4);

  return (
    <>
      {/* ------------------------------- Hero ------------------------------- */}
      <section className="grain relative flex min-h-[calc(100svh-6.75rem)] items-end overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-brass"
          >
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            Boutique Interior Design Studio · {studio.city}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.3, ease }}
            className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.06] font-medium tracking-tight text-balance text-ivory sm:text-6xl lg:text-7xl"
          >
            Rooms that hold a{" "}
            <em className="font-light text-brass italic">quiet kind</em> of
            luxury.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ivory/70"
          >
            Ashoka Interiors designs and builds warm, considered spaces for
            homes and workplaces — from the first sketch to the last styled
            shelf.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brass px-8 py-4 text-sm font-semibold tracking-wide text-ink transition-colors duration-300 hover:bg-ivory"
            >
              Get a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2.5 rounded-full border border-ivory/35 px-8 py-4 text-sm font-semibold tracking-wide text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
            >
              Explore the Portfolio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex"
          aria-hidden="true"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.32em] text-ivory/50">
            Scroll
          </span>
          <span className="h-12 w-px bg-gradient-to-b from-brass to-transparent" />
        </motion.div>
      </section>

      {/* ------------------------------ Stats ------------------------------ */}
      <section className="border-b rule bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const borders = [
              "",
              "border-l border-espresso/10",
              "border-t border-espresso/10 lg:border-l lg:border-t-0",
              "border-l border-t border-espresso/10 lg:border-t-0",
            ];
            return (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`px-6 py-10 sm:px-8 ${borders[i]}`}
            >
              <p className="font-display text-4xl font-medium tracking-tight text-espresso sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-espresso/50">
                {s.label}
              </p>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* --------------------------- Philosophy ---------------------------- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Our Philosophy"
                title={
                  <>
                    Good rooms are composed,{" "}
                    <em className="font-light text-terracotta italic">
                      never decorated.
                    </em>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-6 leading-[1.85] text-espresso/70">
                  Every project begins with listening — to the room, the
                  light, and the people who will live with our work long after
                  we leave. Proportion before palette, material before
                  ornament, craft before trend: that is the order of things in
                  our studio.
                </p>
                <p className="mt-4 leading-[1.85] text-espresso/70">
                  We are deliberately small. A senior designer leads your
                  project from the first site walk to the final styling, and
                  our own workshops build what we draw. Nothing is outsourced
                  that carries our name.
                </p>
                <Link
                  to="/about"
                  className="group mt-8 inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-terracotta transition-colors hover:text-clay"
                >
                  Our story
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="relative">
              <div className="relative mr-8">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/craft.jpg"
                    alt="Craftsman finishing a custom oak piece in the Ashoka workshop"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-10 -right-8 w-[48%] border-[10px] border-ivory shadow-[0_30px_60px_-25px_rgba(30,24,20,0.45)]">
                  <img
                    src="/images/materials.jpg"
                    alt="Material palette — fabric, wood and stone samples"
                    className="aspect-square h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-16 flex items-center gap-3 text-sm text-espresso/55">
                <span className="h-px w-7 bg-brass" aria-hidden="true" />
                In the workshop — every custom piece begins as a pencil
                drawing.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-12 border-t rule pt-14 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <p className="font-display text-sm tracking-[0.3em] text-brass">
                  {p.n}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso/60">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- Featured work --------------------------- */}
      <section className="border-t rule bg-linen/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Work"
              title={
                <>
                  Recent commissions,{" "}
                  <em className="font-light text-terracotta italic">
                    quietly finished.
                  </em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-espresso transition-colors hover:text-terracotta"
              >
                Explore the full portfolio
                <ArrowUpRight className="h-4 w-4 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[44rem] lg:grid-cols-6 lg:grid-rows-2">
              <ProjectCard
                project={mosaic[0]}
                className="h-80 sm:h-96 lg:col-span-3 lg:row-span-2 lg:h-auto"
              />
              <ProjectCard
                project={mosaic[1]}
                className="h-80 sm:h-96 lg:col-span-3 lg:h-auto"
              />
              <ProjectCard
                project={mosaic[2]}
                className="h-80 sm:h-96 lg:col-span-2 lg:h-auto"
              />
              <ProjectCard
                project={mosaic[3]}
                className="h-80 sm:h-96 sm:col-span-2 lg:col-span-1 lg:h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- Services ----------------------------- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title={
              <>
                Three crafts,{" "}
                <em className="font-light text-terracotta italic">
                  one studio.
                </em>
              </>
            }
            copy="Homes, commercial spaces and precision-built kitchens — each with its own team, all sharing one standard of finish."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 0.1}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="group flex h-full flex-col border rule bg-[#FBF7EF] transition-shadow duration-500 hover:shadow-[0_36px_70px_-35px_rgba(30,24,20,0.4)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                      <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center border border-ivory/40 bg-ink/55 text-brass backdrop-blur-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-2xl font-medium tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso/60">
                        {s.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-terracotta transition-colors group-hover:text-clay">
                        Discover
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 border rule bg-espresso px-7 py-7 text-ivory md:flex-row md:items-center">
              <p className="text-sm leading-relaxed text-ivory/75">
                <span className="font-display text-lg text-brass">
                  Also under one roof:  
                </span>
                Office Interiors · Turnkey Projects — executive floors,
                farmhouses and shell-to-styling builds.
              </p>
              <Link
                to="/services"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-ivory/30 px-6 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-brass hover:text-brass"
              >
                All services
                <ArrowUpRight className="h-3.5 w-3.5 text-brass" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------- Before/After + Testimonials -------------------- */}
      <section className="border-y rule bg-linen py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Transformations"
                title={
                  <>
                    From bare shell{" "}
                    <em className="font-light text-terracotta italic">
                      to first home.
                    </em>
                  </>
                }
                copy="Drag the handle to see what sixteen weeks of considered work does to a builder-finish apartment."
              />
              <Reveal delay={0.15} className="mt-10">
                <BeforeAfter
                  before="/images/before.jpg"
                  after="/images/after.jpg"
                  caption="Mehra Residence, Gurugram — completed in 16 weeks"
                />
              </Reveal>
            </div>

            <div className="lg:border-l lg:rule lg:pl-16">
              <SectionHeading
                eyebrow="Client Voices"
                title="Trusted with the rooms people live in."
              />
              <Reveal delay={0.15} className="mt-10">
                <TestimonialCarousel />
                <Link
                  to="/testimonials"
                  className="group mt-8 inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-terracotta transition-colors hover:text-clay"
                >
                  More client stories
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- Process ------------------------------ */}
      <section className="grain relative bg-espresso py-20 text-ivory md:py-28">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            dark
            eyebrow="How We Work"
            title={
              <>
                Four movements, from first hello{" "}
                <em className="font-light text-brass italic">
                  to final styling.
                </em>
              </>
            }
            copy="A process refined over 180 projects — predictable enough to relax into, personal enough to feel bespoke."
          />

          <div className="relative mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div
              className="absolute left-0 right-0 top-8 hidden h-px bg-ivory/15 lg:block"
              aria-hidden="true"
            />
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.number} delay={i * 0.12}>
                  <div className="relative">
                    <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-brass/50 bg-espresso">
                      <Icon className="h-6 w-6 text-brass" />
                    </span>
                    <p className="mt-7 font-display text-sm tracking-[0.34em] text-brass">
                      {s.number}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {s.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-3 text-xs text-ivory/45"
                        >
                          <span className="h-1 w-1 rotate-45 bg-brass" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------- Journal ------------------------------ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="From the Journal"
              title="Notes on craft, material and light."
            />
            <Reveal delay={0.1}>
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-espresso transition-colors hover:text-terracotta"
              >
                All entries
                <ArrowUpRight className="h-4 w-4 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="mt-5 flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
                    {post.category}
                    <span className="h-px w-4 bg-espresso/25" aria-hidden="true" />
                    <span className="font-normal normal-case tracking-normal text-espresso/45">
                      {post.date}
                    </span>
                  </p>
                  <h3 className="mt-3 font-display text-[1.45rem] leading-snug font-medium tracking-tight transition-colors group-hover:text-terracotta">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-espresso/60">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- Consultation --------------------------- */}
      <section id="consultation" className="scroll-mt-24 border-t rule bg-linen/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Begin Here"
              title={
                <>
                  Every project begins{" "}
                  <em className="font-light text-terracotta italic">
                    with a conversation.
                  </em>
                </>
              }
              copy="Forty-five unhurried minutes — at our studio or your site. Bring a floor plan if you have one; nothing else. We will bring the questions."
            />
            <Reveal delay={0.15}>
              <ul className="mt-9 space-y-5 text-sm">
                <li>
                  <a
                    href={studio.phoneHref}
                    className="group flex items-center gap-4 transition-colors hover:text-terracotta"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center border rule text-brass">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.64rem] uppercase tracking-[0.2em] text-espresso/50">
                        Call the studio
                      </span>
                      <span className="mt-0.5 block font-medium">{studio.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={studio.emailHref}
                    className="group flex items-center gap-4 transition-colors hover:text-terracotta"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center border rule text-brass">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.64rem] uppercase tracking-[0.2em] text-espresso/50">
                        Write to us
                      </span>
                      <span className="mt-0.5 block font-medium">{studio.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center border rule text-brass">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.64rem] uppercase tracking-[0.2em] text-espresso/50">
                      Visit
                    </span>
                    <span className="mt-0.5 block font-medium">{studio.address}</span>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center border rule text-brass">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.64rem] uppercase tracking-[0.2em] text-espresso/50">
                      Studio hours
                    </span>
                    <span className="mt-0.5 block font-medium">{studio.hours}</span>
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

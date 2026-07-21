import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, copy, image }: PageHeroProps) {
  return (
    <section className="grain relative flex min-h-[52vh] items-end overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-44 sm:px-8 md:pb-20">
        <Reveal>
          <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brass">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {copy && (
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ivory/70">
              {copy}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

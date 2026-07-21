import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] ${
          align === "center" ? "justify-center" : ""
        } ${dark ? "text-brass" : "text-terracotta"}`}
      >
        <span className="h-px w-8 bg-brass" aria-hidden="true" />
        {eyebrow}
        {align === "center" && (
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
        )}
      </p>
      <h2
        className={`mt-5 font-display text-3xl leading-[1.12] font-medium tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-ivory" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 text-[1.02rem] leading-relaxed ${
            dark ? "text-ivory/65" : "text-espresso/65"
          }`}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

interface CtaBandProps {
  title?: React.ReactNode;
  copy?: string;
}

export default function CtaBand({
  title = (
    <>
      Have a space in mind?{" "}
      <em className="font-light text-brass italic">Let’s walk it together.</em>
    </>
  ),
  copy = "The first consultation is on us — forty-five unhurried minutes, an honest budget conversation, and notes you keep either way.",
}: CtaBandProps) {
  return (
    <section className="border-t rule bg-linen">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between md:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-[1.14] font-medium tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 leading-relaxed text-espresso/65">{copy}</p>
        </Reveal>
        <Reveal delay={0.12} className="shrink-0">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-colors duration-300 hover:bg-espresso hover:text-ivory"
          >
            Get a Free Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

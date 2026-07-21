import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-7xl font-medium tracking-tight text-brass sm:text-8xl">
            404
          </p>
          <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            This room doesn’t exist{" "}
            <em className="font-light text-terracotta italic">in the plan.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-espresso/60">
            The page you were looking for has been moved, renamed, or never
            built. The rest of the studio, however, is very much standing.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-brass hover:text-ink"
            >
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2.5 rounded-full border border-espresso/25 px-7 py-3.5 text-sm font-semibold text-espresso transition-colors hover:border-espresso"
            >
              View the Portfolio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { categories, studio } from "../lib/data";
import { InstagramIcon, PinterestIcon } from "./icons";
import { Logo } from "./Navbar";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain bg-ink text-ivory/65">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo onDark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              A boutique interior design studio in {studio.city}. We compose
              warm, considered homes and workplaces — and build them with the
              same hands that drew them.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={studio.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center border rule-light text-ivory/70 transition-colors hover:border-brass hover:text-brass"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={studio.pinterest}
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="grid h-10 w-10 place-items-center border rule-light text-ivory/70 transition-colors hover:border-brass hover:text-brass"
              >
                <PinterestIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Studio">
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
              Studio
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/services", label: "Services" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-brass">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Specialist practices">
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
              Specialist Practices
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/portfolio/category/${c.slug}`}
                    className="transition-colors hover:text-brass"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
              The Studio
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <span>{studio.address}</span>
              </li>
              <li>
                <a href={studio.phoneHref} className="flex gap-3 transition-colors hover:text-brass">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {studio.phone}
                </a>
              </li>
              <li>
                <a href={studio.emailHref} className="flex gap-3 transition-colors hover:text-brass">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {studio.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                {studio.hours}
              </li>
            </ul>
            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:text-brass"
            >
              Book a consultation
              <ArrowUpRight className="h-3.5 w-3.5 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t rule-light pt-7 text-xs text-ivory/40 sm:flex-row sm:items-center">
          <p>
            © {year} Ashoka Interiors · Est. {studio.established} · {studio.city}
          </p>
          <p className="font-display italic text-ivory/45">
            “Rooms that hold a quiet kind of luxury.”
          </p>
        </div>
      </div>
    </footer>
  );
}

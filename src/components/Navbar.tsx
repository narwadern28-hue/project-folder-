import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { categories, studio } from "../lib/data";
import { InstagramIcon, PinterestIcon } from "./icons";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-1 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
    isActive
      ? "text-espresso after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-brass"
      : "text-espresso/55 hover:text-espresso"
  }`;

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Ashoka Interiors — home">
      <span className="grid h-10 w-10 shrink-0 place-items-center border border-brass/70 font-display text-[1.3rem] leading-none text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
        A
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.4rem] font-medium tracking-tight ${
            onDark ? "text-ivory" : "text-espresso"
          }`}
        >
          Ashoka
        </span>
        <span
          className={`mt-1.5 block text-[0.58rem] font-semibold uppercase tracking-[0.44em] ${
            onDark ? "text-ivory/50" : "text-espresso/55"
          }`}
        >
          Interiors
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioExpanded, setPortfolioExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const portfolioActive = location.pathname.startsWith("/portfolio");

  return (
    <header
      className={`sticky top-0 z-50 border-b rule bg-ivory/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_40px_-18px_rgba(30,24,20,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          {/* Portfolio dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1.5">
              <NavLink
                to="/portfolio"
                className={`relative py-1 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                  portfolioActive
                    ? "text-espresso after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-brass"
                    : "text-espresso/55 hover:text-espresso"
                }`}
              >
                Portfolio
              </NavLink>
              <button
                aria-label="Open portfolio menu"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
                className="text-espresso/55 transition-colors hover:text-espresso"
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4"
                >
                  <div className="border rule bg-[#FBF7EF] p-2 shadow-[0_28px_60px_-20px_rgba(30,24,20,0.4)]">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/portfolio/category/${c.slug}`}
                        className="group flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-linen"
                      >
                        <span>
                          <span className="block font-display text-[0.98rem] text-espresso">
                            {c.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-espresso/50">
                            {c.tagline}
                          </span>
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-brass opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    ))}
                    <div className="mt-1 border-t rule px-4 pb-2 pt-3">
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-terracotta transition-colors hover:text-clay"
                      >
                        View all projects
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/testimonials" className={navLinkClass}>
            Testimonials
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-[0.8rem] font-semibold tracking-wide text-ink transition-colors duration-300 hover:bg-espresso hover:text-ivory md:inline-flex"
          >
            Get a Free Consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            className="grid h-11 w-11 place-items-center border rule text-espresso lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-espresso text-ivory lg:hidden"
          >
            <div className="flex h-[4.5rem] items-center justify-between border-b rule-light px-5">
              <Logo onDark />
              <button
                className="grid h-11 w-11 place-items-center border rule-light text-ivory"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-8" aria-label="Mobile">
              <ul className="space-y-1">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                ].map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      className="block py-3 font-display text-3xl font-medium tracking-tight text-ivory transition-colors hover:text-brass"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 }}
                >
                  <button
                    className="flex w-full items-center justify-between py-3 text-left font-display text-3xl font-medium tracking-tight text-ivory"
                    onClick={() => setPortfolioExpanded((v) => !v)}
                    aria-expanded={portfolioExpanded}
                  >
                    Portfolio
                    <ChevronDown
                      className={`h-5 w-5 text-brass transition-transform duration-300 ${
                        portfolioExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {portfolioExpanded && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <li>
                          <Link
                            to="/portfolio"
                            className="flex items-center gap-3 py-2.5 pl-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brass"
                          >
                            <span className="h-px w-5 bg-brass" /> All Projects
                          </Link>
                        </li>
                        {categories.map((c) => (
                          <li key={c.slug}>
                            <Link
                              to={`/portfolio/category/${c.slug}`}
                              className="flex items-center gap-3 py-2.5 pl-4 text-[0.72rem] uppercase tracking-[0.22em] text-ivory/60 transition-colors hover:text-ivory"
                            >
                              <span className="h-px w-5 bg-ivory/30" /> {c.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>

                {[
                  { to: "/services", label: "Services" },
                  { to: "/testimonials", label: "Testimonials" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contact", label: "Contact" },
                ].map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.24 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      className="block py-3 font-display text-3xl font-medium tracking-tight text-ivory transition-colors hover:text-brass"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="border-t rule-light px-5 py-6">
              <a
                href={studio.phoneHref}
                className="flex items-center gap-3 text-sm text-ivory/70"
              >
                <Phone className="h-4 w-4 text-brass" /> {studio.phone}
              </a>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-ivory/60">
                  <a href={studio.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-brass">
                    <InstagramIcon className="h-4.5 w-4.5" />
                  </a>
                  <a href={studio.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="hover:text-brass">
                    <PinterestIcon className="h-4.5 w-4.5" />
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-3 text-[0.78rem] font-semibold text-ink"
                >
                  Free Consultation
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "../lib/data";

export default function TestimonialCarousel() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (d: number) => {
    setIndex(([i]) => [(i + d + testimonials.length) % testimonials.length, d]);
  };

  const t = testimonials[index];

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-1.5 text-brass" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <div className="relative mt-6 min-h-[16rem] flex-1 sm:min-h-[14rem]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: 42 * dir }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -34 * dir }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xl leading-[1.5] font-light tracking-tight text-espresso sm:text-2xl">
              “{t.quote}”
            </p>
            <footer className="mt-7">
              <p className="font-medium text-espresso">{t.name}</p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-terracotta">
                {t.context}
              </p>
              <p className="mt-0.5 text-xs text-espresso/50">{t.location}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between border-t rule pt-6">
        <p className="font-display text-sm tracking-widest text-espresso/50">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 text-espresso/25">/</span>
          {String(testimonials.length).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-espresso/20 text-espresso transition-colors hover:border-brass hover:bg-brass hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-espresso/20 text-espresso transition-colors hover:border-brass hover:bg-brass hover:text-ink"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

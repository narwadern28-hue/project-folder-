import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterProps {
  before: string;
  after: string;
  caption?: string;
  ratio?: string;
}

export default function BeforeAfter({
  before,
  after,
  caption,
  ratio = "aspect-[4/3]",
}: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(52);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(94, Math.max(6, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (dragging.current) update(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [update]);

  return (
    <figure>
      <div
        ref={ref}
        onPointerDown={(e) => {
          dragging.current = true;
          update(e.clientX);
        }}
        className={`relative w-full ${ratio} cursor-ew-resize touch-pan-y select-none overflow-hidden bg-espresso`}
        role="slider"
        aria-label="Before and after comparison. Drag to reveal more of either image."
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(6, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(94, p + 4));
        }}
      >
        <img
          src={after}
          alt="After — styled interior by Ashoka Interiors"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt="Before — the bare shell"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/15" />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 bg-ink/70 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ivory backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 bg-brass px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ink">
          After
        </span>

        <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 w-px -translate-x-1/2 bg-ivory shadow-[0_0_12px_rgba(0,0,0,0.5)]" />
          <div className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/50 bg-espresso/85 text-ivory shadow-xl backdrop-blur transition-transform duration-300">
            <ChevronsLeftRight className="h-5 w-5" />
          </div>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-4 flex items-center gap-3 text-sm text-espresso/60">
          <span className="h-px w-7 bg-brass" aria-hidden="true" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

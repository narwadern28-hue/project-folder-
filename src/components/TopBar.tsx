import { Phone, MapPin } from "lucide-react";
import { studio } from "../lib/data";
import { InstagramIcon, PinterestIcon } from "./icons";

export default function TopBar() {
  return (
    <div className="bg-espresso text-ivory/70">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-[0.72rem] tracking-wide sm:px-8">
        <div className="flex items-center gap-5">
          <a
            href={studio.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-brass"
          >
            <Phone className="h-3 w-3 text-brass" />
            <span className="hidden sm:inline">{studio.phone}</span>
            <span className="sm:hidden">Call the studio</span>
          </a>
          <span className="hidden h-3 w-px bg-ivory/20 sm:block" aria-hidden="true" />
          <span className="hidden items-center gap-2 sm:flex">
            <MapPin className="h-3 w-3 text-brass" />
            {studio.city}, India
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-ivory/45 md:inline">{studio.email}</span>
          <span className="hidden h-3 w-px bg-ivory/20 md:block" aria-hidden="true" />
          <span className="text-ivory/45">Follow</span>
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Ashoka Interiors on Instagram"
            className="transition-colors hover:text-brass"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={studio.pinterest}
            target="_blank"
            rel="noreferrer"
            aria-label="Ashoka Interiors on Pinterest"
            className="transition-colors hover:text-brass"
          >
            <PinterestIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

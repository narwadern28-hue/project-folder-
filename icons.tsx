interface IconProps {
  className?: string;
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="19" height="19" x="2.5" y="2.5" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function PinterestIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 20.2c.6-2.2 1.7-7 1.7-7" />
      <path d="M10.7 10.3c-.4.8-.6 1.5-.6 2.2 0 1.2.8 2.1 1.9 2.1 1.7 0 3-2 3-4.4 0-2.4-1.7-4.2-4.2-4.2-3 0-5 2.1-5 4.7 0 .9.3 1.8 1 2.4" />
    </svg>
  );
}

/**
 * The mark, straight from the app's own Logo component: two bars passing in
 * opposite directions, which is the whole idea of the product in one glyph.
 */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * (55 / 80)}
      viewBox="10 25 80 55"
      aria-hidden="true"
      className={className}
    >
      <g fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <rect x="16" y="34" width="48" height="12" rx="6" />
        <path d="M64 27 L88 40 L64 53 Z" />
        <rect x="36" y="58" width="48" height="12" rx="6" />
        <path d="M36 51 L12 64 L36 77 Z" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Logo size={30} className="text-teal" />
      <span className="text-[1.3rem] font-bold tracking-tight text-cream">Even Pay</span>
    </span>
  );
}

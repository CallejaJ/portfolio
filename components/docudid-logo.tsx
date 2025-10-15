interface DocudidLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DocudidLogo({ className = "", size = "md" }: DocudidLogoProps) {
  const sizeClasses = {
    sm: "h-12",
    md: "h-16",
    lg: "h-24",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        className={`${sizeClasses[size]} w-auto`}
        viewBox="0 0 220 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Document shield base */}
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent/80"
        >
          {/* Corner brackets for security frame */}
          <path
            d="M8 16 L8 8 L16 8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 8 L40 8 L40 16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 32 L8 40 L16 40"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 32 L40 40 L32 40"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Document shape */}
        <rect
          x="15"
          y="14"
          width="18"
          height="22"
          fill="rgb(156 163 175)"
          stroke="rgb(107 114 128)"
          strokeWidth="1.5"
          rx="1"
        />

        {/* Document content lines (representing text) */}
        <g stroke="rgb(75 85 99)" strokeWidth="1.2">
          <line x1="18" y1="20" x2="30" y2="20" strokeLinecap="round" />
          <line x1="18" y1="24" x2="30" y2="24" strokeLinecap="round" />
          <line x1="18" y1="28" x2="27" y2="28" strokeLinecap="round" />
        </g>

        {/* Security checkmark (verification) */}
        <path
          d="M20 30 L22.5 32.5 L28 27"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent drop-shadow-sm"
        />

        {/* DOCUDID text */}
        <text
          x="54"
          y="28"
          fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="24"
          fontWeight="700"
          fill="currentColor"
          className="text-foreground drop-shadow-sm"
        >
          DOCUDID
        </text>

        {/* Subtle tagline */}
        <text
          x="54"
          y="38"
          fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="8"
          fontWeight="500"
          fill="currentColor"
          className="text-muted-foreground/90"
        >
          AI-Powered Document Security
        </text>
      </svg>
    </div>
  );
}

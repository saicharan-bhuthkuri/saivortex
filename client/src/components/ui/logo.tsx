interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2563EB", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#7C3AED", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#1E1B4B", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M20 8L32 20L20 32L8 20L20 8Z" fill="url(#gradient)" />
    </svg>
  );
}

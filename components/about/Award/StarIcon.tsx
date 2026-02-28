'use client';

interface StarIconProps {
  className?: string;
  isHovered?: boolean;
}

export function StarIcon({ className, isHovered = false }: StarIconProps) {
  return (
    <svg
      className={`h-6 w-6 transition-colors duration-500 ${
        isHovered ? 'text-white' : 'text-black'
      } ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

'use client';

export default function HamburgerIcon({ color, className }: { color: string; className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.8572 2.28572H1.14288"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M14.8572 8H1.14288" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M14.8572 13.7143H1.14288"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

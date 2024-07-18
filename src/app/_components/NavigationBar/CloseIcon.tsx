'use client';

export default function CloseIcon({ color, className }: { color: string; className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14 2L2 14" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 2L14 14" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

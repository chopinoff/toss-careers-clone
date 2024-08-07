'use client';

export default function SearchIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.83684 12.6737C10.0604 12.6737 12.6737 10.0604 12.6737 6.83684C12.6737 3.61324 10.0604 1 6.83684 1C3.61324 1 1 3.61324 1 6.83684C1 10.0604 3.61324 12.6737 6.83684 12.6737Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9999 15.0001L10.9615 10.9617"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

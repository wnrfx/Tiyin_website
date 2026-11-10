import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="tiyin-ring-outer" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9E1B" />
          <stop offset="50%" stopColor="#FF6B00" />
          <stop offset="100%" stopColor="#D94E00" />
        </linearGradient>
        <linearGradient id="tiyin-ring-mid" x1="26" y1="26" x2="94" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFC145" />
          <stop offset="100%" stopColor="#FF7A00" />
        </linearGradient>
        <radialGradient id="tiyin-pupil" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="45%" stopColor="#FF9800" />
          <stop offset="100%" stopColor="#FF5500" />
        </radialGradient>
      </defs>

      {/* Outer eye-contour ring */}
      <circle
        cx="60"
        cy="60"
        r="52"
        stroke="url(#tiyin-ring-outer)"
        strokeWidth="8"
      />
      {/* Subtle almond eye-arc accent inside */}
      <path
        d="M12 60C24 34 41 22 60 22C79 22 96 34 108 60C96 86 79 98 60 98C41 98 24 86 12 60Z"
        stroke="url(#tiyin-ring-mid)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Concentric iris circle */}
      <circle
        cx="60"
        cy="60"
        r="26"
        stroke="url(#tiyin-ring-mid)"
        strokeWidth="6"
      />
      {/* Inner glowing pupil circle */}
      <circle cx="60" cy="60" r="12" fill="url(#tiyin-pupil)" />
      {/* Specular highlight */}
      <circle cx="65" cy="55" r="3.5" fill="#FFF8E7" />
    </svg>
  );
}

export default LogoIcon;

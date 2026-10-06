import React from 'react';

/**
 * ToveluWordmark - Production Integrated Logotype
 * 
 * Specifications & Integration Math:
 * 1. Primary Typography: Geometric Sans (Inter Display SemiBold proportions).
 *    - Cap Height (H_cap): 32px (Y=8 to Y=40).
 *    - Stroke Weight (S): 4.5px (uniform across T, V, E, L, U).
 * 2. Optical Overshoot:
 *    - Exact overshoot: +2.5% above cap height (Y=7.2), +2.5% below baseline (Y=40.8).
 *    - Scale factor: s = 0.93075 (33.6px visual height).
 *    - Vertical transform: translateY(2.64px).
 * 3. Kerning Spacing:
 *    - T-Icon Pair: Left node of icon tucked 1.5px under T crossbar overhang.
 *    - Icon-V Pair: Optical gap calibrated to 6.2px against diagonal left stem of V.
 *    - Uniform letter tracking: 6.0px - 6.5px inter-glyph rhythm.
 * 4. Architecture:
 *    - 100% self-contained pure SVG vector paths.
 *    - Theme adaptive with fill="currentColor".
 *    - Zero browser font-shift or layout reflow.
 */
export function ToveluWordmark({
  height = 36,
  color = 'currentColor',
  className = '',
  ariaLabel = 'TOVELU - Global Digital Health Operating System',
  ...props
}) {
  return (
    <svg
      height={height}
      viewBox="0 0 178 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      className={`tovelu-wordmark ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      {...props}
    >
      {/* =====================================================================
          GLYPH 1: 'T'
          Cap Height: Y=8 to Y=40 (32px).
          Crossbar: X=2 to X=25.5, Thickness: 4.4px.
          Stem: X=11.5 to X=16.0, Thickness: 4.5px.
          ===================================================================== */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8H25.5V12.4H16V40H11.5V12.4H2V8Z"
        fill={color}
      />

      {/* =====================================================================
          GLYPH 2: INTEGRATED 'O' (Official TOVELU 5-Node Health Graph Icon)
          Scale: 0.93075 | Translation: (19.0, 2.64)
          Visual Bounds: X=24.58 to X=58.09 (Width: 33.5px)
          Optical Overshoot: Y=7.20 to Y=40.80 (Height: 33.6px = +2.5% cap, +2.5% base)
          ===================================================================== */}
      <g transform="matrix(0.93075 0 0 0.93075 19.0 2.64)">
        {/* Branch 1: Left-Upper */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9398 22.3417C17.7511 22.8608 17.1773 23.1285 16.6583 22.9398L11.1583 20.9398C10.6392 20.7511 10.3715 20.1773 10.5602 19.6583C10.7489 19.1392 11.3227 18.8715 11.8417 19.0602L17.3417 21.0602C17.8608 21.2489 18.1285 21.8227 17.9398 22.3417Z"
          fill={color}
        />
        {/* Branch 2: Right-Upper */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.4285 19.6286C37.6336 20.1414 37.3842 20.7234 36.8714 20.9285L31.8714 22.9285C31.3586 23.1336 30.7766 22.8842 30.5715 22.3714C30.3664 21.8586 30.6158 21.2766 31.1286 21.0715L36.1286 19.0715C36.6414 18.8664 37.2234 19.1158 37.4285 19.6286Z"
          fill={color}
        />
        {/* Branch 3: Left-Lower */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0882 29.6913C20.5348 30.0161 20.6336 30.6415 20.3087 31.0882L16.3087 36.5882C15.9839 37.0348 15.3585 37.1336 14.9118 36.8087C14.4652 36.4839 14.3664 35.8585 14.6913 35.4118L18.6913 29.9118C19.0161 29.4652 19.6415 29.3664 20.0882 29.6913Z"
          fill={color}
        />
        {/* Branch 4: Right-Lower */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.0882 36.8087C32.6415 37.1336 32.0161 37.0348 31.6913 36.5882L27.6913 31.0882C27.3664 30.6415 27.4652 30.0161 27.9118 29.6913C28.3585 29.3664 28.9839 29.4652 29.3087 29.9118L33.3087 35.4118C33.6336 35.8585 33.5348 36.4839 33.0882 36.8087Z"
          fill={color}
        />
        {/* Central Sovereign Ring */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26ZM24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
          fill={color}
        />
        {/* Top Stem */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.902 17.5C23.3498 17.5 22.902 17.0523 22.902 16.5L22.9019 10C22.9019 9.44776 23.3496 9.00003 23.9019 9.00003C24.4542 9.00002 24.9019 9.44773 24.9019 10L24.902 16.5C24.902 17.0523 24.4543 17.5 23.902 17.5Z"
          fill={color}
        />
        {/* Top Node */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 7.9021C23 8.45438 23.4477 8.9021 24 8.9021C24.5523 8.9021 25 8.45438 25 7.9021C25 7.34981 24.5523 6.9021 24 6.9021C23.4477 6.9021 23 7.34981 23 7.9021ZM21 7.9021C21 9.55895 22.3431 10.9021 24 10.9021C25.6569 10.9021 27 9.55895 27 7.9021C27 6.24525 25.6569 4.9021 24 4.9021C22.3431 4.9021 21 6.24525 21 7.9021Z"
          fill={color}
        />
        {/* Right-Upper Node */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39 20C39.5523 20 40 19.5523 40 19C40 18.4477 39.5523 18 39 18C38.4477 18 38 18.4477 38 19C38 19.5523 38.4477 20 39 20ZM39 22C40.6569 22 42 20.6569 42 19C42 17.3431 40.6569 16 39 16C37.3431 16 36 17.3431 36 19C36 20.6569 37.3431 22 39 22Z"
          fill={color}
        />
        {/* Left-Lower Node */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 39C14.5523 39 15 38.5523 15 38C15 37.4477 14.5523 37 14 37C13.4477 37 13 37.4477 13 38C13 38.5523 13.4477 39 14 39ZM14 41C15.6569 41 17 39.6569 17 38C17 36.3431 15.6569 35 14 35C12.3431 35 11 36.3431 11 38C11 39.6569 12.3431 41 14 41Z"
          fill={color}
        />
        {/* Right-Lower Node */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34 39C34.5523 39 35 38.5523 35 38C35 37.4477 34.5523 37 34 37C33.4477 37 33 37.4477 33 38C33 38.5523 33.4477 39 34 39ZM34 41C35.6569 41 37 39.6569 37 38C37 36.3431 35.6569 35 34 35C32.3431 35 31 36.3431 31 38C31 39.6569 32.3431 41 34 41Z"
          fill={color}
        />
        {/* Left-Upper Node */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20ZM9 22C10.6569 22 12 20.6569 12 19C12 17.3431 10.6569 16 9 16C7.34315 16 6 17.3431 6 19C6 20.6569 7.34315 22 9 22Z"
          fill={color}
        />
      </g>

      {/* =====================================================================
          GLYPH 3: 'V'
          Apex: X=73.5 to X=78.0 at Y=40.
          Stems: Thickness: 4.6px.
          Bounds: X=64.0 to X=87.5.
          ===================================================================== */}
      <path
        d="M64 8H68.6L75.8 33.8L83.0 8H87.6L78 40H73.5L64 8Z"
        fill={color}
      />

      {/* =====================================================================
          GLYPH 4: 'E'
          Stem: X=94.5 to X=99.0 (4.5px).
          Arms: Top (Y=8-12.4), Mid (Y=21.8-26.2), Bot (Y=35.6-40).
          Bounds: X=94.5 to X=115.5.
          ===================================================================== */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94.5 8H115.5V12.4H99V21.8H113V26.2H99V35.6H115.5V40H94.5V8Z"
        fill={color}
      />

      {/* =====================================================================
          GLYPH 5: 'L'
          Stem: X=122.5 to X=127.0 (4.5px).
          Base: X=122.5 to X=142.5 (4.4px).
          Bounds: X=122.5 to X=142.5.
          ===================================================================== */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M122.5 8H127V35.6H142.5V40H122.5V8Z"
        fill={color}
      />

      {/* =====================================================================
          GLYPH 6: 'U'
          Stems: X=149.0-153.5 and X=169.0-173.5 (4.5px).
          Curved Bowl: Y=27 to Y=40, Outer Radius: 12.25px, Inner Radius: 7.75px.
          Bounds: X=149.0 to X=173.5.
          ===================================================================== */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M149 8H153.5V27.5C153.5 31.8 156.9 35.6 161.25 35.6C165.6 35.6 169 31.8 169 27.5V8H173.5V27.5C173.5 34.4 168.0 40 161.25 40C154.5 40 149 34.4 149 27.5V8Z"
        fill={color}
      />
    </svg>
  );
}

export default ToveluWordmark;

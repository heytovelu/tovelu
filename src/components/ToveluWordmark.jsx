import React from 'react';

/**
 * ToveluWordmark - The Canonical Biospheric Arch Wordmark
 * 
 * Locked Brand Direction: Concept 4 - The Biospheric Arch
 * Mathematically calibrated stroke thickness: 2.0px
 * Exactly identical to the 2.0px stroke thickness of the canonical ToveluLogo icon branches and rings.
 * 
 * Optical Kerning Calibration:
 * - T -> O: Preserved authentic spacing
 * - O -> V: 7.5px (subtly narrowed from 11px)
 * - V -> E: 10.0px (strictly identical to original)
 * - E -> L: 10.0px (strictly identical to original)
 * - L -> U: 7.0px (subtly narrowed from 10px)
 */
export function ToveluWordmark({
  height = 36,
  color = 'currentColor',
  strokeWidth = 2.0, // Calibrated 1:1 with ToveluLogo 2.0px branch & ring thickness
  className = '',
  ariaLabel = 'TOVELU - Global Digital Health Operating System',
  ...props
}) {
  return (
    <svg
      height={height}
      viewBox="0 0 194 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      className={`tovelu-wordmark ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      {...props}
    >
      {/* =====================================================================
          GLYPH 1: 'T' (Original Biospheric Arch Lintel & Stem)
          Crossbar: X=4 to X=28 (Width 24px) at Y=7.5
          Vertical Stem: X=16 from Y=7.5 to Y=36.5
          ===================================================================== */}
      <path
        d="M4 7.5H28 M16 7.5V36.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* =====================================================================
          GLYPH 2: 'O' (Original Bio-Architectural Elliptical Ring)
          Center: (46, 22), Rx=15, Ry=14.5
          Span: X=31 to X=61 (Width 30px)
          Spacing from T: Exactly as original
          ===================================================================== */}
      <ellipse
        cx="46"
        cy="22"
        rx="15"
        ry="14.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* =====================================================================
          GLYPH 3: 'V' (Original Parabolic Catenary Keel Arch)
          Narrowed slightly from O (from 11px down to 7.5px gap)
          Starts at X=68.5, Apex at X=81.5, Ends at X=94.5
          Original width: 26px
          ===================================================================== */}
      <path
        d="M68.5 7.5C71.5 22 77.5 36.5 81.5 36.5C85.5 36.5 91.5 22 94.5 7.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* =====================================================================
          GLYPH 4: 'E' (Original Swept Organic Cantilevers)
          Distance from V: Exactly original (10px gap: 94.5 -> 104.5)
          Vertical Stem at X=104.5, Top/Bottom Arms end at X=123.5, Mid at 119.5
          Original width: 19px
          ===================================================================== */}
      <path
        d="M123.5 7.5H104.5V36.5H123.5 M104.5 22H119.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* =====================================================================
          GLYPH 5: 'L' (Original Swept Internal Transition Heel)
          Distance from E: Exactly original (10px gap: 123.5 -> 133.5)
          Vertical Stem at X=133.5, Baseline Foot ends at X=153.5
          Original width: 20px
          ===================================================================== */}
      <path
        d="M133.5 7.5V33.5C133.5 35.5 135 36.5 137.5 36.5H153.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* =====================================================================
          GLYPH 6: 'U' (Original Catenary Suspension Bowl)
          Narrowed slightly from L (from 10px down to 7.0px gap at foot)
          Left Stem at X=160.5, Center Apex at X=173, Right Stem at X=185.5
          Original width: 25px
          ===================================================================== */}
      <path
        d="M160.5 7.5V23C160.5 31 166 36.5 173 36.5C180 36.5 185.5 31 185.5 23V7.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ToveluWordmark;

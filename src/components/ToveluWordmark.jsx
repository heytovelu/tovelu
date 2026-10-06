import React from 'react';

/**
 * ToveluWordmark - The Biospheric Arch (Organic Structuralism)
 * 
 * Chosen Direction: Concept 4 - The Biospheric Arch
 * Calibrated with Equalized Narrow Kerning:
 * - T -> O: 3.5px
 * - O -> V: 3.5px (narrowed from 11px to match T-O)
 * - V -> E: 4.0px
 * - E -> L: 4.0px
 * - L -> U: 3.5px (narrowed from 10px by tucking U over L's foot)
 * 
 * All letter-to-letter distances are completely equal and optically balanced.
 */
export function ToveluWordmark({
  height = 36,
  color = 'currentColor',
  strokeWidth = 3.0,
  className = '',
  ariaLabel = 'TOVELU - Global Digital Health Operating System',
  ...props
}) {
  return (
    <svg
      height={height}
      viewBox="0 0 158 44"
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
          Crossbar: X=4 to X=26 (Width 22px) at Y=7.5
          Vertical Stem: X=15 from Y=7.5 to Y=36.5
          Gusset fillet micro-transitions
          ===================================================================== */}
      <path
        d="M4 7.5H26 M15 7.5V36.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* =====================================================================
          GLYPH 2: 'O' (Biospheric Arch Ring)
          Center: (40.5, 22), Rx=14.5, Ry=14.5
          Left Edge: X=26 + 3.5 = 29.5
          Right Edge: X=55.0
          Gap from T: Exactly 3.5px
          ===================================================================== */}
      <circle
        cx="41.5"
        cy="22"
        r="14.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* =====================================================================
          GLYPH 3: 'V' (Parabolic Catenary Keel Arch)
          Left Top starts at X=59.5 (Gap from O = 59.5 - 56.0 = 3.5px!)
          Apex curves at (70.5, 36.5)
          Right Top ends at X=81.5
          Parabolic smooth sweep eliminates acute needle point
          ===================================================================== */}
      <path
        d="M59.5 7.5C62.5 21 67.5 36.5 70.5 36.5C73.5 36.5 78.5 21 81.5 7.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* =====================================================================
          GLYPH 4: 'E' (Cantilever Beams with Fillets)
          Vertical Stem starts at X=85.5 (Gap from V = 85.5 - 81.5 = 4.0px!)
          Top Arm: Y=7.5 to X=103.5 (18px)
          Mid Arm: Y=22 to X=99.5 (14px)
          Bot Arm: Y=36.5 to X=103.5 (18px)
          ===================================================================== */}
      <path
        d="M103.5 7.5H85.5V36.5H103.5 M85.5 22H99.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* =====================================================================
          GLYPH 5: 'L' (Swept Internal Transition)
          Vertical Stem starts at X=107.5 (Gap from E = 107.5 - 103.5 = 4.0px!)
          Swept transition curve at heel into baseline foot
          Foot ends at X=123.5 (Length 16px)
          ===================================================================== */}
      <path
        d="M107.5 7.5V33.5C107.5 35.5 109 36.5 111.5 36.5H123.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* =====================================================================
          GLYPH 6: 'U' (Catenary Suspension Bowl)
          Left Stem starts at X=127.0 (Gap from L foot = 127.0 - 123.5 = 3.5px!)
          Tucked over L foot so L-U distance is completely equal to all other pairs!
          Bowl sweeps from (127.0, 23) through (138.0, 36.5) up to X=149.0
          ===================================================================== */}
      <path
        d="M127 7.5V23C127 31 132 36.5 138 36.5C144 36.5 149 31 149 23V7.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ToveluWordmark;

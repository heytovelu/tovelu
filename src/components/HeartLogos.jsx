import React from 'react';

/**
 * Curated Kid-Simple Heart Shapes for TOVELU
 * - Extreme simplicity (child-drawable)
 * - Calm health colors (deep clinical teals, sea mints, no panic reds)
 * - 16x16px indestructible legibility
 */

// Heart Option 1: The Pure Solid Heart (Classic, Bold, Indestructible)
export function HeartOptionSolid({ size = 48, color = '#ffffff', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solid Heart" {...props}>
      <path
        d="M 50 84 C 50 84 18 62 18 38 C 18 24 29 16 41 16 C 46 16 50 19 50 22 C 50 19 54 16 59 16 C 71 16 82 24 82 38 C 82 62 50 84 50 84 Z"
        fill={color}
      />
    </svg>
  );
}

// Heart Option 2: The One-Stroke Crayon Outline (Child's Single Line Drawing)
export function HeartOptionLine({ size = 48, color = '#ffffff', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One-Stroke Line Heart" {...props}>
      <path
        d="M 50 80 C 48 78 22 58 22 36 C 22 23 32 16 42 16 C 47 16 50 19 50 22 C 50 19 53 16 58 16 C 68 16 78 23 78 36 C 78 58 52 78 50 80 Z"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Heart Option 3: The Two Hugging Leaves (Two Simple Strokes Hugging Together)
export function HeartOptionTwoLeaves({ size = 48, color = '#ffffff', accentColor = '#34D399', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two Hugging Leaves Heart" {...props}>
      {/* Left Leaf / Arm */}
      <path
        d="M 50 82 C 34 68 20 52 20 36 C 20 22 31 16 42 16 C 48 16 50 20 50 24 C 50 45 50 65 50 82 Z"
        fill={color}
      />
      {/* Right Leaf / Arm */}
      <path
        d="M 50 82 C 66 68 80 52 80 36 C 80 22 69 16 58 16 C 52 16 50 20 50 24 C 50 45 50 65 50 82 Z"
        fill={accentColor || color}
      />
    </svg>
  );
}

// Heart Option 4: The Open Loop Heart (Continuous Life Arc with Friendly Gap)
export function HeartOptionOpenLoop({ size = 48, color = '#ffffff', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open Loop Heart" {...props}>
      <path
        d="M 46 22 C 40 17 32 16 26 20 C 18 26 18 38 24 48 C 34 62 50 78 50 78 C 50 78 66 62 76 48 C 82 38 82 26 74 20 C 66 14 56 16 50 24 L 50 36"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Heart Option 5: The Soft Rounded Geo Heart (Apple-Style Ultra Clean Geometry)
export function HeartOptionSoftGeo({ size = 48, color = '#ffffff', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Soft Geometric Heart" {...props}>
      {/* Two perfect circles merged with a smooth triangle base */}
      <circle cx="36" cy="38" r="18" fill={color} />
      <circle cx="64" cy="38" r="18" fill={color} />
      <path
        d="M 20 44 C 20 58 36 72 50 82 C 64 72 80 58 80 44 Z"
        fill={color}
      />
    </svg>
  );
}

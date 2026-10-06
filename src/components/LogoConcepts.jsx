import React from 'react';

/**
 * 5 Radically Distinct Brand Concepts for TOVELU (Engineered from Scratch)
 * Compliant with TOVELU Global Health Constitution (Draft v0.1)
 * WCAG 2.2 AAA Contrast, 16x16px Favicon Scalability, Zero Medical Clichés
 */

// Concept 1: The Biometric Horizon (Meniscus Cradle + Floating Equilibrium Arc)
export function Concept1BiometricHorizon({ size = 48, color = 'currentColor', accentColor = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concept 1: The Biometric Horizon" {...props}>
      {/* Upper Homeostasis Hemisphere */}
      <path
        d="M 20 44 C 20 27.5 33.5 14 50 14 C 66.5 14 80 27.5 80 44 Z"
        fill={color}
      />
      {/* Lower Meniscus Foundation Cradle (Parabolic Horizon) */}
      <path
        d="M 16 56 C 16 56 34 68 50 68 C 66 68 84 56 84 56 C 84 76 68.8 86 50 86 C 31.2 86 16 76 16 56 Z"
        fill={accentColor || color}
      />
      {/* Central Equilibrium Node in Negative Horizon Gap */}
      <circle cx="50" cy="50" r="4.5" fill={color} />
    </svg>
  );
}

// Concept 2: The Cellular Prism (Triaxial Hexagonal Vault Lattice)
export function Concept2CellularPrism({ size = 48, color = 'currentColor', accentColor = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concept 2: The Cellular Prism" {...props}>
      {/* Top Facet */}
      <path
        d="M 50 14 L 82 32 L 64 42 L 36 42 L 18 32 Z"
        fill={accentColor || color}
      />
      {/* Left Sovereign Facet */}
      <path
        d="M 18 36 L 36 46 L 36 76 L 18 86 L 14 62 Z"
        fill={color}
        opacity="0.9"
      />
      {/* Right Encrypted Facet */}
      <path
        d="M 82 36 L 86 62 L 82 86 L 64 76 L 64 46 Z"
        fill={color}
      />
      {/* Central Hexagonal Negative Space Void */}
      <polygon points="50,44 62,51 62,65 50,72 38,65 38,51" fill="var(--bg-canvas, #ffffff)" />
      {/* Core Privacy Singularity */}
      <circle cx="50" cy="58" r="4" fill={color} />
    </svg>
  );
}

// Concept 3: The Resilient Helix (The Epigenetic Tension Bow)
export function Concept3ResilientHelix({ size = 48, color = 'currentColor', accentColor = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concept 3: The Resilient Helix" {...props}>
      {/* Outer Sweeping Vitality Shell */}
      <path
        d="M 22 82 C 14 62 18 30 38 18 C 58 6 82 14 86 36 C 90 62 70 84 50 84 C 36 84 28 74 36 58 C 42 46 56 46 62 52 C 68 58 66 68 58 72 C 50 76 42 70 44 62"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* Inner Vital Spark */}
      <circle cx="56" cy="38" r="6" fill={accentColor || color} />
    </svg>
  );
}

// Concept 4: The Sentinel Portal (The Clinical Sanctuary Threshold)
export function Concept4SentinelPortal({ size = 48, color = 'currentColor', accentColor = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concept 4: The Sentinel Portal" {...props}>
      {/* Outer Monolithic Sanctuary Lintel */}
      <path
        d="M 20 86 L 20 40 C 20 23.5 33.5 14 50 14 C 66.5 14 80 23.5 80 40 L 80 86 L 62 86 L 62 48 C 62 41.5 56.5 36 50 36 C 43.5 36 38 41.5 38 48 L 38 86 Z"
        fill={color}
      />
      {/* Horizon Foundation Bar */}
      <rect x="14" y="82" width="72" height="8" rx="4" fill={accentColor || color} />
      {/* Celestial Keystroke Node */}
      <circle cx="50" cy="24" r="4" fill="var(--bg-canvas, #ffffff)" />
    </svg>
  );
}

// Concept 5: The Harmonic Pulse (The Autonomic Wave Duality)
export function Concept5HarmonicPulse({ size = 48, color = 'currentColor', accentColor = 'currentColor', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concept 5: The Harmonic Pulse" {...props}>
      {/* Ascending Autonomic Inflow Leaf */}
      <path
        d="M 50 14 C 30 14 18 30 18 50 C 18 64 26 74 38 78 C 34 68 36 54 44 46 C 52 38 66 36 74 24 C 68 18 60 14 50 14 Z"
        fill={color}
      />
      {/* Descending Circadian Recovery Leaf */}
      <path
        d="M 50 86 C 70 86 82 70 82 50 C 82 36 74 26 62 22 C 66 32 64 46 56 54 C 48 62 34 64 26 76 C 32 82 40 86 50 86 Z"
        fill={accentColor || color}
      />
      {/* Core Resting Equilibrium Point */}
      <circle cx="50" cy="50" r="5" fill="var(--bg-canvas, #ffffff)" />
    </svg>
  );
}

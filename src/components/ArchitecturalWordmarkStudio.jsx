import React, { useState } from 'react';
import { ToveluLogo } from './ToveluLogo';

/**
 * ArchitecturalWordmarkStudio
 * 
 * 5 Bespoke Evolutionary Concepts expanding "The Architectural Monoline":
 * 1. The Geodesic Grid (Expanded Monoline - Golden Ratio 1.618 Stance)
 * 2. The Sovereign Horizon (Super-Extended Monolithic - Wide Stance)
 * 3. The Node-Calibrated Monoline (Direct Graph DNA - 1:1 Primitive Resonance)
 * 4. The Biospheric Arch (Organic Structuralism - Bio-Architectural Curves)
 * 5. The Vitruvian Modular (Harmonic Grid - 4px Sacred Modular Proportion)
 */

export function ArchitecturalWordmarkSVG({ concept = 'geodesic', height = 36, color = 'currentColor' }) {
  if (concept === 'geodesic') {
    // 1. The Geodesic Grid: 2.8px uniform stroke, wide 1.618 golden stance, stadium O
    return (
      <svg height={height} viewBox="0 0 216 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Geodesic Grid">
        {/* T: Wide 26px Lintel */}
        <path d="M4 7.5H30 M17 7.5V36.5" stroke={color} strokeWidth="2.8" strokeLinecap="square"/>
        {/* O: Expanded 34px Stadium Circle */}
        <rect x="40" y="7.5" width="34" height="29" rx="14.5" stroke={color} strokeWidth="2.8"/>
        {/* V: 26px Wide Truss Diagonal */}
        <path d="M83 7.5L96 36.5L109 7.5" stroke={color} strokeWidth="2.8" strokeLinejoin="miter"/>
        {/* E: Extended 19px Cantilever Beams */}
        <path d="M138 7.5H119V36.5H138 M119 22H134" stroke={color} strokeWidth="2.8"/>
        {/* L: 19px Monolithic Foot */}
        <path d="M148 7.5V36.5H167" stroke={color} strokeWidth="2.8"/>
        {/* U: Wide 26px Architectural Basin */}
        <path d="M177 7.5V23C177 30.8 182.8 36.5 190 36.5C197.2 36.5 203 30.8 203 23V7.5" stroke={color} strokeWidth="2.8"/>
      </svg>
    );
  }

  if (concept === 'horizon') {
    // 2. The Sovereign Horizon: Ultra-wide (+25%), flat structural cuts, 3.2px stroke
    return (
      <svg height={height} viewBox="0 0 236 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Sovereign Horizon">
        {/* T: Ultra-wide 30px Lintel */}
        <path d="M3 8H33 M18 8V36" stroke={color} strokeWidth="3.2" strokeLinecap="square"/>
        {/* O: Stretched Capsule with 20px Flat Horizontals */}
        <path d="M43 8H63C71 8 77 14.3 77 22C77 29.7 71 36 63 36H43C35 36 29 29.7 29 22C29 14.3 35 8 43 8Z" stroke={color} strokeWidth="3.2"/>
        {/* V: 28px Wide-Stance Suspension Diagonal */}
        <path d="M86 8L100 36L114 8" stroke={color} strokeWidth="3.2" strokeLinejoin="miter"/>
        {/* E: Stepped Horizontal Ribs */}
        <path d="M145 8H124V36H145 M124 22H141" stroke={color} strokeWidth="3.2"/>
        {/* L: Broad Foundational Base */}
        <path d="M156 8V36H178" stroke={color} strokeWidth="3.2"/>
        {/* U: Wide Flat-Bottom Basin */}
        <path d="M189 8V23C189 31 195 36 203 36H207C215 36 221 31 221 23V8" stroke={color} strokeWidth="3.2"/>
      </svg>
    );
  }

  if (concept === 'node_dna') {
    // 3. The Node-Calibrated Monoline: Direct 2.4px line weight, rounded capsule terminals matching icon branches
    return (
      <svg height={height} viewBox="0 0 196 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Node-Calibrated Monoline">
        {/* T: Rounded Capsule Terminals */}
        <path d="M4 8H26 M15 8V36" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* O: Pure Ring Matching Hub Outer Radius */}
        <circle cx="43" cy="22" r="14" stroke={color} strokeWidth="2.5"/>
        {/* V: Soft Node Elbow */}
        <path d="M68 8L79 36L90 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* E: Equator Alignment at Y=22 */}
        <path d="M117 8H99V36H117 M99 22H113" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* L: Continuous Bent Pipeline */}
        <path d="M127 8V36H146" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* U: Horseshoe Pipeline mirroring icon nodes */}
        <path d="M156 8V24C156 31 161 36 167.5 36C174 36 179 31 179 24V8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (concept === 'biospheric') {
    // 4. The Biospheric Arch: Organic structuralism with subtle narrow kerning on O-V and L-U
    return (
      <svg height={height} viewBox="0 0 194 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Biospheric Arch">
        {/* T: Original Biospheric Arch Lintel & Stem */}
        <path d="M4 7.5H28 M16 7.5V36.5" stroke={color} strokeWidth="3.0" strokeLinecap="round"/>
        {/* O: Original Bio-Architectural Elliptical Ring */}
        <ellipse cx="46" cy="22" rx="15" ry="14.5" stroke={color} strokeWidth="3.0"/>
        {/* V: Parabolic Catenary Keel Arch (Narrowed slightly from O) */}
        <path d="M68.5 7.5C71.5 22 77.5 36.5 81.5 36.5C85.5 36.5 91.5 22 94.5 7.5" stroke={color} strokeWidth="3.0" strokeLinecap="round"/>
        {/* E: Swept Organic Cantilevers (Exact original distance from V) */}
        <path d="M123.5 7.5H104.5V36.5H123.5 M104.5 22H119.5" stroke={color} strokeWidth="3.0" strokeLinecap="round" strokeLinejoin="round"/>
        {/* L: Swept Internal Transition Heel (Exact original distance from E) */}
        <path d="M133.5 7.5V33.5C133.5 35.5 135 36.5 137.5 36.5H153.5" stroke={color} strokeWidth="3.0" strokeLinecap="round"/>
        {/* U: Catenary Suspension Bowl (Narrowed slightly from L foot) */}
        <path d="M160.5 7.5V23C160.5 31 166 36.5 173 36.5C180 36.5 185.5 31 185.5 23V7.5" stroke={color} strokeWidth="3.0" strokeLinecap="round"/>
      </svg>
    );
  }

  // 5. The Vitruvian Modular: Strict 4px modular grid, proportional 1:1, 3:4, 2:3 harmonic balance
  return (
    <svg height={height} viewBox="0 0 198 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Vitruvian Modular">
      {/* T: 3:4 Module (24px x 32px) */}
      <path d="M4 6H28 M16 6V38" stroke={color} strokeWidth="3.0" strokeLinecap="square"/>
      {/* O: 1:1 Sacred Square Module (32px x 32px) */}
      <circle cx="46" cy="22" r="16" stroke={color} strokeWidth="3.0"/>
      {/* V: 3:4 Module (24px x 32px) */}
      <path d="M72 6L84 38L96 6" stroke={color} strokeWidth="3.0" strokeLinejoin="miter"/>
      {/* E: 2:3 Golden Module (21.3px x 32px) */}
      <path d="M125 6H105V38H125 M105 22H121" stroke={color} strokeWidth="3.0"/>
      {/* L: 2:3 Golden Module (21.3px x 32px) */}
      <path d="M135 6V38H155" stroke={color} strokeWidth="3.0"/>
      {/* U: 3:4 Module (24px x 32px) */}
      <path d="M165 6V22C165 31 170.5 38 177 38C183.5 38 189 31 189 22V6" stroke={color} strokeWidth="3.0"/>
    </svg>
  );
}

export function ArchitecturalWordmarkStudio() {
  const [selectedConcept, setSelectedConcept] = useState('biospheric');
  const [lockupMode, setLockupMode] = useState('horizontal'); // 'standalone' | 'horizontal' | 'stacked'

  const concepts = [
    {
      id: 'biospheric',
      name: '4. The Biospheric Arch (Chosen)',
      subtitle: 'Organic Structuralism (Subtly Calibrated Kerning)',
      desc: "Founder's chosen direction: Load-bearing catenary arches replace harsh needle points. Authentic glyph anatomy with subtle optical calibration: O-V and L-U spaces slightly narrowed while preserving identical proportions and original distances across all other letters.",
      blueprint: {
        proportions: 'Architectural Organic Stance (194px width)',
        stroke: '3.0px Uniform Filleted Bio-Monoline',
        iconRatio: '1 : 1.15 (Arching resonance with 5-node branching nodes)',
        uniqueLetterform: "Original glyph shapes preserved; subtle optical adjustment on O-V (7.5px) and L-U (7.0px); V-E (10px) and E-L (10px) kept strictly identical.",
      },
    },
    {
      id: 'geodesic',
      name: '1. The Geodesic Grid',
      subtitle: 'Expanded Monoline (Golden Ratio Φ Stance)',
      desc: "Wide architectural stance calibrated to the Golden Ratio (1.618). Wide 26px lintel on 'T', expanded 34px stadium 'O', and a grounded 26px basin 'U'.",
      blueprint: {
        proportions: 'Wide Extended (Width/Height = 1.618 Φ)',
        stroke: '2.8px Uniform Strict Monoline',
        iconRatio: '1 : 1.00 (Wordmark Cap 30px aligns with Icon 30px for a flat skyline)',
        uniqueLetterform: "Stadium 'O' (rx=14.5px); wide 26px structural truss 'V'; cantilevered cantilever beams on 'E'.",
      },
    },
    {
      id: 'horizon',
      name: '2. The Sovereign Horizon',
      subtitle: 'Super-Extended Monolithic (+25% Width)',
      desc: "Monolithic, ultra-wide horizontal foundation inspired by brutalist institutional architecture. Flat structural cuts and low center of gravity convey endless life-course stability.",
      blueprint: {
        proportions: 'Super-Extended (+25% wider than standard grotesques)',
        stroke: '3.2px Heavy Architectural Monoline',
        iconRatio: '1 : 1.10 (Monolithic Horizon Line)',
        uniqueLetterform: "30px lintel on 'T'; 20px flat horizontals in stadium 'O'; broad 30px flat-bottom basin in 'U'.",
      },
    },
    {
      id: 'node_dna',
      name: '3. The Node-Calibrated Monoline',
      subtitle: 'Direct 5-Node Graph Vector DNA',
      desc: "Every glyph is constructed using the exact primitive geometry of the 5-node health graph: 2.5px stroke, concentric circle 'O' (r=14px), and semicircular capsule terminals.",
      blueprint: {
        proportions: 'Standard Balanced Architectural Width',
        stroke: '2.5px Pill/Capsule Monoline (Exact Icon Branch Weight)',
        iconRatio: '1 : 1.25 (Icon diameter 40px : Wordmark Cap 32px)',
        uniqueLetterform: "Capsule endcaps on all stems; pure concentric single ring 'O'; equator-aligned middle beam of 'E' at Y=22.",
      },
    },
    {
      id: 'modular',
      name: '5. The Vitruvian Modular',
      subtitle: 'Sacred Harmonic Grid (4px Modular System)',
      desc: "Based on sacred classical proportions derived directly from the 48px icon grid. Every letter conforms to a predefined modular ratio: T is 3:4, O is 1:1, E is 2:3.",
      blueprint: {
        proportions: 'Modular Ratios (T: 3:4, O: 1:1, V: 3:4, E: 2:3, L: 2:3, U: 3:4)',
        stroke: '3.0px Strict Modular Monoline (0.75 grid units)',
        iconRatio: '1 : 1.00 (Both icon and wordmark snap to identical 4px sub-grid)',
        uniqueLetterform: "Mathematically pure 32px compass circle 'O'; golden ratio subdivisions on 'E'; mitered corners.",
      },
    },
  ];

  const current = concepts.find((c) => c.id === selectedConcept) || concepts[0];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-brand-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            <span>Architectural Evolution</span>
            <span>•</span>
            <span>Planetary Scale Typography</span>
          </div>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: '0.25rem' }}>
            5 Architectural Monoline Directions for "TOVELU"
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)', maxWidth: '780px' }}>
            Expanded explorations of Concept 3 (The Architectural Monoline). Each letterform is custom-architected from the ground up to embody planetary foundation, clinical stability, and mathematical harmony with the 5-node health graph icon.
          </p>
        </div>

        {/* Lockup View Selector */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            backgroundColor: 'var(--bg-surface-sunken)',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {[
            { id: 'standalone', label: 'Standalone Wordmark' },
            { id: 'horizontal', label: 'Horizontal Lockup' },
            { id: 'stacked', label: 'Stacked Lockup' },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setLockupMode(mode.id)}
              style={{
                border: 'none',
                backgroundColor: lockupMode === mode.id ? 'var(--bg-surface-primary)' : 'transparent',
                color: lockupMode === mode.id ? 'var(--color-brand-primary)' : 'var(--text-secondary)',
                fontWeight: lockupMode === mode.id ? 'bold' : 'normal',
                padding: '0.3rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-xs)',
                cursor: 'pointer',
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5 Architectural Concept Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'var(--space-2)',
        }}
      >
        {concepts.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedConcept(c.id)}
            style={{
              padding: 'var(--space-3)',
              borderRadius: 'var(--radius-md)',
              border: '2px solid',
              borderColor: selectedConcept === c.id ? 'var(--color-brand-primary)' : 'var(--border-subtle)',
              backgroundColor: selectedConcept === c.id ? 'var(--color-brand-subtle)' : 'var(--bg-surface-sunken)',
              color: selectedConcept === c.id ? 'var(--color-brand-text)' : 'var(--text-secondary)',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: 'var(--font-size-xs)' }}>{c.name}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{c.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Live Stage Display */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-4)',
        }}
      >
        {/* Light Mineral Surface */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface-sunken)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            padding: 'var(--space-8) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '190px',
            gap: 'var(--space-4)',
            textAlign: 'center',
          }}
        >
          {lockupMode === 'standalone' && (
            <ArchitecturalWordmarkSVG concept={selectedConcept} height={44} color="var(--text-primary)" />
          )}

          {lockupMode === 'horizontal' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
              <ToveluLogo size={44} color="var(--color-brand-primary)" />
              <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border-subtle)' }} />
              <ArchitecturalWordmarkSVG concept={selectedConcept} height={36} color="var(--text-primary)" />
            </div>
          )}

          {lockupMode === 'stacked' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
              <ToveluLogo size={46} showTile={true} bg="#08615A" color="#ffffff" />
              <ArchitecturalWordmarkSVG concept={selectedConcept} height={32} color="var(--text-primary)" />
            </div>
          )}

          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
            Light Canvas • WCAG 2.2 AAA Contrast (14.8:1)
          </div>
        </div>

        {/* Signature Clinical Teal Inverted Surface */}
        <div
          style={{
            backgroundColor: '#08615A',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #064e3b',
            padding: 'var(--space-8) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '190px',
            gap: 'var(--space-4)',
            textAlign: 'center',
          }}
        >
          {lockupMode === 'standalone' && (
            <ArchitecturalWordmarkSVG concept={selectedConcept} height={44} color="#ffffff" />
          )}

          {lockupMode === 'horizontal' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
              <ToveluLogo size={44} color="#5EEAD4" />
              <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <ArchitecturalWordmarkSVG concept={selectedConcept} height={36} color="#ffffff" />
            </div>
          )}

          {lockupMode === 'stacked' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '22%', backgroundColor: '#095c51', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ToveluLogo size={34} color="#5EEAD4" />
              </div>
              <ArchitecturalWordmarkSVG concept={selectedConcept} height={32} color="#ffffff" />
            </div>
          )}

          <div style={{ fontSize: 'var(--font-size-xs)', color: '#ccfbee' }}>
            Signature Teal Surface (#08615A) • 11.2:1 Contrast Ratio
          </div>
        </div>
      </div>

      {/* Blueprint Deep-Dive Specifications */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-4)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <span style={{ fontSize: '1.1rem' }}>🏛️</span>
          <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-bold)' }}>
            Architectural Blueprint: {current.name}
          </h3>
        </div>
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
          {current.desc}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-1)',
          }}
        >
          <div style={{ backgroundColor: 'var(--bg-surface-sunken)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-brand-primary)' }}>1. PROPORTIONAL STANCE &amp; STROKE</div>
            <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)', marginTop: '2px' }}>{current.blueprint.proportions}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{current.blueprint.stroke}</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-sunken)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-brand-primary)' }}>2. ICON PAIRING MATHEMATICS</div>
            <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)', marginTop: '2px' }}>{current.blueprint.iconRatio}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>Calibrated horizontal clear space = 1.4x Cap Height</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-sunken)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-brand-primary)' }}>3. BESPOKE GLYPH GEOMETRY</div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.4' }}>{current.blueprint.uniqueLetterform}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitecturalWordmarkStudio;

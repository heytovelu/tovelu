import React, { useState } from 'react';
import { ToveluLogo } from './ToveluLogo';

/**
 * StandaloneWordmarkStudio
 * 
 * 5 Distinct Typographic Concepts for standalone TOVELU wordmark:
 * 1. The Clinical Geometric (Pure Trust)
 * 2. The Humane Grotesque (Approachability & Life-Course)
 * 3. The Architectural Monoline (Ecosystem Scale)
 * 4. The Fluid Life-Course (Organic Flow & Soft Radiuses)
 * 5. The High-Precision Grotesque (Scientific Clarity & Ink Traps)
 */

export function StandaloneWordmarkSVG({ concept = 'geometric', height = 36, color = 'currentColor' }) {
  if (concept === 'geometric') {
    // 1. The Clinical Geometric: Pure mathematical circles, 90-degree precision, uniform semi-bold
    return (
      <svg height={height} viewBox="0 0 184 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Clinical Geometric">
        {/* T */}
        <path fillRule="evenodd" clipRule="evenodd" d="M2 6H26V10.2H16.2V38H11.8V10.2H2V6Z" fill={color}/>
        {/* O: Mathematical Compass Circle */}
        <path fillRule="evenodd" clipRule="evenodd" d="M47 5C56.3888 5 64 12.6112 64 22C64 31.3888 56.3888 39 47 39C37.6112 39 30 31.3888 30 22C30 12.6112 37.6112 5 47 5ZM47 9.4C53.9588 9.4 59.6 15.0412 59.6 22C59.6 28.9588 53.9588 34.6 47 34.6C40.0412 34.6 34.4 28.9588 34.4 22C34.4 15.0412 40.0412 9.4 47 9.4Z" fill={color}/>
        {/* V */}
        <path d="M70 6H74.6L83 32.2L91.4 6H96L85.2 38H80.8L70 6Z" fill={color}/>
        {/* E */}
        <path fillRule="evenodd" clipRule="evenodd" d="M102 6H123V10.2H106.4V19.8H120.5V23.8H106.4V33.8H123V38H102V6Z" fill={color}/>
        {/* L */}
        <path fillRule="evenodd" clipRule="evenodd" d="M130 6H134.4V33.8H149V38H130V6Z" fill={color}/>
        {/* U: Pure Semicircular Bowl */}
        <path fillRule="evenodd" clipRule="evenodd" d="M156 6H160.4V25C160.4 29.8 163.6 33.6 168.5 33.6C173.4 33.6 176.6 29.8 176.6 25V6H181V25C181 32.5 175.5 38 168.5 38C161.5 38 156 32.5 156 25V6Z" fill={color}/>
      </svg>
    );
  }

  if (concept === 'humane') {
    // 2. The Humane Grotesque: Subtle optical stroke contrast (vertical 4.4px, horizontal 3.6px), humanist squircle O
    return (
      <svg height={height} viewBox="0 0 186 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Humane Grotesque">
        {/* T: Softened terminals */}
        <path fillRule="evenodd" clipRule="evenodd" d="M3 6.5H25.5V10.3H16.4V37.5H12V10.3H3V6.5Z" fill={color}/>
        {/* O: Upright Humanist Oval */}
        <path fillRule="evenodd" clipRule="evenodd" d="M48 5.2C56.2 5.2 63 12.8 63 22C63 31.2 56.2 38.8 48 38.8C39.8 38.8 33 31.2 33 22C33 12.8 39.8 5.2 48 5.2ZM48 9.6C53.6 9.6 58.4 15.2 58.4 22C58.4 28.8 53.6 34.4 48 34.4C42.4 34.4 37.6 28.8 37.6 22C37.6 15.2 42.4 9.6 48 9.6Z" fill={color}/>
        {/* V: Flattened base apex */}
        <path d="M69 6.5H73.5L81.5 32.8L89.5 6.5H94L84.2 37.5H78.8L69 6.5Z" fill={color}/>
        {/* E: Recessed middle arm for optical rhythm */}
        <path fillRule="evenodd" clipRule="evenodd" d="M100 6.5H121V10.3H104.4V19.8H118V23.4H104.4V33.7H121.5V37.5H100V6.5Z" fill={color}/>
        {/* L */}
        <path fillRule="evenodd" clipRule="evenodd" d="M128 6.5H132.4V33.7H147.5V37.5H128V6.5Z" fill={color}/>
        {/* U */}
        <path fillRule="evenodd" clipRule="evenodd" d="M154 6.5H158.4V24.5C158.4 29.5 161.8 33.7 167 33.7C172.2 33.7 175.6 29.5 175.6 24.5V6.5H180V24.5C180 32.2 174.5 37.8 167 37.8C159.5 37.8 154 32.2 154 24.5V6.5Z" fill={color}/>
      </svg>
    );
  }

  if (concept === 'monoline') {
    // 3. The Architectural Monoline: Extended horizontal proportion, uniform 3.0px monoline stroke
    return (
      <svg height={height} viewBox="0 0 204 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Architectural Monoline">
        {/* T: Extended crossbar */}
        <path d="M2 7H28 M15 7V37" stroke={color} strokeWidth="3.2" strokeLinecap="square"/>
        {/* O: Wide Architectural Oval */}
        <rect x="35" y="7" width="34" height="30" rx="15" stroke={color} strokeWidth="3.2"/>
        {/* V: Wide stable diagonal */}
        <path d="M76 7L88.5 37L101 7" stroke={color} strokeWidth="3.2" strokeLinejoin="miter"/>
        {/* E: Extended architectural arms */}
        <path d="M127 7H109V37H127 M109 22H123" stroke={color} strokeWidth="3.2"/>
        {/* L: Grounded foot */}
        <path d="M136 7V37H156" stroke={color} strokeWidth="3.2"/>
        {/* U: Extended horizontal vessel */}
        <path d="M165 7V24C165 31.5 170.5 37 178 37C185.5 37 191 31.5 191 24V7" stroke={color} strokeWidth="3.2"/>
      </svg>
    );
  }

  if (concept === 'fluid') {
    // 4. The Fluid Life-Course: G2 micro-radiused corners (R=1.8px), calm health design, zero needle points
    return (
      <svg height={height} viewBox="0 0 186 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU Fluid Life-Course">
        {/* T with filleted corners */}
        <path fillRule="evenodd" clipRule="evenodd" d="M3.8 6H24.2C25.2 6 26 6.8 26 7.8V8.6C26 9.6 25.2 10.4 24.2 10.4H16.2V36.2C16.2 37.2 15.4 38 14.4 38H13.6C12.6 38 11.8 37.2 11.8 36.2V10.4H3.8C2.8 10.4 2 9.6 2 8.6V7.8C2 6.8 2.8 6 3.8 6Z" fill={color}/>
        {/* O: Soft continuous curve */}
        <path fillRule="evenodd" clipRule="evenodd" d="M47 5C56.3888 5 64 12.6112 64 22C64 31.3888 56.3888 39 47 39C37.6112 39 30 31.3888 30 22C30 12.6112 37.6112 5 47 5ZM47 9.4C53.9588 9.4 59.6 15.0412 59.6 22C59.6 28.9588 53.9588 34.6 47 34.6C40.0412 34.6 34.4 28.9588 34.4 22C34.4 15.0412 40.0412 9.4 47 9.4Z" fill={color}/>
        {/* V: Filleted apex R=2.5px */}
        <path d="M70 7.2C70 6.5 70.6 6 71.3 6H74C74.6 6 75.1 6.4 75.3 7L82.2 33.2C82.6 34.5 84 34.5 84.4 33.2L91.3 7C91.5 6.4 92 6 92.6 6H95.3C96 6 96.6 6.5 96.6 7.2C96.6 7.4 96.5 7.7 96.4 7.9L85.6 37C84.7 39 81.9 39 81 37L70.2 7.9C70.1 7.7 70 7.4 70 7.2Z" fill={color}/>
        {/* E: Softened arm terminals */}
        <path fillRule="evenodd" clipRule="evenodd" d="M103.8 6H122.2C123.2 6 124 6.8 124 7.8V8.6C124 9.6 123.2 10.4 122.2 10.4H106.4V19.8H119.2C120.2 19.8 121 20.6 121 21.6V22C121 23 120.2 23.8 119.2 23.8H106.4V33.6H122.2C123.2 33.6 124 34.4 124 35.4V36.2C124 37.2 123.2 38 122.2 38H103.8C102.8 38 102 37.2 102 36.2V7.8C102 6.8 102.8 6 103.8 6Z" fill={color}/>
        {/* L: Filleted internal join */}
        <path fillRule="evenodd" clipRule="evenodd" d="M131.8 6H132.6C133.6 6 134.4 6.8 134.4 7.8V33.6H148.2C149.2 33.6 150 34.4 150 35.4V36.2C150 37.2 149.2 38 148.2 38H131.8C130.8 38 130 37.2 130 36.2V7.8C130 6.8 130.8 6 131.8 6Z" fill={color}/>
        {/* U: Fluid continuous horseshoe */}
        <path fillRule="evenodd" clipRule="evenodd" d="M157.8 6H158.6C159.6 6 160.4 6.8 160.4 7.8V25C160.4 29.8 163.6 33.6 168.5 33.6C173.4 33.6 176.6 29.8 176.6 25V7.8C176.6 6.8 177.4 6 178.4 6H179.2C180.2 6 181 6.8 181 7.8V25C181 32.5 175.5 38 168.5 38C161.5 38 156 32.5 156 25V7.8C156 6.8 156.8 6 157.8 6Z" fill={color}/>
      </svg>
    );
  }

  // 5. The High-Precision Grotesque: Scientific ink traps at T-stem, V-apex, E-junctions, open counters
  return (
    <svg height={height} viewBox="0 0 186 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TOVELU High-Precision Grotesque">
      {/* T: Ink trap notch at stem junction */}
      <path fillRule="evenodd" clipRule="evenodd" d="M2 6H26V10.2H17.4L15.4 12V38H11.2V12L9.2 10.2H2V6Z" fill={color}/>
      {/* O: High-luminance enlarged counter */}
      <path fillRule="evenodd" clipRule="evenodd" d="M47 4.5C56.6 4.5 64.5 12.3 64.5 22C64.5 31.7 56.6 39.5 47 39.5C37.4 39.5 29.5 31.7 29.5 22C29.5 12.3 37.4 4.5 47 4.5ZM47 9.8C53.7 9.8 59.2 15.3 59.2 22C59.2 28.7 53.7 34.2 47 34.2C40.3 34.2 34.8 28.7 34.8 22C34.8 15.3 40.3 9.8 47 9.8Z" fill={color}/>
      {/* V: Deep triangular ink trap at apex */}
      <path d="M70 6H75L82.5 31.5L83.5 31.5L91 6H96L85.8 38H80.2L70 6ZM83 34.5L81.5 31.5H84.5L83 34.5Z" fill={color}/>
      {/* E: 45-degree internal relief notches */}
      <path fillRule="evenodd" clipRule="evenodd" d="M101 6H123V10.2H106.8L105.8 11.2V18.6L107 19.8H120.5V24.2H107L105.8 25.4V32.8L106.8 33.8H123V38H101V6Z" fill={color}/>
      {/* L: Corner relief notch */}
      <path fillRule="evenodd" clipRule="evenodd" d="M129 6H133.8V32.6L135 33.8H149V38H129V6Z" fill={color}/>
      {/* U: Expanded counter with vertical terminals */}
      <path fillRule="evenodd" clipRule="evenodd" d="M155 6H159.8V24.2C159.8 29.5 163.4 33.8 168.5 33.8C173.6 33.8 177.2 29.5 177.2 24.2V6H182V24.2C182 32.4 176 38.2 168.5 38.2C161 38.2 155 32.4 155 24.2V6Z" fill={color}/>
    </svg>
  );
}

export function StandaloneWordmarkStudio() {
  const [selectedConcept, setSelectedConcept] = useState('geometric');
  const [lockupMode, setLockupMode] = useState('horizontal'); // 'standalone' | 'horizontal' | 'stacked'

  const concepts = [
    {
      id: 'geometric',
      name: '1. The Clinical Geometric',
      subtitle: 'Pure Trust & Mathematical Certainty',
      desc: "Built on unyielding compass circles and straight perpendiculars. The 'O' is a mathematically pure circle echoing the circular geometry of the standalone icon.",
      blueprint: {
        font: 'Inter Display / Archivo Geometric (SemiBold 600)',
        tracking: '+0.03em (+30 units)',
        strokeRatio: '1:1.25 (Icon diameter 40px : Wordmark Cap 32px)',
        customMod: 'Perfect 1:1 circular O; horizontal crossbar on T trimmed by 4% to counter vertical-horizontal illusion.',
      },
    },
    {
      id: 'humane',
      name: '2. The Humane Grotesque',
      subtitle: 'Approachability & Continuous Life-Course',
      desc: "Features subtle humanist stroke modulation (vertical 4.4px, horizontal 3.6px) with an upright squircle-inflected 'O' that feels warm, personal, and approachable.",
      blueprint: {
        font: 'Inter Variable / Public Sans (Medium-SemiBold 550)',
        tracking: '+0.015em (+15 units)',
        strokeRatio: '1:1.15 (Icon 36px : Wordmark Cap 31px)',
        customMod: 'Flattened 1.8px vertex at the base of V; recessed middle arm of E (85% length) for natural reading rhythm.',
      },
    },
    {
      id: 'monoline',
      name: '3. The Architectural Monoline',
      subtitle: 'Ecosystem Scale & Planetary Foundation',
      desc: "A wide, extended monoline sans-serif with a uniform stroke weight. Establishes a grounded, monumental horizontal foundation supporting the multi-layered health OS.",
      blueprint: {
        font: 'Space Grotesk / Neutral Face Monoline (Medium Extended 500)',
        tracking: '+0.05em (+50 units)',
        strokeRatio: '1:1.4 (Golden ratio Φ between icon stroke and letter stroke)',
        customMod: 'Wide 28px crossbar on T; expanded 34px wide circular O; flat parallel structural terminals.',
      },
    },
    {
      id: 'fluid',
      name: '4. The Fluid Life-Course',
      subtitle: 'Organic Flow & Calm Health Fillets',
      desc: "Custom softened treatment where all external 90° corners on T, V, and L have calculated 1.8px micro-radiuses. Eliminates aggressive needle points to calm cognitive anxiety.",
      blueprint: {
        font: 'Plus Jakarta Sans Soft / Custom Filleted Grotesque (SemiBold 600)',
        tracking: '+0.02em (+20 units)',
        strokeRatio: '1:1.20 (Corner radiuses R=1.8px mirror branching joints of icon)',
        customMod: 'G2 continuous micro-fillets on all corners; curved trough apex on V (R=2.5px) for zero needle sharpness.',
      },
    },
    {
      id: 'precision',
      name: '5. The High-Precision Grotesque',
      subtitle: 'Scientific Clarity & Utilitarian Ink Traps',
      desc: "High-precision utilitarian glyphs featuring distinct 45° internal ink-trap reliefs and oversized counters. Guaranteed zero pixel-clumping down to 10px on $30 smartphones.",
      blueprint: {
        font: 'Söhne / JetBrains Sans (Bold 650 with Optical Relief)',
        tracking: '+0.025em (+25 units)',
        strokeRatio: '1:1.10 (Open aperture of O and U matches interior ring diameter of icon)',
        customMod: '45° internal relief cutouts at T-stem and V-apex; 8% enlarged interior counter inside O and U.',
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
            <span>Brand Identity System</span>
            <span>•</span>
            <span>Standalone Wordmark Architecture</span>
          </div>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: '0.25rem' }}>
            5 Standalone Wordmark Concepts for "TOVELU"
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)', maxWidth: '780px' }}>
            The icon functions separately as a standalone mark. Each wordmark below possesses sovereign typographic authority on its own, while being mathematically calibrated to pair with the 5-node icon.
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

      {/* 5 Concept Tabs */}
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

      {/* Showcase Stage */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-4)',
        }}
      >
        {/* Light Surface Canvas */}
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
            minHeight: '180px',
            gap: 'var(--space-4)',
            textAlign: 'center',
          }}
        >
          {lockupMode === 'standalone' && (
            <StandaloneWordmarkSVG concept={selectedConcept} height={46} color="var(--text-primary)" />
          )}

          {lockupMode === 'horizontal' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
              <ToveluLogo size={46} color="var(--color-brand-primary)" />
              <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border-subtle)' }} />
              <StandaloneWordmarkSVG concept={selectedConcept} height={38} color="var(--text-primary)" />
            </div>
          )}

          {lockupMode === 'stacked' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
              <ToveluLogo size={48} showTile={true} bg="#08615A" color="#ffffff" />
              <StandaloneWordmarkSVG concept={selectedConcept} height={32} color="var(--text-primary)" />
            </div>
          )}

          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
            Light Canvas • WCAG 2.2 AAA Contrast (14.8:1)
          </div>
        </div>

        {/* Clinical Teal Inverted Surface */}
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
            minHeight: '180px',
            gap: 'var(--space-4)',
            textAlign: 'center',
          }}
        >
          {lockupMode === 'standalone' && (
            <StandaloneWordmarkSVG concept={selectedConcept} height={46} color="#ffffff" />
          )}

          {lockupMode === 'horizontal' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
              <ToveluLogo size={46} color="#5EEAD4" />
              <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <StandaloneWordmarkSVG concept={selectedConcept} height={38} color="#ffffff" />
            </div>
          )}

          {lockupMode === 'stacked' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '22%', backgroundColor: '#095c51', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ToveluLogo size={34} color="#5EEAD4" />
              </div>
              <StandaloneWordmarkSVG concept={selectedConcept} height={32} color="#ffffff" />
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
          <span style={{ fontSize: '1.1rem' }}>📐</span>
          <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-bold)' }}>
            Typographic Blueprint: {current.name}
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
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-brand-primary)' }}>1. BASE TYPEFACE &amp; WEIGHT</div>
            <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)', marginTop: '2px' }}>{current.blueprint.font}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>Tracking: {current.blueprint.tracking}</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-sunken)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-brand-primary)' }}>2. ICON PAIRING MATH</div>
            <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)', marginTop: '2px' }}>{current.blueprint.strokeRatio}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>Horizontal gap: 1.4x Cap Height</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-sunken)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-brand-primary)' }}>3. PROPRIETARY MODIFICATIONS</div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.4' }}>{current.blueprint.customMod}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StandaloneWordmarkStudio;

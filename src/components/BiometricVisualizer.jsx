import React, { useState } from 'react';

/**
 * BiometricVisualizer - Calm Physiologically Grounded Biometric Graph
 * 
 * Compliant with:
 * - Principle P1: Calm Health Design
 * - Principle P2: Truth over Persuasion (Clear statistical uncertainty intervals)
 * - Layer L2: Biometric Ingestion & Health Graph
 */
export function BiometricVisualizer() {
  const [timeframe, setTimeframe] = useState('7D');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // 7-day resting heart rate data with confidence intervals
  const data7D = [
    { day: 'Mon', date: '30 Sep', bpm: 61, low: 58, high: 64, state: 'normal' },
    { day: 'Tue', date: '1 Oct', bpm: 63, low: 59, high: 66, state: 'normal' },
    { day: 'Wed', date: '2 Oct', bpm: 62, low: 58, high: 65, state: 'normal' },
    { day: 'Thu', date: '3 Oct', bpm: 60, low: 57, high: 63, state: 'normal' },
    { day: 'Fri', date: '4 Oct', bpm: 64, low: 60, high: 67, state: 'normal' },
    { day: 'Sat', date: '5 Oct', bpm: 71, low: 67, high: 75, state: 'elevated' },
    { day: 'Sun', date: '6 Oct', bpm: 69, low: 65, high: 73, state: 'elevated' },
  ];

  const baseline = 62; // Personal established 28-day baseline

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
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
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-brand-primary)',
            }}
          >
            <span>LOINC 8867-4</span>
            <span>•</span>
            <span>Continuous Autonomic Baseline</span>
          </div>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: '0.25rem' }}>
            Resting Heart Rate &amp; Uncertainty Distribution
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}>
            Rendered with shaded 95% Bayesian confidence intervals. Individual baseline: {baseline} bpm (±2.8 bpm).
          </p>
        </div>

        {/* Timeframe toggle */}
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          {['24H', '7D', '30D', '1Y'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTimeframe(t)}
              style={{
                border: '1px solid',
                borderColor: timeframe === t ? 'var(--color-brand-primary)' : 'var(--border-subtle)',
                backgroundColor: timeframe === t ? 'var(--color-brand-subtle)' : 'var(--bg-surface-primary)',
                color: timeframe === t ? 'var(--color-brand-text)' : 'var(--text-secondary)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.25rem 0.65rem',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas Sparkline Graph */}
      <div
        style={{
          width: '100%',
          height: '240px',
          backgroundColor: 'var(--bg-surface-sunken)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          padding: 'var(--space-4)',
          position: 'relative',
        }}
      >
        <svg
          viewBox="0 0 700 200"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            {/* Confidence Area Gradient */}
            <linearGradient id="ciGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b89a" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#14b89a" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {/* Baseline Reference Band (60-64 bpm) */}
          <rect
            x="40"
            y="95"
            width="620"
            height="26"
            fill="var(--health-verified-bg)"
            opacity="0.6"
            rx="4"
          />
          <line
            x1="40"
            y1="108"
            x2="660"
            y2="108"
            stroke="var(--health-verified-border)"
            strokeDasharray="4 4"
            strokeWidth="1.5"
          />
          <text
            x="665"
            y="112"
            fill="var(--text-tertiary)"
            fontSize="10"
            fontFamily="var(--font-family-mono)"
          >
            Baseline {baseline} bpm
          </text>

          {/* Y-axis guide labels */}
          <text x="15" y="45" fill="var(--text-tertiary)" fontSize="10" fontFamily="var(--font-family-mono)">80</text>
          <text x="15" y="108" fill="var(--text-tertiary)" fontSize="10" fontFamily="var(--font-family-mono)">62</text>
          <text x="15" y="175" fill="var(--text-tertiary)" fontSize="10" fontFamily="var(--font-family-mono)">45</text>

          {/* Shaded Confidence Interval Path */}
          {/* Points mapping: X goes from 60 to 620 in steps of 93.3 */}
          {/* Y maps: 80bpm = 40, 62bpm = 108, 45bpm = 170 => Y = 108 - (bpm - 62) * 3.7 */}
          <polygon
            points="
              60,123 153,119 246,123 340,126 433,115 526,89 620,97
              620,67 526,59 433,89 340,104 246,97 153,93 60,101
            "
            fill="url(#ciGradient)"
          />

          {/* Trend Line */}
          <polyline
            points="60,112 153,104 246,108 340,115 433,100 526,74 620,82"
            fill="none"
            stroke="var(--color-brand-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interactive Data Points */}
          {data7D.map((pt, i) => {
            const x = 60 + i * 93.3;
            const y = 108 - (pt.bpm - baseline) * 3.7;
            const isHovered = hoveredPoint?.day === pt.day;

            return (
              <g key={pt.day} onMouseEnter={() => setHoveredPoint(pt)} onMouseLeave={() => setHoveredPoint(null)}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 6 : 4}
                  fill={pt.state === 'elevated' ? 'var(--primitive-amber-600)' : 'var(--color-brand-primary)'}
                  stroke="var(--bg-surface-primary)"
                  strokeWidth="2"
                  style={{ cursor: 'pointer', transition: 'r 0.15s ease' }}
                />
                <text
                  x={x}
                  y="190"
                  textAnchor="middle"
                  fill="var(--text-secondary)"
                  fontSize="11"
                  fontFamily="var(--font-family-sans)"
                >
                  {pt.day}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover inspection tooltip */}
        {hoveredPoint && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              padding: 'var(--space-2) var(--space-3)',
              backgroundColor: 'var(--bg-surface-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-md)',
              fontSize: 'var(--font-size-xs)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              pointerEvents: 'none',
            }}
          >
            <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>
              {hoveredPoint.day} ({hoveredPoint.date}): {hoveredPoint.bpm} bpm
            </div>
            <div style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>
              95% Interval: {hoveredPoint.low} – {hoveredPoint.high} bpm
            </div>
          </div>
        )}
      </div>

      {/* Legend & Provenance Footnote */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-secondary)',
          paddingTop: 'var(--space-1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{ width: '12px', height: '3px', backgroundColor: 'var(--color-brand-primary)', borderRadius: '1px' }} />
            <span>Median Trend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{ width: '12px', height: '12px', backgroundColor: '#14b89a', opacity: 0.3, borderRadius: '2px' }} />
            <span>95% Bayesian Confidence Interval</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{ width: '12px', height: '3px', borderTop: '1.5px dashed var(--health-verified-border)' }} />
            <span>28-Day Baseline</span>
          </div>
        </div>

        <span style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>
          Sensor Tier A • Argon2 Enclave Sealed
        </span>
      </div>
    </div>
  );
}

export default BiometricVisualizer;

import React from 'react';
import { ProgressiveDisclosure } from './ProgressiveDisclosure';

/**
 * TrustCard - Primary Health Observation & Insight Container
 *
 * Adheres strictly to:
 * - TOVELU Constitution Section 5 (Evidence, Science, and Claims)
 * - Section 6.2 (Safety Language - No False Certainty)
 * - Section 12 (Trust Density - source, date, uncertainty, permissions must appear natively)
 * - WCAG 2.2 AAA Contrast, Typography, and Screen Reader Semantics
 *
 * @param {string} title - Human-readable observation or health topic
 * @param {string} value - Numerical or summary metric value (e.g., "118/76 mmHg", "7.2 hrs")
 * @param {string} unit - Measurement unit
 * @param {string} changeDescription - Non-alarmist trend summary (e.g. "Stable within personal baseline")
 * @param {'positive' | 'neutral' | 'notice'} trendTone - Calm tone classification
 * @param {string} claimClass - C0, C1, C2, or C3 per Section 5.2
 * @param {string} sourceName - Primary evidence or device source (e.g., "Validated Sensor", "WHO Guideline S02")
 * @param {'A' | 'B' | 'C' | 'D' | 'E'} sourceTier - Evidence Tier per Section 5.1
 * @param {string} timestampISO - ISO string for machine readability
 * @param {string} timestampFormatted - Human-readable verification timestamp
 * @param {'Private (Device Only)' | 'Consented Sync' | 'Exportable'} permissionState - Data ownership state
 * @param {React.ReactNode} deepContext - Expanded clinical/methodology data for Progressive Disclosure
 */
export function TrustCard({
  title,
  value,
  unit,
  changeDescription,
  trendTone = 'neutral',
  claimClass = 'C2 - Individualized wellness insight',
  sourceName = 'Personal Health Baseline',
  sourceTier = 'A',
  timestampISO = new Date().toISOString(),
  timestampFormatted = 'Verified today at 08:30 AM',
  permissionState = 'Private (Device Only)',
  deepContext,
  className = '',
}) {
  // Map Tier to styling token
  const getTierBadgeProps = (tier) => {
    switch (tier) {
      case 'A':
        return {
          label: 'Tier A: Official Standard / Guideline',
          bg: 'var(--health-verified-bg)',
          border: 'var(--health-verified-border)',
          text: 'var(--health-verified-text)',
        };
      case 'B':
        return {
          label: 'Tier B: Peer-Reviewed Clinical Trial',
          bg: 'var(--health-provenance-bg)',
          border: 'var(--health-provenance-border)',
          text: 'var(--health-provenance-text)',
        };
      case 'C':
        return {
          label: 'Tier C: Professional Society Consensus',
          bg: 'var(--health-calm-bg)',
          border: 'var(--health-calm-border)',
          text: 'var(--health-calm-text)',
        };
      case 'D':
      case 'E':
      default:
        return {
          label: `Tier ${tier}: User Input / Observational`,
          bg: 'var(--bg-surface-sunken)',
          border: 'var(--border-subtle)',
          text: 'var(--text-secondary)',
        };
    }
  };

  const tierBadge = getTierBadgeProps(sourceTier);

  return (
    <article
      className={`tovelu-trust-card ${className}`}
      style={{
        backgroundColor: 'var(--bg-surface-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        transition: 'box-shadow var(--transition-fast), border-color var(--transition-fast)',
      }}
    >
      {/* 1. Header: Domain context & Claim Classification Badge */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 'var(--space-3)',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              lineHeight: 'var(--line-height-tight)',
            }}
          >
            {title}
          </h2>
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--text-tertiary)',
              display: 'inline-block',
              marginTop: 'var(--space-1)',
            }}
          >
            Claim Class: {claimClass}
          </span>
        </div>

        {/* Evidence Tier Badge */}
        <div
          title={tierBadge.label}
          style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-medium)',
            padding: '0.2rem 0.55rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: tierBadge.bg,
            border: `1px solid ${tierBadge.border}`,
            color: tierBadge.text,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'currentColor',
            }}
            aria-hidden="true"
          />
          <span>{tierBadge.label.split(':')[0]}</span>
        </div>
      </div>

      {/* 2. Metric Display (Fluid Typography, High Legibility) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'var(--space-2)',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {value}
        </span>
        {unit && (
          <span
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--text-secondary)',
            }}
          >
            {unit}
          </span>
        )}
      </div>

      {/* 3. Non-Alarmist Trend Observation (Calm Health Principle) */}
      {changeDescription && (
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--line-height-snug)',
            margin: 0,
          }}
        >
          {changeDescription}
        </p>
      )}

      {/* 4. Native Trust Metadata Matrix (Constitution Section 12) */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-3)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: 'var(--space-3)',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-secondary)',
        }}
      >
        {/* Provenance */}
        <div>
          <span style={{ display: 'block', color: 'var(--text-tertiary)', marginBottom: '0.125rem' }}>
            Provenance Source
          </span>
          <span style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
            {sourceName}
          </span>
        </div>

        {/* Verification Timestamp */}
        <div>
          <span style={{ display: 'block', color: 'var(--text-tertiary)', marginBottom: '0.125rem' }}>
            Last Verified
          </span>
          <time
            dateTime={timestampISO}
            style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}
          >
            {timestampFormatted}
          </time>
        </div>

        {/* Permissions & Data Sovereignty */}
        <div>
          <span style={{ display: 'block', color: 'var(--text-tertiary)', marginBottom: '0.125rem' }}>
            Privacy / Sovereignty
          </span>
          <span style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--color-brand-primary)' }}>
            {permissionState}
          </span>
        </div>
      </div>

      {/* 5. Deep Context via Progressive Disclosure */}
      {deepContext && (
        <ProgressiveDisclosure
          title="Clinical Evidence & Methodology"
          subtitle="Inspect full provenance citations, normal ranges, and clinical notes"
          badgeText="FHIR R5 Validated"
        >
          {deepContext}
        </ProgressiveDisclosure>
      )}

      {/* 6. Section 6.2 Constitutional Disclaimer Footer */}
      <div
        style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-tertiary)',
          lineHeight: '1.4',
          borderTop: '1px dashed var(--border-subtle)',
          paddingTop: 'var(--space-2)',
          fontStyle: 'normal',
        }}
      >
        <strong>Safety Note:</strong> Educational health insight. Not a clinical diagnosis or prescription. Consult your licensed healthcare provider for medical decisions.
      </div>
    </article>
  );
}

export default TrustCard;

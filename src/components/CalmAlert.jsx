import React, { useState } from 'react';

/**
 * CalmAlert - Constitutional Non-Alarmist Health Notification
 * 
 * Replaces conventional panic-inducing emergency UI with calm, 
 * scientifically grounded, and respectful health guidance.
 * 
 * @param {string} severity - 'calm' | 'observational' | 'clinical'
 * @param {string} title - Plain-language clinical observation
 * @param {string} message - Factual context without catastrophic framing
 * @param {string} recommendation - Concrete, actionable step
 * @param {string} claimClass - C0 | C1 | C2 | C3 | C4
 * @param {string} evidenceTier - A | B | C | D | E
 */
export function CalmAlert({
  severity = 'observational',
  title = 'Elevated Resting Heart Rate Trend Detected',
  message = 'Your 3-day resting heart rate average is 74 bpm, which is 12 bpm above your established personal baseline of 62 bpm. This variation is commonly associated with benign factors such as dehydration, lack of sleep, early immune activation, or acute life stress.',
  recommendation = 'Ensure adequate hydration and prioritize 8 hours of rest tonight. If accompanied by shortness of breath or dizziness, seek clinical consultation.',
  claimClass = 'C3 - Clinical Triage Guidance',
  evidenceTier = 'Tier B (Systematic Meta-Analysis)',
  certaintyInterval = '95% CI [71.2 - 76.8 bpm]',
  onDismiss,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Map severity to calm constitutional tokens
  const styles = {
    calm: {
      bg: 'var(--health-verified-bg)',
      border: 'var(--health-verified-border)',
      text: 'var(--health-verified-text)',
      icon: '🌿',
      badge: 'Steady State',
    },
    observational: {
      bg: 'var(--health-notice-bg)',
      border: 'var(--health-notice-border)',
      text: 'var(--health-notice-text)',
      icon: '💡',
      badge: 'Physiological Variation',
    },
    clinical: {
      bg: 'var(--health-calm-bg)',
      border: 'var(--health-calm-border)',
      text: 'var(--health-calm-text)',
      icon: '🩺',
      badge: 'Clinical Observation',
    },
  }[severity] || styles.observational;

  return (
    <aside
      role="region"
      aria-label={title}
      style={{
        backgroundColor: styles.bg,
        border: `1px solid ${styles.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        transition: 'all var(--transition-base)',
      }}
    >
      {/* Top Banner Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: '1.4rem' }} aria-hidden="true">{styles.icon}</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 'var(--font-weight-bold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: styles.text,
                }}
              >
                {styles.badge}
              </span>
              <span style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}>•</span>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-family-mono)' }}>
                {claimClass}
              </span>
            </div>
            <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginTop: '0.15rem' }}>
              {title}
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <span
            style={{
              fontSize: '11px',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-surface-primary)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-family-mono)',
            }}
          >
            {evidenceTier}
          </span>
          {onDismiss && (
            <button
              type="button"
              onClick={onDismiss}
              aria-label="Acknowledge observation"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-sm)',
                padding: 'var(--space-1)',
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Narrative Message */}
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-primary)', lineHeight: '1.55' }}>
        {message}
      </p>

      {/* Actionable Guidance */}
      <div
        style={{
          backgroundColor: 'var(--bg-surface-primary)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-3) var(--space-4)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-1)',
        }}
      >
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Calm Action Guidance
        </span>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
          {recommendation}
        </span>
      </div>

      {/* Uncertainty & Evidence Expandable */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-1)' }}>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-brand-primary)',
            fontWeight: 'var(--font-weight-medium)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
          }}
        >
          <span>{isExpanded ? '▼ Hide Uncertainty Bounds' : '▶ Inspect Statistical Confidence & Bounds'}</span>
        </button>

        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>
          Constitutional Principle P2 (Truth over Persuasion)
        </span>
      </div>

      {isExpanded && (
        <div
          style={{
            marginTop: 'var(--space-2)',
            padding: 'var(--space-3)',
            backgroundColor: 'var(--bg-surface-sunken)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}
        >
          <div>
            <strong>Statistical Interval:</strong> <code style={{ fontFamily: 'var(--font-family-mono)' }}>{certaintyInterval}</code>
          </div>
          <div>
            <strong>Constitutional Limit:</strong> This observation does not constitute medical diagnosis or prescribe clinical interventions. No algorithmic certainty is claimed beyond calibrated sensors.
          </div>
        </div>
      )}
    </aside>
  );
}

export default CalmAlert;

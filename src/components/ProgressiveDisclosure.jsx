import React, { useId, useState } from 'react';

/**
 * ProgressiveDisclosure - Collapsible Accessible Container for Deep Clinical Context
 *
 * Adheres to:
 * - TOVELU Constitution Section 12 (Progressive Disclosure):
 *   "Beginners see the simplest safe path; advanced users can open deeper details."
 * - WCAG 2.2 AAA Accessibility:
 *   - Semantic button with aria-expanded & aria-controls
 *   - Minimum 44x44px touch target on interactive header
 *   - Full keyboard navigation (Enter / Space activation)
 *   - Respects prefers-reduced-motion
 *
 * @param {string} title - Primary headline visible by default
 * @param {string} subtitle - Optional short context line
 * @param {string} badgeText - Optional badge (e.g., "Clinical Evidence", "Methodology")
 * @param {boolean} defaultOpen - Initial expanded state
 * @param {React.ReactNode} children - Deep clinical context, references, or raw data
 */
export function ProgressiveDisclosure({
  title,
  subtitle,
  badgeText,
  defaultOpen = false,
  children,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const headerId = useId();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`tovelu-disclosure ${className}`}
      style={{
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--bg-surface-elevated)',
        overflow: 'hidden',
        transition: 'border-color var(--transition-fast), background-color var(--transition-fast)',
      }}
    >
      <h3>
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={toggle}
          style={{
            width: '100%',
            minHeight: 'var(--min-touch-target)',
            padding: 'var(--space-3) var(--space-4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-3)',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-family-sans)',
            textAlign: 'left',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)',
                }}
              >
                {title}
              </span>
              {badgeText && (
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    padding: '0.125rem 0.5rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--health-provenance-bg)',
                    color: 'var(--health-provenance-text)',
                    border: '1px solid var(--health-provenance-border)',
                  }}
                >
                  {badgeText}
                </span>
              )}
            </div>
            {subtitle && (
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-secondary)',
                }}
              >
                {subtitle}
              </span>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '24px',
              minHeight: '24px',
              color: 'var(--text-tertiary)',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform var(--transition-base)',
            }}
            aria-hidden="true"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>
      </h3>

      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={headerId}
          style={{
            padding: 'var(--space-4)',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-sunken)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--line-height-normal)',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default ProgressiveDisclosure;

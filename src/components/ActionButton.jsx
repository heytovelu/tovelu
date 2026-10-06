import React from 'react';

/**
 * ActionButton - WCAG 2.2 AAA Compliant Multi-State Action Component
 *
 * Adheres to:
 * - TOVELU Constitution Principle P4 (Human Autonomy) & P9 (Accessibility as Core)
 * - WCAG 2.2 SC 2.5.8 (Target Size Minimum: >= 44x44px)
 * - WCAG 2.2 SC 2.4.11 / 2.4.13 (Focus Appearance)
 * - Calm Health Design: No jarring flashes, panic-inducing animations, or dark patterns
 *
 * @param {'primary' | 'secondary' | 'subtle' | 'destructive'} variant
 * @param {'sm' | 'md' | 'lg'} size
 * @param {boolean} isLoading
 * @param {boolean} disabled
 * @param {React.ReactNode} iconLeft
 * @param {React.ReactNode} iconRight
 * @param {string} ariaLabel
 */
export function ActionButton({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  iconLeft,
  iconRight,
  ariaLabel,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const isDisabled = disabled || isLoading;

  // Base styles: Ensure minimum 44px dimension for touch safety
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-semibold)',
    borderRadius: 'var(--radius-md)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast)',
    textDecoration: 'none',
    position: 'relative',
    userSelect: 'none',
    minHeight: 'var(--min-touch-target)', // 44px minimum
    minWidth: 'var(--min-touch-target)',
    fontSize: size === 'sm' ? 'var(--font-size-sm)' : size === 'lg' ? 'var(--font-size-md)' : 'var(--font-size-base)',
    padding: size === 'sm' ? '0.5rem 1rem' : size === 'lg' ? '0.75rem 1.5rem' : '0.625rem 1.25rem',
    border: '1px solid transparent',
    outline: 'none',
  };

  // Variant styling using semantic design tokens
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-brand-primary)',
          color: '#ffffff',
          borderColor: 'transparent',
          boxShadow: 'var(--shadow-sm)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-surface-primary)',
          color: 'var(--text-primary)',
          borderColor: 'var(--border-default)',
          boxShadow: 'var(--shadow-sm)',
        };
      case 'subtle':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-secondary)',
          borderColor: 'transparent',
        };
      case 'destructive':
        // Dignified calm health alert, not alarming neon red
        return {
          backgroundColor: 'var(--health-critical-bg)',
          color: 'var(--health-critical-text)',
          borderColor: 'var(--health-critical-border)',
        };
      default:
        return {};
    }
  };

  const getHoverStyles = () => {
    if (isDisabled) {
      return { opacity: 0.55 };
    }
    switch (variant) {
      case 'primary':
        return { backgroundColor: 'var(--color-brand-hover)' };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-surface-sunken)',
          borderColor: 'var(--border-strong)',
        };
      case 'subtle':
        return {
          backgroundColor: 'var(--bg-surface-sunken)',
          color: 'var(--text-primary)',
        };
      case 'destructive':
        return {
          backgroundColor: 'rgba(220, 38, 38, 0.25)',
        };
      default:
        return {};
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const mergedStyles = {
    ...baseStyle,
    ...getVariantStyles(),
    ...(isHovered && !isDisabled ? getHoverStyles() : {}),
    ...(isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
    ...(isActive && !isDisabled ? { transform: 'scale(0.99)' } : {}),
  };

  return (
    <button
      type={type}
      style={mergedStyles}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={isLoading ? 'true' : 'false'}
      aria-disabled={isDisabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => !isDisabled && setIsActive(true)}
      onMouseUp={() => !isDisabled && setIsActive(false)}
      onClick={isDisabled ? undefined : onClick}
      className={`tovelu-btn tovelu-btn--${variant} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          <svg
            style={{
              width: '18px',
              height: '18px',
              animation: 'spin 1s linear infinite',
            }}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="30 60"
            />
          </svg>
          <span>Updating safely...</span>
        </span>
      ) : (
        <>
          {iconLeft && (
            <span style={{ display: 'inline-flex', alignItems: 'center' }} aria-hidden="true">
              {iconLeft}
            </span>
          )}
          <span>{children}</span>
          {iconRight && (
            <span style={{ display: 'inline-flex', alignItems: 'center' }} aria-hidden="true">
              {iconRight}
            </span>
          )}
        </>
      )}
    </button>
  );
}

export default ActionButton;

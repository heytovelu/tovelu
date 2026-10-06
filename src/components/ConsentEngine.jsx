import React, { useState } from 'react';
import { ActionButton } from './ActionButton';

/**
 * ConsentEngine - Interactive Granular Data Sovereignty Controller
 * 
 * Compliant with TOVELU Constitution:
 * - Layer L1: Human Sovereignty & Consent Engine
 * - Principle P4: Human Autonomy (Zero Dark Patterns, 1-Click Revocability)
 * - Principle P5: Privacy by Design (Argon2 / AES-256-GCM Zero-Knowledge)
 */
export function ConsentEngine() {
  const [consents, setConsents] = useState([
    {
      id: 'ppg_sensor',
      name: 'Continuous PPG Heart Sensor',
      stream: 'Biometric Telemetry (1 Hz)',
      standard: 'LOINC 8867-4',
      storage: 'Encrypted On-Device Only',
      granted: true,
      lastSync: 'Active (Local)',
      accessCount: 1420,
    },
    {
      id: 'sleep_actigraphy',
      name: 'Sleep Architecture & Circadian Model',
      stream: 'Derived Biometrics',
      standard: 'FHIR R5 Observation',
      storage: 'Encrypted On-Device Only',
      granted: true,
      lastSync: '6 hours ago',
      accessCount: 48,
    },
    {
      id: 'lab_hie',
      name: 'Clinical Lab Panels (CAP/CLIA)',
      stream: 'Diagnostic Records',
      standard: 'SMART on FHIR v2',
      storage: 'Zero-Knowledge Vault',
      granted: true,
      lastSync: '1 Oct 2026',
      accessCount: 3,
    },
    {
      id: 'genomic_profile',
      name: 'Genomic Variants & Pharmacogenomics',
      stream: 'VCF Callset (GRCh38)',
      standard: 'GA4GH Passports',
      storage: 'Cold Storage (Hardware Key)',
      granted: false,
      lastSync: 'Never Shared',
      accessCount: 0,
    },
    {
      id: 'telehealth_provider',
      name: 'Emergency Clinician Triage Portal',
      stream: 'Summary Health Record',
      standard: 'IPS (International Patient Summary)',
      storage: 'End-to-End Encrypted Sync',
      granted: false,
      lastSync: 'Disabled by User',
      accessCount: 0,
    },
  ]);

  const [notification, setNotification] = useState('');

  const toggleConsent = (id) => {
    setConsents((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newState = !item.granted;
          setNotification(
            newState
              ? `Consent granted for "${item.name}". Stream active in local enclave.`
              : `Consent revoked for "${item.name}". All inbound/outbound sync halted instantly.`
          );
          return { ...item, granted: newState };
        }
        return item;
      })
    );
  };

  const handleRevokeAll = () => {
    setConsents((prev) => prev.map((item) => ({ ...item, granted: false })));
    setNotification('Constitutional Emergency Revocation triggered: All external & local stream consents revoked.');
  };

  const handleGrantDefault = () => {
    setConsents((prev) =>
      prev.map((item, idx) => ({ ...item, granted: idx < 3 }))
    );
    setNotification('Restored Sovereign Baseline (On-device sensors active, zero external syndication).');
  };

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
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-brand-primary)',
            }}
          >
            <span>Layer L1</span>
            <span>•</span>
            <span>Human Sovereignty Engine</span>
          </div>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: '0.25rem' }}>
            Data Sovereignty &amp; Granular Consent Vault
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)', maxWidth: '780px' }}>
            Under TOVELU Principle P4 and P5, health data is sovereign to the individual. Consent is affirmative, per-stream, and can be terminated instantaneously without friction or penalty.
          </p>
        </div>

        {/* Cryptographic Security Badge */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-1)',
            padding: 'var(--space-3) var(--space-4)',
            backgroundColor: 'var(--bg-surface-sunken)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-xs)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{ color: 'var(--health-verified-text)' }}>🔒</span>
            <strong style={{ color: 'var(--text-primary)' }}>Hardware Enclave Active</strong>
          </div>
          <span style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>
            Argon2id + AES-256-GCM
          </span>
        </div>
      </div>

      {/* Stream Controls Table / Card List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {consents.map((item) => (
          <div
            key={item.id}
            style={{
              padding: 'var(--space-4)',
              backgroundColor: item.granted ? 'var(--bg-surface-primary)' : 'var(--bg-surface-sunken)',
              border: '1px solid',
              borderColor: item.granted ? 'var(--color-brand-border)' : 'var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              transition: 'background-color var(--transition-fast), border-color var(--transition-fast)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: item.granted ? 'var(--health-verified-text)' : 'var(--text-tertiary)',
                  }}
                />
                <span style={{ fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-base)', color: 'var(--text-primary)' }}>
                  {item.name}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '0.1rem 0.4rem',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-surface-sunken)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-family-mono)',
                  }}
                >
                  {item.standard}
                </span>
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                {item.stream} • <span style={{ color: 'var(--text-tertiary)' }}>{item.storage}</span>
              </div>
            </div>

            {/* Status and Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: item.granted ? 'var(--health-verified-text)' : 'var(--text-tertiary)',
                  }}
                >
                  {item.granted ? '✓ Active & Authorized' : '○ Access Revoked'}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>
                  {item.accessCount} local reads
                </span>
              </div>

              <button
                type="button"
                onClick={() => toggleConsent(item.id)}
                aria-pressed={item.granted}
                aria-label={`Toggle consent for ${item.name}`}
                style={{
                  minHeight: 'var(--min-touch-target)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid',
                  borderColor: item.granted ? 'var(--health-notice-border)' : 'var(--color-brand-primary)',
                  backgroundColor: item.granted ? 'var(--health-notice-bg)' : 'var(--color-brand-primary)',
                  color: item.granted ? 'var(--health-notice-text)' : '#ffffff',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-semibold)',
                  cursor: 'pointer',
                  transition: 'background-color var(--transition-fast)',
                }}
              >
                {item.granted ? 'Revoke Access' : 'Grant Consent'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Global Action Bar */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
        }}
      >
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <ActionButton variant="destructive" size="sm" onClick={handleRevokeAll}>
            🛑 1-Click Revoke All Consents
          </ActionButton>
          <ActionButton variant="secondary" size="sm" onClick={handleGrantDefault}>
            Restore Sovereign Baseline
          </ActionButton>
        </div>

        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
          Audited by TOVELU Sovereign Kernel v0.1
        </span>
      </div>

      {/* Notification Banner */}
      {notification && (
        <div
          role="status"
          style={{
            padding: 'var(--space-3) var(--space-4)',
            backgroundColor: 'var(--color-brand-subtle)',
            border: '1px solid var(--color-brand-border)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-brand-text)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}
        >
          <span>🛡️</span>
          <span>{notification}</span>
        </div>
      )}
    </div>
  );
}

export default ConsentEngine;

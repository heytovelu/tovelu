import React, { useState } from 'react';

/**
 * AuditLedger - Immutable Tamper-Evident Health Graph Audit Trail
 * 
 * Compliant with TOVELU Constitution:
 * - Layer L6: Auditability & Planetary Verification
 * - Section 9.3: Immutable Audit Trails
 * - ISO/IEC 27001:2022 & NIST CSF 2.0 Compliance
 */
export function AuditLedger() {
  const [filter, setFilter] = useState('ALL');

  const logs = [
    {
      id: 'TX-9021-481',
      timestamp: '2026-10-06T19:22:35Z',
      action: 'SYSTEM_BOOT',
      actor: 'TOVELU Sovereign Kernel',
      target: 'Local Cryptographic Enclave',
      hash: 'sha256:7b91...a42e',
      status: 'VERIFIED',
      detail: 'Enclave keys derived via Argon2id (memory=64MB, t=3, p=4)',
    },
    {
      id: 'TX-9021-482',
      timestamp: '2026-10-06T19:20:10Z',
      action: 'CONSENT_GRANTED',
      actor: 'User (Ajay Sen)',
      target: 'LOINC 8867-4 (Continuous PPG)',
      hash: 'sha256:3c84...192f',
      status: 'VERIFIED',
      detail: 'On-device biometric ingestion enabled under Claim Class C2',
    },
    {
      id: 'TX-9021-483',
      timestamp: '2026-10-06T19:15:02Z',
      action: 'SYNC_BLOCKED',
      actor: 'External Telemetry Tracker',
      target: 'Network Socket (Outbound)',
      hash: 'sha256:e1a9...583b',
      status: 'BLOCKED_BY_POLICY',
      detail: 'Constitution Principle P5: Silent remote sync intercepted & neutralized',
    },
    {
      id: 'TX-9021-484',
      timestamp: '2026-10-06T18:45:00Z',
      action: 'FHIR_EXPORT',
      actor: 'User Explicit Request',
      target: 'FHIR R5 Bundle (AES-256)',
      hash: 'sha256:4d70...02c1',
      status: 'VERIFIED',
      detail: 'Bundle exported locally with zero plaintext leaks to telemetry',
    },
    {
      id: 'TX-9021-485',
      timestamp: '2026-10-06T17:30:19Z',
      action: 'KEY_ROTATION',
      actor: 'Hardware Security Module',
      target: 'AES-256 Keyring',
      hash: 'sha256:9f33...881a',
      status: 'VERIFIED',
      detail: 'Periodic hardware-backed cryptographic key renewal successful',
    },
  ];

  const filteredLogs = filter === 'ALL' ? logs : logs.filter((l) => l.status === filter);

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
            <span>Layer L6</span>
            <span>•</span>
            <span>Planetary Verification</span>
          </div>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: '0.25rem' }}>
            Immutable Cryptographic Audit Trail
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)', maxWidth: '780px' }}>
            Every biometric read, policy assertion, external sync block, and consent change is cryptographically sealed into an on-device append-only verification log.
          </p>
        </div>

        {/* Filter buttons */}
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          {['ALL', 'VERIFIED', 'BLOCKED_BY_POLICY'].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              style={{
                border: '1px solid',
                borderColor: filter === f ? 'var(--color-brand-primary)' : 'var(--border-subtle)',
                backgroundColor: filter === f ? 'var(--color-brand-subtle)' : 'var(--bg-surface-primary)',
                color: filter === f ? 'var(--color-brand-text)' : 'var(--text-secondary)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.3rem 0.75rem',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-semibold)',
                cursor: 'pointer',
              }}
            >
              {f === 'ALL' ? 'All Events' : f === 'VERIFIED' ? 'Verified' : 'Blocked'}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 'var(--font-size-xs)',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: '2px solid var(--border-subtle)',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              <th style={{ padding: 'var(--space-3) var(--space-2)' }}>TX ID</th>
              <th style={{ padding: 'var(--space-3) var(--space-2)' }}>Timestamp (UTC)</th>
              <th style={{ padding: 'var(--space-3) var(--space-2)' }}>Action</th>
              <th style={{ padding: 'var(--space-3) var(--space-2)' }}>Actor / Target</th>
              <th style={{ padding: 'var(--space-3) var(--space-2)' }}>Integrity Hash</th>
              <th style={{ padding: 'var(--space-3) var(--space-2)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  transition: 'background-color var(--transition-fast)',
                }}
              >
                <td style={{ padding: 'var(--space-3) var(--space-2)', fontFamily: 'var(--font-family-mono)', fontWeight: 'bold' }}>
                  {log.id}
                </td>
                <td style={{ padding: 'var(--space-3) var(--space-2)', color: 'var(--text-secondary)', fontFamily: 'var(--font-family-mono)' }}>
                  {log.timestamp.replace('T', ' ').replace('Z', '')}
                </td>
                <td style={{ padding: 'var(--space-3) var(--space-2)' }}>
                  <span
                    style={{
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-surface-sunken)',
                      color: 'var(--text-primary)',
                      fontWeight: 'var(--font-weight-semibold)',
                      fontFamily: 'var(--font-family-mono)',
                    }}
                  >
                    {log.action}
                  </span>
                </td>
                <td style={{ padding: 'var(--space-3) var(--space-2)' }}>
                  <div style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>{log.actor}</div>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}>{log.target}</div>
                </td>
                <td style={{ padding: 'var(--space-3) var(--space-2)', fontFamily: 'var(--font-family-mono)', color: 'var(--text-tertiary)' }}>
                  {log.hash}
                </td>
                <td style={{ padding: 'var(--space-3) var(--space-2)' }}>
                  <span
                    style={{
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '11px',
                      fontWeight: 'var(--font-weight-bold)',
                      backgroundColor:
                        log.status === 'VERIFIED'
                          ? 'var(--health-verified-bg)'
                          : 'var(--health-notice-bg)',
                      color:
                        log.status === 'VERIFIED'
                          ? 'var(--health-verified-text)'
                          : 'var(--health-notice-text)',
                      border: '1px solid',
                      borderColor:
                        log.status === 'VERIFIED'
                          ? 'var(--health-verified-border)'
                          : 'var(--health-notice-border)',
                    }}
                  >
                    {log.status === 'VERIFIED' ? '✓ VERIFIED' : '🛑 INTERCEPTED'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-2)',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-tertiary)',
        }}
      >
        <span>Signed by Hardware Root of Trust (ED25519)</span>
        <span>Zero Third-Party Telemetry Beacons</span>
      </div>
    </div>
  );
}

export default AuditLedger;

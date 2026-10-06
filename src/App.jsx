import React, { useState, useEffect } from 'react';
import { ActionButton } from './components/ActionButton';
import { ProgressiveDisclosure } from './components/ProgressiveDisclosure';
import { TrustCard } from './components/TrustCard';
import { ToveluLogo } from './components/ToveluLogo';
import { ConsentEngine } from './components/ConsentEngine';
import { CalmAlert } from './components/CalmAlert';
import { AuditLedger } from './components/AuditLedger';
import { BiometricVisualizer } from './components/BiometricVisualizer';

export function App() {
  const [theme, setTheme] = useState('light');
  const [activeSimulation, setActiveSimulation] = useState('full'); // 'full' | 'tablet' | 'mobile'
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'identity' | 'health-graph' | 'sovereignty' | 'audit'
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [lastActionMessage, setLastActionMessage] = useState('');

  // Sync theme attribute on documentElement
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSimulatedExport = () => {
    setIsActionLoading(true);
    setLastActionMessage('Preparing encrypted FHIR R5 bundle (Argon2id + AES-256-GCM)...');
    setTimeout(() => {
      setIsActionLoading(false);
      setLastActionMessage('FHIR R5 bundle exported safely to encrypted local storage.');
    }, 1400);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-canvas)',
        color: 'var(--text-primary)',
        padding: 'var(--space-6) var(--space-4)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'background-color var(--transition-base), color var(--transition-base)',
      }}
    >
      {/* Container wrapper with simulation constraints */}
      <div
        style={{
          width: '100%',
          maxWidth:
            activeSimulation === 'mobile'
              ? '360px'
              : activeSimulation === 'tablet'
              ? '768px'
              : '1180px',
          transition: 'max-width var(--transition-base)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-8)',
        }}
      >
        {/* =========================================================================
            HEADER & SYSTEM CONTROLS
            ========================================================================= */}
        <header
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: 'var(--space-6)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <ToveluLogo size={52} showTile={true} bg="#08615A" color="#ffffff" />
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-brand-primary)',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  <span>TOVELU</span>
                  <span>•</span>
                  <span>GLOBAL DIGITAL HEALTH ECOSYSTEM</span>
                </div>
                <h1
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: 'var(--line-height-tight)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Universal Health OS &amp; UI/UX Design Kit
                </h1>
                <p
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-secondary)',
                    marginTop: 'var(--space-1)',
                    maxWidth: '720px',
                  }}
                >
                  Engineered for 9 billion people over their entire life course. Calm health design, native trust density, and WCAG 2.2 AAA accessibility.
                </p>
              </div>
            </div>

            {/* Quick Actions: Theme */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
              }}
            >
              <ActionButton
                variant="secondary"
                size="sm"
                onClick={toggleTheme}
                ariaLabel={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
              >
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </ActionButton>
            </div>
          </div>

          {/* Viewport Simulation Selector (Tests Universal Responsiveness from 320px) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-3)',
              paddingTop: 'var(--space-2)',
            }}
          >
            {/* Viewport Modes */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-tertiary)',
                flexWrap: 'wrap',
              }}
            >
              <span>Viewport Constraint:</span>
              {[
                { id: 'full', label: 'Full Responsive' },
                { id: 'tablet', label: 'Tablet (768px)' },
                { id: 'mobile', label: 'Mobile (360px)' },
              ].map((sim) => (
                <button
                  key={sim.id}
                  type="button"
                  onClick={() => setActiveSimulation(sim.id)}
                  style={{
                    border: '1px solid',
                    borderColor:
                      activeSimulation === sim.id
                        ? 'var(--color-brand-primary)'
                        : 'var(--border-subtle)',
                    backgroundColor:
                      activeSimulation === sim.id
                        ? 'var(--color-brand-subtle)'
                        : 'var(--bg-surface-primary)',
                    color:
                      activeSimulation === sim.id
                        ? 'var(--color-brand-text)'
                        : 'var(--text-secondary)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    minHeight: '36px',
                  }}
                >
                  {sim.label}
                </button>
              ))}
            </div>

            {/* Architecture Layer Tabs */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-1)',
                backgroundColor: 'var(--bg-surface-sunken)',
                padding: '4px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
              }}
            >
              {[
                { id: 'all', label: 'All Modules' },
                { id: 'identity', label: 'Canonical Mark' },
                { id: 'health-graph', label: 'Biometrics & Care' },
                { id: 'sovereignty', label: 'Consent Vault' },
                { id: 'audit', label: 'Audit Ledger' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    border: 'none',
                    backgroundColor: activeTab === tab.id ? 'var(--bg-surface-primary)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-brand-primary)' : 'var(--text-secondary)',
                    fontWeight: activeTab === tab.id ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    cursor: 'pointer',
                    boxShadow: activeTab === tab.id ? 'var(--shadow-sm)' : 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* =========================================================================
            CONSTITUTIONAL ANCHOR & ACCESSIBILITY STATUS
            ========================================================================= */}
        <section
          style={{
            backgroundColor: 'var(--health-calm-bg)',
            border: '1px solid var(--health-calm-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-4)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontWeight: 'var(--font-weight-semibold)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--health-calm-text)',
            }}
          >
            <span aria-hidden="true">🛡️</span>
            <span>Constitutional Compliance Active (TOVELU Constitution Draft v0.1)</span>
          </div>
          <p
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--health-calm-text)',
              lineHeight: 'var(--line-height-normal)',
            }}
          >
            Every component enforces: <strong>P1 Human Safety</strong>, <strong>P2 Truth over Persuasion</strong>, <strong>P4 Human Autonomy</strong>, <strong>P5 Privacy by Design</strong>, and <strong>P9 WCAG 2.2 AAA Accessibility</strong> (≥44x44px touch targets, non-alarmist calm palette, zero manufactured certainty).
          </p>
        </section>

        {/* =========================================================================
            MODULE 1: CORE IDENTITY & CANONICAL MARK
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'identity') && (
          <section
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
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
                  <span>Core Identity</span>
                  <span>•</span>
                  <span>Universal Health Graph</span>
                </div>
                <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: '0.25rem' }}>
                  Canonical TOVELU Mark
                </h2>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}>
                  Founder's authentic 5-node interconnected health graph mark. Synthesizes human biology (Vitruvian 5-point symmetry) with secure data nodes and clinical calm.
                </p>
              </div>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--health-verified-bg)',
                  color: 'var(--health-verified-text)',
                  border: '1px solid var(--health-verified-border)',
                  fontWeight: 'var(--font-weight-semibold)',
                }}
              >
                ✓ Official Canonical Mark
              </span>
            </div>

            {/* Multi-Scale & Environmental Testing Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 'var(--space-4)',
              }}
            >
              {/* Tile Preview: Primary Brand Teal Tile */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface-sunken)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                <ToveluLogo size={72} showTile={true} bg="#08615A" color="#ffffff" />
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)' }}>
                    App Icon Tile (72px)
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', marginTop: '0.15rem' }}>
                    Signature #08615A Clinical Teal
                  </div>
                </div>
              </div>

              {/* Tile Preview: In-App Medium (48px) */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface-sunken)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                <ToveluLogo size={48} showTile={true} bg="#0F766E" color="#ffffff" />
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)' }}>
                    In-App Header Tile (48px)
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', marginTop: '0.15rem' }}>
                    Compact Navigation Anchor
                  </div>
                </div>
              </div>

              {/* Tile Preview: Raw Mark / Monochrome */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface-sunken)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                <div style={{ width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ToveluLogo size={52} color="var(--color-brand-primary)" />
                </div>
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)' }}>
                    Raw Vector Mark (52px)
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', marginTop: '0.15rem' }}>
                    Unboxed glyph (adapts to canvas)
                  </div>
                </div>
              </div>

              {/* Tile Preview: 16px Favicon / Micro Display */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface-sunken)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-2)' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      backgroundColor: '#08615A',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ToveluLogo size={20} color="#ffffff" />
                  </div>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#08615A',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ToveluLogo size={14} color="#ffffff" />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)' }}>
                    Micro Display (16–28px)
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', marginTop: '0.15rem' }}>
                    Live in browser tab / favicon.svg
                  </div>
                </div>
              </div>
            </div>

            {/* Mark Anatomy / Symbolic Architecture */}
            <div
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: 'var(--space-4)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'var(--space-4)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
              }}
            >
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ fontSize: 'var(--font-size-base)' }}>⭕</span>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Central Sovereign Core Ring:</strong>
                  <div>Origin at (24, 24). Represents the individual’s unified health sovereignty and encrypted data nucleus.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ fontSize: 'var(--font-size-base)' }}>🌐</span>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>5 Vitruvian Nodes:</strong>
                  <div>Equidistant radiating nodes representing clinical records, ambient telemetry, genetics, autonomic recovery, and family care network.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ fontSize: 'var(--font-size-base)' }}>⚖️</span>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Zero Alarm / High Contrast:</strong>
                  <div>Passes WCAG 2.2 AAA with 7:1+ contrast against light and dark backdrops, without clinical anxiety triggers.</div>
                </div>
              </div>
            </div>

            {/* Interoperability Topology Deep Dive */}
            <div
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                backgroundColor: 'var(--bg-surface-sunken)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ fontSize: '1.1rem' }}>🔗</span>
                <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-bold)' }}>
                  Why This Icon Symbolizes Universal Interoperability (Layer L5)
                </h3>
              </div>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Healthcare has historically failed because systems are closed silos (Apple Health, Epic, Cerner). TOVELU replaces walled gardens with an <strong>open distributed health graph</strong>. The central ring anchors the individual human, while the 5 radiating cylindrical channels link directly to global open standards without vendor lock-in:
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-2)',
                }}
              >
                <div style={{ backgroundColor: 'var(--bg-surface-primary)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--color-brand-primary)' }}>1. TOP NODE</div>
                  <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)' }}>Hospital &amp; EHR Systems</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>HL7 FHIR R5 / SMART on FHIR</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface-primary)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--color-brand-primary)' }}>2. UPPER-RIGHT NODE</div>
                  <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)' }}>Ambient IoT &amp; Vitals</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>LOINC &amp; IEEE 11073 Devices</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface-primary)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--color-brand-primary)' }}>3. UPPER-LEFT NODE</div>
                  <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)' }}>Diagnostics &amp; Imaging</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>SNOMED CT &amp; DICOM</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface-primary)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--color-brand-primary)' }}>4. LOWER-RIGHT NODE</div>
                  <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)' }}>Genomics &amp; Omics</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>GA4GH Passports / VCF</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface-primary)', padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--color-brand-primary)' }}>5. LOWER-LEFT NODE</div>
                  <div style={{ fontWeight: '600', fontSize: 'var(--font-size-xs)' }}>Global Care Circles</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>WHO IPS (Intl Patient Summary)</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            MODULE 2: BIOMETRICS & HEALTH GRAPH
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'health-graph') && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Calm Alert (Constitution P1, P11) */}
            <CalmAlert
              severity="observational"
              title="Elevated Resting Heart Rate Trend Detected"
              message="Your 3-day resting heart rate average is 74 bpm, which is 12 bpm above your established personal baseline of 62 bpm. This variation is commonly associated with benign factors such as dehydration, lack of sleep, early immune activation, or acute life stress."
              recommendation="Ensure adequate hydration and prioritize 8 hours of rest tonight. If accompanied by shortness of breath or dizziness, seek clinical consultation."
              claimClass="C3 - Clinical Triage Guidance"
              evidenceTier="Tier B (Systematic Meta-Analysis)"
              certaintyInterval="95% CI [71.2 - 76.8 bpm]"
            />

            {/* Biometric Interactive Sparkline & Uncertainty Visualizer */}
            <BiometricVisualizer />

            {/* TrustCard Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div>
                <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                  Trust-Dense Health Insight Cards (`TrustCard`)
                </h2>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                  Natively integrates source provenance, verification timestamps, uncertainty tier, and explicit permissions.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'var(--space-5)',
                }}
              >
                {/* Card 1: Cardiovascular Insight */}
                <TrustCard
                  title="Resting Heart Rate Baseline"
                  value="62"
                  unit="bpm"
                  changeDescription="Personal baseline established over 28 continuous days. Consistent with healthy autonomic recovery."
                  claimClass="C2 - Individualized wellness insight"
                  sourceName="Verified Photoplethysmography Sensor"
                  sourceTier="A"
                  timestampISO="2026-10-06T08:15:00Z"
                  timestampFormatted="Today at 08:15 AM (UTC+5:30)"
                  permissionState="Private (Device Only)"
                  deepContext={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      <p>
                        <strong>Clinical Standard Reference:</strong> AHA / WHO Cardiovascular Health Guidelines [S02].
                      </p>
                      <p>
                        <strong>Observed 28-day Window:</strong> Mean 61.8 bpm, standard deviation ±2.4 bpm. Sample frequency: 1 Hz during resting epochs.
                      </p>
                      <p>
                        <strong>FHIR R5 Mapping:</strong> <code>Observation.code = LOINC 8867-4 (Heart rate)</code>. Stored in encrypted on-device SQLite database.
                      </p>
                    </div>
                  }
                />

                {/* Card 2: Sleep Quality & Circadian Rhythm */}
                <TrustCard
                  title="Sleep Architecture & Regularity"
                  value="7.8"
                  unit="hours"
                  changeDescription="Night-to-night consistency score: 94%. Slow-wave deep sleep within age-adjusted normal distribution."
                  claimClass="C2 - Individualized wellness insight"
                  sourceName="Polysomnography-Calibrated Model"
                  sourceTier="B"
                  timestampISO="2026-10-06T06:45:00Z"
                  timestampFormatted="Today at 06:45 AM"
                  permissionState="Exportable"
                  deepContext={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      <p>
                        <strong>Methodology:</strong> Multi-sensor actigraphy combined with heart rate variability (HRV) analysis, cross-referenced with peer-reviewed meta-analyses [Tier B].
                      </p>
                      <p>
                        <strong>Stage Distribution:</strong> Deep Sleep: 1.8 hrs (23%), REM: 1.9 hrs (24%), Light: 4.1 hrs (53%).
                      </p>
                      <p>
                        <strong>Constitutional Limit:</strong> Not intended to diagnose obstructive sleep apnea or insomnia disorders.
                      </p>
                    </div>
                  }
                />

                {/* Card 3: Metabolic Biomarker (Tier A Laboratory Panel) */}
                <TrustCard
                  title="Fasting Plasma Glucose"
                  value="92"
                  unit="mg/dL"
                  changeDescription="Standard physiological reference interval: 70–99 mg/dL. Verified normoglycemic result."
                  claimClass="C1 - General health education + Lab Record"
                  sourceName="CAP/CLIA Accredited Laboratory"
                  sourceTier="A"
                  timestampISO="2026-10-01T10:00:00Z"
                  timestampFormatted="1 Oct 2026 via Health Information Exchange"
                  permissionState="Consented Sync"
                  deepContext={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      <p>
                        <strong>Lab Methodology:</strong> Hexokinase enzymatic spectrophotometry.
                      </p>
                      <p>
                        <strong>Accession ID:</strong> <code>ACC-2026-88194-GLUC</code>. Authenticated via OAuth 2.0 SMART on FHIR.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            MODULE 3: DATA SOVEREIGNTY & PRIVACY VAULT
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'sovereignty') && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Interactive Consent Engine */}
            <ConsentEngine />

            {/* Progressive Disclosure Containers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div>
                <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                  Progressive Disclosure Containers (`ProgressiveDisclosure`)
                </h2>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                  Presents simple essentials for general users while preserving instant access to full clinical evidence and cryptographic privacy proofs.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <ProgressiveDisclosure
                  title="How TOVELU Evaluates Health Evidence"
                  subtitle="Constitution Section 5.1 Evidence Hierarchy (Tier A through Tier E)"
                  badgeText="Constitutional Law"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <p>
                      TOVELU adheres strictly to an evidence hierarchy where high-stakes health claims must be grounded in Tier A or Tier B sources.
                    </p>
                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <li><strong>Tier A:</strong> Statutory laws, WHO, official regulatory guidelines, and authoritative medical standards.</li>
                      <li><strong>Tier B:</strong> Systematic reviews, meta-analyses, and randomized controlled clinical trials.</li>
                      <li><strong>Tier C:</strong> Medical specialty consensus and evidence-based clinical textbooks.</li>
                      <li><strong>Tier D &amp; E:</strong> High-quality secondary literature or self-reported logs (never used as sole evidence for high-stakes decisions).</li>
                    </ul>
                  </div>
                </ProgressiveDisclosure>

                <ProgressiveDisclosure
                  title="Data Sovereignty &amp; Zero-Knowledge Security Model"
                  subtitle="Constitution Section 9 &amp; 10: Privacy by Design"
                  badgeText="Encrypted at Rest"
                >
                  <p>
                    Personal health records are encrypted at rest using Argon2id key derivation (RFC 9106) and AES-256-GCM. TOVELU will never sell, monetize, or silently repurpose health data for advertising or non-consented third-party processing.
                  </p>
                </ProgressiveDisclosure>
              </div>
            </div>

            {/* Accessible Action Buttons */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
            >
              <div>
                <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-bold)' }}>
                  Multi-State Accessible Action Buttons (`ActionButton`)
                </h3>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  WCAG 2.2 AAA ≥44x44px touch targets with keyboard focus rings and calm state transitions.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  flexWrap: 'wrap',
                }}
              >
                <ActionButton
                  variant="primary"
                  onClick={handleSimulatedExport}
                  isLoading={isActionLoading}
                >
                  Export Encrypted Health Graph
                </ActionButton>

                <ActionButton variant="secondary">
                  Review Audit Logs
                </ActionButton>

                <ActionButton variant="subtle">
                  Manage Consents
                </ActionButton>

                <ActionButton variant="destructive">
                  Revoke Provider Access
                </ActionButton>

                <ActionButton variant="secondary" disabled>
                  Disabled Control
                </ActionButton>
              </div>

              {lastActionMessage && (
                <div
                  role="status"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-brand-primary)',
                    fontWeight: 'var(--font-weight-medium)',
                    padding: 'var(--space-2) var(--space-3)',
                    backgroundColor: 'var(--color-brand-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-brand-border)',
                  }}
                >
                  {lastActionMessage}
                </div>
              )}
            </div>
          </section>
        )}

        {/* =========================================================================
            MODULE 4: AUDIT LEDGER & VERIFICATION
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'audit') && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <AuditLedger />
          </section>
        )}

        {/* =========================================================================
            FOOTER: GOVERNANCE & ARCHITECTURE
            ========================================================================= */}
        <footer
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--text-tertiary)',
            textAlign: 'center',
          }}
        >
          <p>
            <strong>TOVELU Operating Constitution Draft v0.1</strong> • Founder: Ajay Sen • Architecture: Web-First PWA (<code>tovelu.store</code> | <code>app.tovelu.store</code>)
          </p>
          <p>
            Compliant with NIST CSF 2.0, ISO/IEC 27001:2022, HL7 FHIR R5, and W3C WCAG 2.2 AAA.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

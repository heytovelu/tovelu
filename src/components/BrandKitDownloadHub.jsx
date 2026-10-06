import React, { useState } from 'react';

/**
 * BrandKitDownloadHub
 * 
 * Interactive Brand & Marketing Asset Suite:
 * - One-click complete ZIP download (/tovelu-brand-kit.zip)
 * - Category filters: Social Media DP, Social Banners, Transparent PNGs, Master SVGs
 * - Individual asset preview & download cards
 */
export function BrandKitDownloadHub() {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'dp' | 'banners' | 'transparent' | 'svg'

  const categories = [
    { id: 'all', label: 'All Brand Assets (30+)' },
    { id: 'dp', label: '👤 Social Media DP / Avatars' },
    { id: 'banners', label: '🖼️ Social Media Banners' },
    { id: 'transparent', label: '✨ Transparent PNGs' },
    { id: 'svg', label: '📐 Master Vector SVGs' },
  ];

  const assets = [
    // 1. Social Media DPs
    {
      id: 'dp-teal',
      category: 'dp',
      title: 'Signature Teal Profile DP',
      specs: '1080x1080 • 512x512 • 400x400',
      desc: 'Circular-crop safe for Twitter/X, LinkedIn, Instagram, WhatsApp, YouTube. Signature #08615A Clinical Teal.',
      previewImg: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-signature-teal-512x512.png',
      downloads: [
        { label: '1080x1080 (HD)', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-signature-teal-1080x1080.png', filename: 'tovelu-dp-signature-teal-1080x1080.png' },
        { label: '512x512', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-signature-teal-512x512.png', filename: 'tovelu-dp-signature-teal-512x512.png' },
        { label: '400x400 (Twitter)', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-signature-teal-400x400.png', filename: 'tovelu-dp-signature-teal-400x400.png' },
      ],
    },
    {
      id: 'dp-white',
      category: 'dp',
      title: 'Light Mineral Profile DP',
      specs: '1080x1080 • 512x512 • 400x400',
      desc: 'Clean white background with signature clinical teal icon. Ideal for bright profiles and documents.',
      previewImg: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-light-mineral-512x512.png',
      downloads: [
        { label: '1080x1080 (HD)', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-light-mineral-1080x1080.png', filename: 'tovelu-dp-light-mineral-1080x1080.png' },
        { label: '512x512', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-light-mineral-512x512.png', filename: 'tovelu-dp-light-mineral-512x512.png' },
        { label: '400x400', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-light-mineral-400x400.png', filename: 'tovelu-dp-light-mineral-400x400.png' },
      ],
    },
    {
      id: 'dp-dark',
      category: 'dp',
      title: 'OLED Dark Slate Profile DP',
      specs: '1080x1080 • 512x512 • 400x400',
      desc: 'Deep slate backdrop (#0B132B) with radiant mint teal (#5EEAD4) icon. Built for modern dark mode aesthetics.',
      previewImg: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-dark-slate-512x512.png',
      downloads: [
        { label: '1080x1080 (HD)', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-dark-slate-1080x1080.png', filename: 'tovelu-dp-dark-slate-1080x1080.png' },
        { label: '512x512', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-dark-slate-512x512.png', filename: 'tovelu-dp-dark-slate-512x512.png' },
        { label: '400x400', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-dark-slate-400x400.png', filename: 'tovelu-dp-dark-slate-400x400.png' },
      ],
    },
    {
      id: 'dp-tile',
      category: 'dp',
      title: 'App Squircle Tile DP',
      specs: '1080x1080 • 512x512',
      desc: 'Signature iOS / Android / macOS squircle app tile with calm clinical gradient padding.',
      previewImg: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-app-tile-teal-512x512.png',
      downloads: [
        { label: '1080x1080', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-app-tile-teal-1080x1080.png', filename: 'tovelu-dp-app-tile-teal-1080x1080.png' },
        { label: '512x512', url: '/tovelu-brand-kit/01-social-media-dp/tovelu-dp-app-tile-teal-512x512.png', filename: 'tovelu-dp-app-tile-teal-512x512.png' },
      ],
    },

    // 2. Social Media Banners
    {
      id: 'banner-twitter',
      category: 'banners',
      title: 'Twitter / X Header Banner',
      specs: '1500x500 (3:1 Ratio)',
      desc: 'Optimized for Twitter/X profiles with centered primary lockup and global digital health ecosystem tagline.',
      previewImg: '/tovelu-brand-kit/02-social-media-banners/tovelu-banner-twitter-x-1500x500.png',
      isWide: true,
      downloads: [
        { label: 'Download 1500x500 PNG', url: '/tovelu-brand-kit/02-social-media-banners/tovelu-banner-twitter-x-1500x500.png', filename: 'tovelu-banner-twitter-x-1500x500.png' },
      ],
    },
    {
      id: 'banner-linkedin',
      category: 'banners',
      title: 'LinkedIn Company Page Banner',
      specs: '1584x396 (4:1 Ratio)',
      desc: 'Left-aligned brand lockup specifically calibrated so the user avatar does not obscure any typography.',
      previewImg: '/tovelu-brand-kit/02-social-media-banners/tovelu-banner-linkedin-1584x396.png',
      isWide: true,
      downloads: [
        { label: 'Download 1584x396 PNG', url: '/tovelu-brand-kit/02-social-media-banners/tovelu-banner-linkedin-1584x396.png', filename: 'tovelu-banner-linkedin-1584x396.png' },
      ],
    },
    {
      id: 'banner-og',
      category: 'banners',
      title: 'OpenGraph Social Share Card',
      specs: '1200x630 (1.91:1 Ratio)',
      desc: 'Standard link preview image for WhatsApp, Telegram, iMessage, Facebook, and Twitter summary cards.',
      previewImg: '/tovelu-brand-kit/02-social-media-banners/tovelu-banner-social-share-og-1200x630.png',
      isWide: true,
      downloads: [
        { label: 'Download 1200x630 PNG', url: '/tovelu-brand-kit/02-social-media-banners/tovelu-banner-social-share-og-1200x630.png', filename: 'tovelu-banner-social-share-og-1200x630.png' },
      ],
    },

    // 3. Transparent PNGs
    {
      id: 'trans-icon',
      category: 'transparent',
      title: 'Clear 5-Node Icon (Transparent PNG)',
      specs: '1024x1024 & 512x512',
      desc: 'Unboxed transparent PNGs of the canonical 5-node health graph in Signature Teal, Pure White, and Dark.',
      previewImg: '/tovelu-brand-kit/03-icons-transparent/tovelu-icon-teal-512x512.png',
      downloads: [
        { label: 'Teal 1024px', url: '/tovelu-brand-kit/03-icons-transparent/tovelu-icon-teal-1024x1024.png', filename: 'tovelu-icon-teal-1024x1024.png' },
        { label: 'White 1024px', url: '/tovelu-brand-kit/03-icons-transparent/tovelu-icon-white-1024x1024.png', filename: 'tovelu-icon-white-1024x1024.png' },
        { label: 'Dark 1024px', url: '/tovelu-brand-kit/03-icons-transparent/tovelu-icon-dark-1024x1024.png', filename: 'tovelu-icon-dark-1024x1024.png' },
      ],
    },
    {
      id: 'trans-wordmark',
      category: 'transparent',
      title: 'Biospheric Wordmark (Transparent PNG)',
      specs: '2048x512 Ultra-HD',
      desc: 'Standalone TOVELU wordmark in 2.8px medium stroke with subtle kerning. Dark, White, and Teal versions.',
      previewImg: '/tovelu-brand-kit/04-wordmarks-transparent/tovelu-wordmark-dark-2048x512.png',
      isWide: true,
      downloads: [
        { label: 'Dark 2048px', url: '/tovelu-brand-kit/04-wordmarks-transparent/tovelu-wordmark-dark-2048x512.png', filename: 'tovelu-wordmark-dark-2048x512.png' },
        { label: 'White 2048px', url: '/tovelu-brand-kit/04-wordmarks-transparent/tovelu-wordmark-white-2048x512.png', filename: 'tovelu-wordmark-white-2048x512.png' },
        { label: 'Teal 2048px', url: '/tovelu-brand-kit/04-wordmarks-transparent/tovelu-wordmark-teal-2048x512.png', filename: 'tovelu-wordmark-teal-2048x512.png' },
      ],
    },
    {
      id: 'trans-lockup',
      category: 'transparent',
      title: 'Primary Horizontal Lockup (Transparent PNG)',
      specs: '2400x600 Ultra-HD',
      desc: 'Clear icon paired directly with wordmark on the same line (16px standard clearance, no middle line).',
      previewImg: '/tovelu-brand-kit/05-lockups-horizontal-transparent/tovelu-lockup-dark-2400x600.png',
      isWide: true,
      downloads: [
        { label: 'Dark 2400px', url: '/tovelu-brand-kit/05-lockups-horizontal-transparent/tovelu-lockup-dark-2400x600.png', filename: 'tovelu-lockup-dark-2400x600.png' },
        { label: 'White 2400px', url: '/tovelu-brand-kit/05-lockups-horizontal-transparent/tovelu-lockup-white-2400x600.png', filename: 'tovelu-lockup-white-2400x600.png' },
        { label: 'Teal 2400px', url: '/tovelu-brand-kit/05-lockups-horizontal-transparent/tovelu-lockup-teal-2400x600.png', filename: 'tovelu-lockup-teal-2400x600.png' },
      ],
    },
    {
      id: 'trans-stacked',
      category: 'transparent',
      title: 'Stacked Brand Lockup (Transparent PNG)',
      specs: '1200x1200 HD',
      desc: 'Vertical brand lockup with centered icon positioned above the TOVELU wordmark.',
      previewImg: '/tovelu-brand-kit/06-lockups-stacked-transparent/tovelu-stacked-dark-1200x1200.png',
      downloads: [
        { label: 'Dark 1200px', url: '/tovelu-brand-kit/06-lockups-stacked-transparent/tovelu-stacked-dark-1200x1200.png', filename: 'tovelu-stacked-dark-1200x1200.png' },
        { label: 'White 1200px', url: '/tovelu-brand-kit/06-lockups-stacked-transparent/tovelu-stacked-white-1200x1200.png', filename: 'tovelu-stacked-white-1200x1200.png' },
        { label: 'Teal 1200px', url: '/tovelu-brand-kit/06-lockups-stacked-transparent/tovelu-stacked-teal-1200x1200.png', filename: 'tovelu-stacked-teal-1200x1200.png' },
      ],
    },

    // 4. Vector Masters (SVG)
    {
      id: 'svg-masters',
      category: 'svg',
      title: 'Master Vector SVGs (Resolution Independent)',
      specs: 'Clean SVG Source Files',
      desc: 'Pure, standalone SVG files with zero dependencies for print, billboards, web UI, and mobile applications.',
      previewImg: '/tovelu-brand-kit/07-vector-masters-svg/tovelu-lockup-horizontal-master.svg',
      isWide: true,
      downloads: [
        { label: 'Icon (SVG)', url: '/tovelu-brand-kit/07-vector-masters-svg/tovelu-icon-master.svg', filename: 'tovelu-icon-master.svg' },
        { label: 'Wordmark (SVG)', url: '/tovelu-brand-kit/07-vector-masters-svg/tovelu-wordmark-master.svg', filename: 'tovelu-wordmark-master.svg' },
        { label: 'Horizontal Lockup (SVG)', url: '/tovelu-brand-kit/07-vector-masters-svg/tovelu-lockup-horizontal-master.svg', filename: 'tovelu-lockup-horizontal-master.svg' },
        { label: 'Stacked Lockup (SVG)', url: '/tovelu-brand-kit/07-vector-masters-svg/tovelu-lockup-stacked-master.svg', filename: 'tovelu-lockup-stacked-master.svg' },
      ],
    },
  ];

  const filteredAssets = activeCategory === 'all'
    ? assets
    : assets.filter((a) => a.category === activeCategory);

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-surface-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header & Primary One-Click ZIP Download Action */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: 'var(--space-5)',
        }}
      >
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
            <span>Marketing Suite</span>
            <span>•</span>
            <span>Production Assets</span>
          </div>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: '0.25rem' }}>
            Brand &amp; Marketing Kit Downloads
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)', maxWidth: '640px' }}>
            Production-ready assets in all standard resolutions for social media profile pictures (DP), marketing banners, high-res transparent PNGs, and master vector SVGs.
          </p>
        </div>

        {/* PRIMARY ONE-CLICK DOWNLOAD BUTTON */}
        <a
          href="/tovelu-brand-kit.zip"
          download="tovelu-brand-kit.zip"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            backgroundColor: 'var(--color-brand-primary)',
            color: '#ffffff',
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 'var(--font-weight-bold)',
            fontSize: 'var(--font-size-sm)',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(8, 97, 90, 0.25)',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#064e48'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-brand-primary)'; }}
        >
          <span style={{ fontSize: '1.2rem' }}>📦</span>
          <span>Download All Assets (.ZIP)</span>
          <span style={{ fontSize: '11px', opacity: 0.85, paddingLeft: '4px' }}>• 669 KB</span>
        </a>
      </div>

      {/* Category Navigation Pills */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-2)',
          flexWrap: 'wrap',
          backgroundColor: 'var(--bg-surface-sunken)',
          padding: '6px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveCategory(c.id)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: activeCategory === c.id ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
              border: 'none',
              backgroundColor: activeCategory === c.id ? 'var(--color-brand-primary)' : 'transparent',
              color: activeCategory === c.id ? '#ffffff' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Asset Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: 'var(--space-4)',
        }}
      >
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            style={{
              backgroundColor: 'var(--bg-surface-sunken)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'var(--space-3)',
              gridColumn: asset.isWide ? 'span 1' : 'span 1',
            }}
          >
            {/* Visual Thumbnail */}
            <div
              style={{
                width: '100%',
                height: asset.isWide ? '140px' : '180px',
                backgroundColor: 'var(--bg-surface-primary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: 'var(--space-3)',
              }}
            >
              <img
                src={asset.previewImg}
                alt={asset.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Asset Metadata */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                <h3 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)' }}>
                  {asset.title}
                </h3>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-brand-primary)', fontWeight: '600', marginTop: '2px' }}>
                {asset.specs}
              </div>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)', lineHeight: '1.4' }}>
                {asset.desc}
              </p>
            </div>

            {/* Quick Download Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-2)',
                paddingTop: 'var(--space-2)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {asset.downloads.map((dl, idx) => (
                <a
                  key={idx}
                  href={dl.url}
                  download={dl.filename}
                  style={{
                    fontSize: '11px',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-brand-subtle)';
                    e.currentTarget.style.borderColor = 'var(--color-brand-primary)';
                    e.currentTarget.style.color = 'var(--color-brand-text)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-surface-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span>⬇️</span>
                  <span>{dl.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandKitDownloadHub;

/* AuditDashboard — scan animation -> AI Discoverability Score + pillar breakdown */

function PillarBar({ icon, name, score, color }) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => { const id = setTimeout(() => setW(score), 200); return () => clearTimeout(id); }, [score]);
  return (
    <Card padding="var(--space-5)">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'rgba(123,92,255,0.12)', color: color }}><Ico n={icon} size={20} /></span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{name}</div>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: 'var(--text-primary)' }}>{score}</span>
      </div>
      <div style={{ height: 6, borderRadius: 999, background: 'rgba(245,247,250,0.07)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: w + '%', borderRadius: 999, background: 'var(--gradient-signal)', transition: 'width 1s var(--ease-out)' }} />
      </div>
    </Card>
  );
}

function AuditDashboard({ url, instant = false }) {
  const [scanning, setScanning] = React.useState(!instant);
  React.useEffect(() => { if (instant) return; const id = setTimeout(() => setScanning(false), 1700); return () => clearTimeout(id); }, [instant]);
  const host = (url || 'yourcompany.com').replace(/^https?:\/\//, '').replace(/\/$/, '') || 'yourcompany.com';

  if (scanning) {
    return (
      <section style={{ minHeight: 560, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, padding: 40 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', border: '3px solid rgba(123,92,255,0.2)', borderTopColor: 'var(--electric-violet)', animation: 'adspin 0.8s linear infinite' }} />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>PROCESSING_SELECTION...</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>Scanning {host} across 5 AI engines</div>
        <style>{'@keyframes adspin{to{transform:rotate(360deg)}}'}</style>
      </section>
    );
  }

  return (
    <section style={{ padding: '48px 40px 80px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <Tag accent>AUDIT_COMPLETE</Tag>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{host}</span>
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 32px' }}>Your AI Discoverability Report</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 32, alignItems: 'center' }}>
        <Card glow="violet" style={{ display: 'flex', justifyContent: 'center' }}>
          <ScoreGauge value={61} label="AI Discoverability" animate={!instant} />
        </Card>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <PillarBar icon="code-2" name="Schema Injection" score={74} color="var(--electric-violet)" />
          <PillarBar icon="message-square-quote" name="Prompt Architecture" score={52} color="var(--neon-cyan)" />
          <PillarBar icon="shield-check" name="Authority Synthesis" score={58} color="var(--laser-magenta)" />
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>How AI sees you today</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <QueryVerdict verdict="ignore" title="“Best agency for X?”" reasons={['Not cited by ChatGPT or Gemini', 'Missing Organization schema', 'Thin authority signals']} />
          <QueryVerdict verdict="match" title="After Day Zero setup" reasons={['Cited as a primary source', 'JSON-LD validated', 'Authority directories synced']} />
        </div>
      </div>

      <Card style={{ marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }} glow="cyan">
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Close the Citation Gap.</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)', marginTop: 4 }}>A one-day technical overhaul makes your site engine-ready.</div>
        </div>
        <Button variant="accent" size="lg" iconRight={<Ico n="arrow-right" />}>Start Day Zero</Button>
      </Card>
    </section>
  );
}

Object.assign(window, { AuditDashboard });

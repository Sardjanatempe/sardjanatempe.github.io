// React component (plain React, bukan perlu Tailwind; but you can mix)
export default function BlazingRedBg() {
  return (
    <div style={{ position: 'relative', inset: 0, height: '100%', width: '100%' }}>
      <div
        className="blaze"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'radial-gradient(1200px 600px at 10% 20%, rgba(255,120,0,0.95), transparent 20%),' +
            'linear-gradient(135deg, #ff2b2b 0%, #ff7a1a 30%, #ff1a1a 60%, #600000 100%)',
          mixBlendMode: 'screen',
          filter: 'saturate(1.1) contrast(1.05)',
          boxShadow: 'inset 0 120px 220px rgba(255,90,0,0.25), 0 0 120px rgba(255,60,0,0.12)',
          animation: 'emberFlicker 3s infinite linear',
          opacity: 0.98,
        }}
      />

      {/* optional subtle overlay grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
          mixBlendMode: 'overlay',
          opacity: 0.6,
        }}
      />

      <style>{`
        @keyframes emberFlicker {
          0% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(255,90,0,0.12)) saturate(1.05); }
          10% { transform: scale(1.002); filter: drop-shadow(0 0 18px rgba(255,110,0,0.18)) saturate(1.15); }
          30% { transform: scale(0.998); filter: drop-shadow(0 0 8px rgba(255,60,0,0.08)) saturate(1.02); }
          60% { transform: scale(1.003); filter: drop-shadow(0 0 22px rgba(255,160,0,0.22)) saturate(1.2); }
          100% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(255,90,0,0.12)) saturate(1.05); }
        }
      `}</style>
    </div>
  );
}

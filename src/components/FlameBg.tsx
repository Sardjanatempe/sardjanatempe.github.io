export interface FlameBgProps {
  className?: string;
}

export default function FlameBg({ className }: FlameBgProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,#ff3b3b 0%, #ff7a1a 40%, #4b0000 100%)",
        }}
      />

      {/* multiple animated flame elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <span className="flame f1" />
        <span className="flame f2" />
        <span className="flame f3" />
        <span className="flame f4" />
      </div>

      {/* embers */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <span className="ember e1" />
        <span className="ember e2" />
        <span className="ember e3" />
      </div>

      <style>{`
        .flame {
          position: absolute;
          bottom: -10%;
          width: 160px;
          height: 260px;
          border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
          filter: blur(36px);
          transform-origin: bottom center;
          mix-blend-mode: screen;
          opacity: 0.95;
        }
        .f1 { left: 12%; background: radial-gradient(closest-side,#ffb347,#ff4d4d 50%, transparent 70%); animation: flameRise 2.4s ease-in-out infinite; }
        .f2 { left: 32%; width: 120px; height: 220px; background: radial-gradient(closest-side,#ff6b6b,#ff2b2b 45%, transparent 70%); animation: flameRise 2.1s ease-in-out infinite; animation-delay: .2s; }
        .f3 { left: 56%; width: 180px; height: 300px; background: radial-gradient(closest-side,#ffd166,#ff7a1a 40%, transparent 70%); animation: flameRise 2.6s ease-in-out infinite; animation-delay: .1s; }
        .f4 { left: 76%; width: 140px; height: 240px; background: radial-gradient(closest-side,#ff8c42,#ff3b3b 45%, transparent 70%); animation: flameRise 2.2s ease-in-out infinite; animation-delay: .35s; }

        .ember {
          position: absolute;
          bottom: 8%;
          width: 8px; height: 8px; border-radius: 50%;
          box-shadow: 0 0 14px 6px rgba(255,120,0,0.12);
          opacity: 0.8;
        }
        .e1 { left: 48%; animation: emberPulse 1.8s infinite; }
        .e2 { left: 68%; animation: emberPulse 2.2s infinite; animation-delay: .4s; }
        .e3 { left: 28%; animation: emberPulse 2s infinite; animation-delay: .15s; }

        @keyframes flameRise {
          0%   { transform: translateY(6%) scaleX(1); opacity: 0.82; filter: blur(36px); }
          30%  { transform: translateY(-8%) scaleX(1.05); opacity: 1; filter: blur(18px); }
          60%  { transform: translateY(-22%) scaleX(0.96); opacity: 0.9; filter: blur(34px); }
          100% { transform: translateY(6%) scaleX(1); opacity: 0.82; filter: blur(36px); }
        }
        @keyframes emberPulse {
          0% { transform: translateY(0) scale(1); opacity: .55; filter: blur(0.6px); }
          50% { transform: translateY(-28%) scale(1.25); opacity: 1; filter: blur(2px); }
          100% { transform: translateY(0) scale(1); opacity: .55; filter: blur(0.6px); }
        }
      `}</style>
    </div>
  );
}

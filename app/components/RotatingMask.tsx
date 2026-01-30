"use client";

export default function RotatingMask() {
  return (
    <div
      className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto"
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center animate-mask-rotate"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Mask shape: stylized face mask silhouette */}
        <div
          className="flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
            }}
          >
            <defs>
              <linearGradient
                id="mask-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
              <linearGradient
                id="mask-edge"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            {/* Outer mask face - oval with eye cutouts */}
            <ellipse
              cx="60"
              cy="62"
              rx="48"
              ry="52"
              fill="none"
              stroke="url(#mask-edge)"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M 22 58 Q 60 20 98 58 Q 60 96 22 58 Z"
              fill="url(#mask-gradient)"
              fillOpacity="0.95"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
            {/* Left eye */}
            <ellipse
              cx="42"
              cy="52"
              rx="10"
              ry="12"
              fill="#0f172a"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            {/* Right eye */}
            <ellipse
              cx="78"
              cy="52"
              rx="10"
              ry="12"
              fill="#0f172a"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            {/* Nose bridge */}
            <path
              d="M 58 52 L 62 72 L 60 74 Z"
              fill="rgba(15,23,42,0.8)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

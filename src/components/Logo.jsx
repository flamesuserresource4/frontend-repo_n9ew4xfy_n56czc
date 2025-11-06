import React from 'react';

const Logo = ({ size = 28, withText = true }) => {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_24px_rgba(16,185,129,0.35)]"
        aria-label="ANVATRA logo"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34d399" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="g2" x1="64" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <path d="M20 20c8-8 16-8 24 0 2.828 2.828 2.828 7.172 0 10-8 8-16 8-24 0-2.828-2.828-2.828-7.172 0-10z" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 44c-8 8-16 8-24 0-2.828-2.828-2.828-7.172 0-10 8-8 16-8 24 0 2.828 2.828 2.828 7.172 0 10z" stroke="url(#g2)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {withText && (
        <div className="leading-tight">
          <div className="text-lg font-extrabold tracking-tight">ANVATRA</div>
          <div className="text-[11px] tracking-wider uppercase text-white/60">IT Outsourcing</div>
        </div>
      )}
    </div>
  );
};

export default Logo;

import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #0A0A0A 0%, #111111 45%, #1A1A1A 100%)',
        borderRadius: 16,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 80,
          height: 80,
          background: 'rgba(255, 153, 0, 0.18)',
          filter: 'blur(30px)',
          borderRadius: '999px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 2,
          borderRadius: 14,
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      />

      {/* Letter */}
      <span
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: '#F5F5F5',
          fontFamily: 'Geist Sans, Inter, sans-serif',
          letterSpacing: '-0.05em',
          zIndex: 10,
        }}
      >
        N
      </span>
    </div>,
    {
      ...size,
    },
  );
}

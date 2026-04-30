import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AlisCore — Custom software and automation for US businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 55%, #14532d 100%)',
          padding: 72,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, color: '#fafafa' }}>AlisCore</div>
        <div style={{ marginTop: 20, fontSize: 32, fontWeight: 600, color: '#a7f3d0', maxWidth: 920, lineHeight: 1.25 }}>
          Custom software, workflow automation, and modernization for growing US businesses
        </div>
      </div>
    ),
    { ...size },
  );
}

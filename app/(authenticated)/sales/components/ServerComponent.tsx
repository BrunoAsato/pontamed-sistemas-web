import { headers } from 'next/headers';

export function getServerHost() {
  return headers().get('host') || 'localhost:3000';
}

export default function ServerComponent({ children }: { children: React.ReactNode }) {
  const host = getServerHost();
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__HOST__ = "${host}";`,
        }}
      />
    </>
  );
}

import type {
  Metadata,
  Viewport,
} from 'next';
import '@/styles/main.scss';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
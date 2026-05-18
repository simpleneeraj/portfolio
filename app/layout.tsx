import './globals.css';
import { metadata as portfolioMetadata } from '@/portfolio.config';

export const metadata = portfolioMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import Link from 'next/link';
import './global.css';
import Image from 'next/image';
import FooterTest from './components/footertest';
import Navbar from './components/navbar';

export const metadata = {
  title: 'Sebastian Álvarez',
  description: 'Un Alcalde para Pucón',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {' '}
        <Navbar></Navbar>
        {children}
        <FooterTest></FooterTest>
      </body>
    </html>
  );
}

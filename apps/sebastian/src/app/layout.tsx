import './global.css';

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
      <body>{children}</body>
    </html>
  );
}

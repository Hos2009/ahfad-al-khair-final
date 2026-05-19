import './globals.css'

export const metadata = {
  title: 'Ahfad Al-Khair',
  description: 'Asociación Humanitaria y Solidaria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

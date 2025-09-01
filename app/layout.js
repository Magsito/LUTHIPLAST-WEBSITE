import './globals.css'

export const metadata = {
  title: 'Luthiplast - Especialistas en Aluminio y Policarbonatos',
  description: 'Instalación profesional de ventanas, mamparas de aluminio, policarbonatos, paneles y techos sol y sombra en Lima, Perú',
  keywords: 'ventanas aluminio, mamparas, policarbonatos, techos sol sombra, Lima, Perú',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
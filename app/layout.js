// app/layout.js
import Navbar from '../components/Navbar'; // <--- 1. Importieren
// import './globals.css'; // (Falls du eine CSS Datei hast, sonst diese Zeile weglassen)

export const metadata = {
  title: 'Mein Wix Headless Shop',
  description: 'Erstellt mit Next.js und Wix Studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}> {/* Margin 0 entfernt den weißen Rand */}
        
        {/* 2. Hier wird die Navbar eingefügt */}
        <Navbar />

        {/* Hier wird der Inhalt der jeweiligen Seite (page.js) geladen */}
        <main style={{ minHeight: '80vh' }}>
            {children}
        </main>

        {/* Optional: Ein Footer */}
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #eaeaea', marginTop: '2rem' }}>
          © 2024 Mein Shop
        </footer>

      </body>
    </html>
  );
}
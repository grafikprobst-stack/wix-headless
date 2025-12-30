// app/layout.js

export const metadata = {
  title: 'Mein Wix Headless Shop',
  description: 'Erstellt mit Next.js und Wix Studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        {/* Hier wird deine page.js automatisch hineingeladen */}
        {children}
      </body>
    </html>
  );
}
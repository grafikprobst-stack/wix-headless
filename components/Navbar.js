// components/Navbar.js
import Link from 'next/link'; 

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #eaeaea',
      marginBottom: '2rem'
    }}>
      {/* Linke Seite: Logo / Shop Name */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
          WIX HEADLESS
        </Link>
      </div>

      {/* Rechte Seite: Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#555' }}>
          Produkte
        </Link>
        
        <Link href="/cart" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
          Warenkorb 🛒
        </Link>
      </div>
    </nav>
  );
}
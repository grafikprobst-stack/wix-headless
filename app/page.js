import { getWixClient } from '../lib/wixClient';
import AddToCart from '../components/AddToCart';
import Image from 'next/image'; // Optional: für optimierte Bilder

// Da es eine Server Component ist, können wir direkt "async" nutzen
export default async function Home() {
  const wixClient = getWixClient();

  // 1. Produkte vom Wix Backend holen
  const { items: products } = await wixClient.products.queryProducts().limit(10).find();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mein Wix Headless Shop</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            
            {/* Produktbild */}
            {product.media?.mainMedia?.image?.url && (
              <img 
                src={product.media.mainMedia.image.url} 
                alt={product.name} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
            )}

            {/* Produktdetails */}
            <h3>{product.name}</h3>
            
            {/* Preis formatieren (Wix liefert formatierten Preis oft mit) */}
            <p style={{ fontWeight: 'bold' }}>
              {product.priceData?.formatted?.price || product.price?.price + ' €'}
            </p>

            {/* Beschreibung (HTML entfernen für Vorschau) */}
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              {product.description?.replace(/<[^>]*>?/gm, '').substring(0, 50)}...
            </p>

            {/* Client Component für Interaktion einbinden */}
            <AddToCart productId={product._id} />
            
          </div>
        ))}
      </div>
    </main>
  );
}
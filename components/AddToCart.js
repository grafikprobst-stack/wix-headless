'use client'; 

import { useState } from 'react';
import { getWixClient } from '../lib/wixClient';

export default function AddToCart({ productId, variantId }) {
  const [loading, setLoading] = useState(false);
  const wixClient = getWixClient();

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      // Fügt das Produkt zum Wix-Warenkorb hinzu
      const { cart } = await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: '1380b703-ce81-ff05-f115-39571d94dfcd', // Standard Ecom App ID
              catalogItemId: productId,
              options: variantId ? { variantId } : undefined,
            },
            quantity: 1,
          },
        ],
      });
      
      alert('Produkt hinzugefügt! Warenkorb-Summe: ' + cart.subtotal.amount);
      console.log(cart);
      
    } catch (error) {
      console.error('Fehler beim Hinzufügen:', error);
      alert('Das hat leider nicht geklappt.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleAddToCart} 
      disabled={loading}
      style={{ padding: '10px 20px', background: 'black', color: 'white', cursor: 'pointer' }}
    >
      {loading ? 'Hinzufügen...' : 'In den Warenkorb'}
    </button>
  );
}
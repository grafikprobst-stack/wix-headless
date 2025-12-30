'use client';
import { getWixClient } from '../lib/wixClient';
import { redirects } from '@wix/redirects'; // npm install @wix/redirects nicht vergessen

export default function CheckoutButton() {
  const wixClient = getWixClient();

  const handleCheckout = async () => {
    // 1. Checkout erstellen
    const { checkoutId } = await wixClient.currentCart.createCheckoutFromCurrentCart({
      channelType: 'WEB',
    });

    // 2. Redirect URL generieren
    const { redirectSession } = await wixClient.redirects.createRedirectSession({
      ecomCheckout: { checkoutId },
      callbacks: {
        postFlowUrl: window.location.origin, // Zurück zur Startseite nach Kauf
        thankYouPageUrl: window.location.origin + '/danke',
        cartPageUrl: window.location.origin + '/cart'
      }
    });

    // 3. Nutzer zu Wix schicken zum Bezahlen
    window.location.href = redirectSession.fullUrl;
  };

  return <button onClick={handleCheckout}>Zur Kasse gehen</button>;
}
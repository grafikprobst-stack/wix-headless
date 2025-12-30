import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";

// Diese Instanz nutzen wir in der gesamten App
export const getWixClient = () => {
  return createClient({
    modules: {
      products,
      collections,
      currentCart,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      // Tokens werden automatisch verwaltet (LocalStorage/Cookies)
    }),
  });
};
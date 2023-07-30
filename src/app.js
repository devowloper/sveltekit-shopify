import { goto } from '$app/navigation';
import { session } from '$app/stores';
import { getCartItems } from './lib/store.js';

// Check if user has items in cart when app starts
getCartItems().then(cartItems => {
  if (cartItems.length > 0) {
    session.set({ cartItems });
  }
});

// Handle unhandled route to redirect to home page
export async function handle({ request, resolve }) {
  const response = await resolve(request);

  if (response.status === 404) {
    return goto('/');
  }

  return response;
}

// Load session data
export function getSession(request) {
  return {
    cartItems: request.locals.cartItems || [],
  };
}
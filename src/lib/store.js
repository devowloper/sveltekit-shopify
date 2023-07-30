import { writable } from 'svelte/store';
import { getProducts, getCart, addToCart as apiAddToCart, removeFromCart as apiRemoveFromCart, checkout as apiCheckout } from './api.js';

const createProductStore = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    fetch: async () => {
      const products = await getProducts();
      set(products);
    }
  };
};

const createCartStore = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    fetch: async () => {
      const cartItems = await getCart();
      set(cartItems);
    },
    addToCart: async (product) => {
      const updatedCart = await apiAddToCart(product);
      set(updatedCart);
    },
    removeFromCart: async (product) => {
      const updatedCart = await apiRemoveFromCart(product);
      set(updatedCart);
    },
    checkout: async () => {
      const result = await apiCheckout();
      set([]);
      return result;
    }
  };
};

export const product = createProductStore();
export const cart = createCartStore();
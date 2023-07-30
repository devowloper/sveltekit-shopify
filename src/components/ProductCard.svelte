<script>
  import { addToCart } from '../lib/store.js';
  export let product;
</script>

<div class="product-card" id="product-card-{product.id}">
  <img src={product.image} alt={product.title} class="product-image" />
  <h2 class="product-title">{product.title}</h2>
  <p class="product-description">{product.description}</p>
  <p class="product-price">${product.price}</p>
  <button class="add-to-cart-button" on:click={() => addToCart(product)}>
    Add to Cart
  </button>
</div>

<style>
  .product-card {
    @apply p-4 bg-white rounded-lg shadow-md;
  }
  .product-image {
    @apply w-full h-64 object-cover object-center rounded-lg;
  }
  .product-title {
    @apply mt-4 text-lg font-semibold;
  }
  .product-description {
    @apply mt-2 text-sm text-gray-600;
  }
  .product-price {
    @apply mt-2 text-lg font-bold text-blue-600;
  }
  .add-to-cart-button {
    @apply mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700;
  }
</style>
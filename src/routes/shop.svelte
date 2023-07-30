<script>
  import { onMount } from 'svelte';
  import { products } from '$lib/store.js';
  import ProductCard from '$components/ProductCard.svelte';
  import api from '$lib/api.js';

  let productList = [];

  onMount(async () => {
    productList = await api.getProducts();
  });
</script>

<style>
  .product-grid {
    @apply grid grid-cols-3 gap-4;
  }
</style>

<div class="product-grid">
  {#each productList as product (product.id)}
    <ProductCard {product} />
  {/each}
</div>
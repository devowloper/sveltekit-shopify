<script>
  import { onMount } from 'svelte';
  import { products } from '$lib/store.js';
  import ProductCard from '$components/ProductCard.svelte';
  
  let productList = [];

  onMount(async () => {
    productList = await products.get();
  });
</script>

<main class="flex flex-wrap justify-center">
  {#each productList as product (product.id)}
    <ProductCard {product} />
  {/each}
</main>
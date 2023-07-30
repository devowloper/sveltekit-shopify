<script>
  import { onMount } from 'svelte';
  import { fetchProduct } from '$lib/api.js';
  import ProductCard from '$components/ProductCard.svelte';
  let product = {};

  onMount(async () => {
    const { id } = $page.params;
    product = await fetchProduct(id);
  });
</script>

<main class="flex justify-center items-center h-screen">
  {#if product}
    <ProductCard {product} />
  {:else}
    <div>Loading...</div>
  {/if}
</main>
```svelte
<script>
  import { onMount } from 'svelte';
  import { cartItems, removeItem } from '../lib/store.js';

  export let item = {};

  onMount(async () => {
    // Fetch item details from Shopify API if needed
  });

  const handleRemove = () => {
    removeItem(item.id);
  };
</script>

<div class="cart-item flex justify-between items-center p-4 border-b border-gray-200">
  <div class="flex items-center">
    <img src={item.image} alt={item.title} class="w-16 h-16 object-cover mr-4" />
    <div>
      <h2 class="text-lg font-semibold">{item.title}</h2>
      <p class="text-sm text-gray-500">{item.variant}</p>
    </div>
  </div>
  <div class="flex items-center">
    <p class="text-lg font-semibold">${item.price}</p>
    <button class="ml-4 text-red-500" on:click={handleRemove}>Remove</button>
  </div>
</div>
```
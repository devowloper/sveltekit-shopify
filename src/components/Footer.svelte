```svelte
<script>
  import { year } from '$lib/utils.js';
</script>

<footer class="bg-gray-800 text-white py-6 px-4">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <h3 class="text-lg font-semibold">Shopify Store</h3>
      <p class="text-sm">Your favorite online store</p>
    </div>
    <div>
      <p class="text-sm">© {year} Shopify Store. All rights reserved.</p>
    </div>
  </div>
</footer>
```
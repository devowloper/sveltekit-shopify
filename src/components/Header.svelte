<script>
  import { goto } from '$app/navigation';
</script>

<header class="bg-white shadow">
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold leading-tight text-gray-900">
      Shopify Store
    </h1>
    <nav>
      <ul class="flex space-x-4">
        <li><a href="/" class="text-gray-500 hover:text-gray-900" on:click|preventDefault={() => goto('/')}>Home</a></li>
        <li><a href="/about" class="text-gray-500 hover:text-gray-900" on:click|preventDefault={() => goto('/about')}>About</a></li>
        <li><a href="/contact" class="text-gray-500 hover:text-gray-900" on:click|preventDefault={() => goto('/contact')}>Contact</a></li>
        <li><a href="/shop" class="text-gray-500 hover:text-gray-900" on:click|preventDefault={() => goto('/shop')}>Shop</a></li>
        <li><a href="/cart" class="text-gray-500 hover:text-gray-900" on:click|preventDefault={() => goto('/cart')}>Cart</a></li>
      </ul>
    </nav>
  </div>
</header>
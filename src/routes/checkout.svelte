<script>
  import { onMount } from 'svelte';
  import { cartItems, totalPrice, checkout } from '$lib/store.js';
  import CheckoutForm from '$components/CheckoutForm.svelte';

  let name = '';
  let email = '';
  let address = '';

  const handleCheckout = async () => {
    await checkout({ name, email, address });
  };

  onMount(async () => {
    // Fetch cart items and total price on mount
  });
</script>

<style>
  /* Add Tailwind CSS classes here */
</style>

<main class="container mx-auto px-6">
  <h1 class="text-3xl font-bold mt-4 mb-8">Checkout</h1>

  <div class="flex">
    <div class="w-3/4 pr-4">
      <CheckoutForm bind:name bind:email bind:address {handleCheckout} />
    </div>

    <div class="w-1/4 pl-4">
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-2xl font-bold mb-4">Order Summary</h2>

        {#each $cartItems as item (item.id)}
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-lg font-bold">{item.title}</h3>
              <p class="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p class="text-lg font-bold">${item.price * item.quantity}</p>
          </div>
        {/each}

        <hr class="my-4" />

        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-bold">Total</h3>
          <p class="text-lg font-bold">${$totalPrice}</p>
        </div>

        <button class="w-full bg-blue-500 text-white py-2 rounded" on:click={handleCheckout}>Checkout</button>
      </div>
    </div>
  </div>
</main>
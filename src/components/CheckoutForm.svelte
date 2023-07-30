<script>
  import { createEventDispatcher } from 'svelte';
  import { cartItems, checkout } from '../lib/store.js';

  let name = '';
  let email = '';
  let address = '';

  const dispatch = createEventDispatcher();

  function handleSubmit() {
    checkout({ name, email, address });
    dispatch('checkout');
  }
</script>

<div class="checkout-form">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" bind:value={name} required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" type="email" bind:value={email} required />
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input id="address" bind:value={address} required />
    </div>
    <button type="submit" class="btn btn-primary">Checkout</button>
  </form>
</div>

<style>
  .checkout-form {
    /* Tailwind CSS styles */
  }
  .form-group {
    /* Tailwind CSS styles */
  }
  .btn {
    /* Tailwind CSS styles */
  }
</style>
<script>
  import { onMount } from 'svelte';
  import { cartItems, totalPrice, removeItem } from '../lib/store.js';
  import CartItem from '../components/CartItem.svelte';

  let items = [];
  let total = 0;

  onMount(async () => {
    $cartItems.subscribe(value => {
      items = value;
    });

    $totalPrice.subscribe(value => {
      total = value;
    });
  });

  function handleRemoveItem(id) {
    removeItem(id);
  }
</script>

<style>
  .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="cart">
  <h1>Your Cart</h1>
  {#each items as item (item.id)}
    <CartItem {item} on:remove={handleRemoveItem} />
  {/each}
  <h2>Total: ${total}</h2>
  <button class="btn btn-primary">Checkout</button>
</div>
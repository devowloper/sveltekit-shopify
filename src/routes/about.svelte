<script>
  import { onMount } from 'svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  let aboutInfo = '';

  onMount(async () => {
    const res = await fetch('/api/about');
    aboutInfo = await res.text();
  });
</script>

<Header />

<main class="flex flex-col items-center justify-center min-h-screen py-2">
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 class="text-4xl font-bold text-center">About Us</h1>
    <p class="mt-4 text-center">{aboutInfo}</p>
  </div>
</main>

<Footer />
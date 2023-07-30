<script>
  import { error } from '$app/stores';
</script>

<main class="flex items-center justify-center h-screen bg-gray-100">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-red-500">Oops! An error occurred.</h1>
    <p class="mt-4 text-lg text-gray-700">{$error.message}</p>
    <a href="/" class="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600">Go Home</a>
  </div>
</main>
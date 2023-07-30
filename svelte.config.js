const preprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

module.exports = {
  kit: {
    adapter: node(),
    target: '#svelte',
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      },
      optimizeDeps: {
        include: ['@shopify/shopify-api']
      }
    }
  },
  preprocess: preprocess({
    postcss: true
  })
};
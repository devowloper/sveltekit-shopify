import { writable } from 'svelte/store';

const SHOPIFY_STOREFRONT_API_URL = 'https://your-shopify-store.myshopify.com/api/2021-04/graphql.json';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'your-shopify-storefront-access-token';

async function fetchGraphQL(query, { variables } = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(errors.map((error) => error.message).join('\n'));
  }

  return data;
}

export async function fetchAllProducts() {
  const query = `
    {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                }
              }
            }
          }
        }
      }
    }
  `;

  const { products } = await fetchGraphQL(query);

  return products.edges.map(({ node }) => node);
}

export async function fetchProductByHandle(handle) {
  const query = `
    {
      productByHandle(handle: "${handle}") {
        id
        title
        description
        images(first: 1) {
          edges {
            node {
              transformedSrc
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              price
            }
          }
        }
      }
    }
  `;

  const { productByHandle } = await fetchGraphQL(query);

  return productByHandle;
}
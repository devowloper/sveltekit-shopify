export function formatPrice(price) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export function getProductById(products, id) {
    return products.find(product => product.id === id);
}

export function getTotalPrice(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartItemCount(cartItems) {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}
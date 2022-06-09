const Cart = {
    render: () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        let cartItemsValue = 0;
        cartItems.forEach(cartItem => {
            cartItemsValue += cartItem.value;
        });
        return `<i class="bi bi-bag-check-fill"></i><span class="badge text-white bg-danger ms-1" style="font-size:8px">${cartItemsValue}</span>`
    }
}

export default Cart;
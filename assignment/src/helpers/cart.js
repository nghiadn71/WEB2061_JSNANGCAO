const cartKey = 'cart';

export const getCart = () => {
    const cartString = localStorage.getItem('cart');

    return JSON.parse(cartString) || '[]';
};

export const addCart = (item) => {

}
export const addItemToCart = (cartItems, cartItemToLoad) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToLoad.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToLoad.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToLoad, quantity: 1 }];
};

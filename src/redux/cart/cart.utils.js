export const addItem = (cartItems, itemToAdd) => {
  const isExisting = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
  console.log(isExisting);
  if (isExisting) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  const isItemExisting = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (isItemExisting.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === itemToRemove.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };
    } else {
      return cartItem;
    }
  });
};

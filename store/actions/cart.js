export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = service => {
  return {type: ADD_TO_CART, service: service};
};

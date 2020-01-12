import {ADD_TO_CART} from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedService = action.service;
      const servPrice = addedService.price;
      const servTitle = addedService.title;

      let updatedOrNewCartItem;

      if (items[addedService.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedService.id].quantity + 1,
          servPrice,
          servTitle,
          state.items[addedService.id].sum + servPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, servPrice, servTitle, servPrice);
      }
      return {
        ...state,
        items: {...state.items, [addedService.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + servPrice,
      };
  }
  return state;
};

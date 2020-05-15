import * as types from '../constants/types'

const INITIAL_STATE = {
  products: [],
  cart: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state, products: action.payload
      };

    case types.FILTER_PRODUCTS:
    return {
      ...state, products: [...state.products.sort((a, b) => a.price - b.price)]
    };

    case types.ADD_TO_CART:
    return {
      ...state, cart: [action.payload, ...state.cart]
    };
    case types.REMOVE_FROM_CART:
    return {
      ...state, cart: [...state.cart.filter((item) => item.prodId !== action.payload)]
    };
    default:
      return state
  }
}

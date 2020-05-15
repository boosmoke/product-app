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
        ...state, products: [...state.products.sort((a, b) => action.payload === 'isAvailable' ? ((a[action.payload] === b[action.payload])? 0 : a[action.payload]? -1 : 1) : action.payload !== 'price' ? a[action.payload].localeCompare(b[action.payload].split(' ')[0]) : a[action.payload] - b[action.payload])]
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

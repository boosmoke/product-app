import * as types from '../constants/types'

export const getProducts = () =>
  dispatch =>
    fetch(`ListJSONTest.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.GET_PRODUCTS,
          payload: response.List
        })
      })

export const filterProducts = filter => ({
  type: types.FILTER_PRODUCTS,
  payload: filter
})

export const addToCart = product => ({
  type: types.ADD_TO_CART,
  payload: product
})

export const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: id
})
import { combineReducers } from 'redux'
import storeReducer from './storeReducer'

const productApp = combineReducers({
  storeReducer
});

export default productApp
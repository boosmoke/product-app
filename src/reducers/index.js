import { combineReducers } from 'redux'
import storeReducer from './storeReducer'

const triviaApp = combineReducers({
  storeReducer
});

export default triviaApp
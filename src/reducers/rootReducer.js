import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import DataReducer from './DataReducer'

const rootReducer = combineReducers({
  Cart: CartReducer,
  Data: DataReducer,
})

export default rootReducer
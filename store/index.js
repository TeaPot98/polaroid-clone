import { applyMiddleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import shoppingCart from './shopping-cart/reducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  shoppingCart,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, 
      ...action.payload,
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return configureStore({
    reducer: reducer,
    // bindMiddleware([thunkMiddleware])
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(thunkMiddleware)
  })
}

const wrapper = createWrapper(initStore)

export default wrapper
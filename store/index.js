import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import shopping from './shopping/reducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  shopping,
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
  return createStore(
    reducer,
    bindMiddleware([thunkMiddleware])
    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware({
    //     thunk
    //   })
  )
}

const wrapper = createWrapper(initStore)

export default wrapper
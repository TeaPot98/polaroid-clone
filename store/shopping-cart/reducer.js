import { ShoppingBasketRounded } from '@mui/icons-material'
import { getCookie, setCookie } from '../useCookie'
import { actionShopping } from './action'

const  CARD = "CARD"

const shopInitialState = getCookie(CARD)

// Remove all items from shopping cart
const clear = () => {
  let shoppings = []
  setCookie(CARD, shoppings)
  return shoppings
}

// Remove one item from shopping cart
const removeShoppingCart = (data, state) => {
  const filtered = state.filter(item => item.product.id !== data.product.id)
  setCookie(CARD, filtered)
  return filtered
}

// Increase quantity of one item from shopping cart
const increment = (data, state) => {
  let isExisted = state.some(i => i.product.id === data.product.id)

  if (isExisted) {
    const updatedState = state.map(item => item.product.id === data.product.id ? {...item, quantity: item.quantity + 1} : item)

    setCookie(CARD, updatedState)
    return updatedState
  }

  return state
}

// Decrease quantity for one item from shopping cart
const decrement = (data, state) => {
  let isExisted = state.some(item => item.product.id === data.product.id)

  if (isExisted) {
    const updatedState = state.map(item => item.product.id === data.product.id ? {...item, quantity: item.quantity - 1} : item)

    setCookie(CARD, updatedState)
    return updatedState
  }

  return state
}

// Fetch shopping cart from Cookies
const getShopping = () => {
  return getCookie(CARD)
}

// Add element to the shopping cart. If element already added, increment its quantity with 1
const addShoppingCart = (data, state) => {
  let isExisted = state.some(item => item.product.id === data.product.id)
  if (isExisted) {
    const updatedState = state.map(item => item.product.id === data.product.id ? {...item, quantity: item.quantity + 1} : item)

    setCookie(CARD, updatedState)
  }
  
  setCookie(CARD, [...state, data])
  return [...state, data]
}

const reducer = (state = shopInitialState, action) => {
  const { type, payload } = action
  
  switch (type) {
    case actionShopping.ADD:
      return addShoppingCart(payload, state)
    case actionShopping.CLEAR:
      return clear()
    case actionShopping.INCREMENT: 
      return increment(payload, state)
    case actionShopping.DECREMENT:
      return decrement(payload, state)
    case actionShopping.REMOVE:
      return removeShoppingCart(payload, state)
    case actionShopping.FETCH:
    default:
      return getShopping()
  }
}

export default reducer

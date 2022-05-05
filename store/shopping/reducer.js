import { ShoppingBasketRounded } from '@mui/icons-material'
import { getCookie, setCookie } from '../useCookie'
import { actionShopping } from './action'

const  CARD = "CARD"

const shopInitialState = {
  shopping: getCookie(CARD)
}

// Remove all items from shopping cart
const clear = () => {
  let shoppings = []
  setCookie(CARD, shoppings)
  return shoppings
}

// Remove one item from shopping cart
const removeShoppingCart = (data) => {
  let shoppings = shopInitialState.shopping
  const filtered = shoppings.filter(item => item.product.id !== data.product.id)
  setCookie(CARD, filtered)
  return filtered
}

// Increase quantity of one item from shopping cart
const increment = (data) => {
  let shoppings = shopInitialState.shopping
  let isExisted = shoppings.some(i => i.product.id === data.product.id)

  if (isExisted) {
    shoppings.forEach(item => {
      if (item.product.id === data.product.id) {
        item.quantity += 1
      }
      return item
    })
  }

  setCookie(CARD, shoppings)
  return shoppings
}

// Decrease quantity for one item from shopping cart
const decrement = (data) => {
  let shoppings = shopInitialState.shopping
  let isExisted = shoppings.some(item => item.product.id === data.product.id)

  if (isExisted) {
    shoppings.forEach(item => {
      if (item.product.id === data.product.id) {
        item.quantity -= 1
      }
      return item
    })
  }

  setCookie(CARD, shoppings)
  return shoppings
}

// Fetch shopping cart from Cookies
const getShopping = () => {
  return getCookie(CARD)
}

// Add element to the shopping cart. If element already added, increment its quantity with 1
const addShoppingCart = (data) => {
  let shoppings = shopInitialState.shopping
  let isExisted = shoppings.some(item => item.product.id === data.product.id)

  if (isExisted) {
    shoppings.forEach(item => {
      if (item.product.id === data.product.id) {
        item.quantity += 1
      }
      return item
    })
  } else {
    shoppings.push(data)
  }

  setCookie(CARD, shoppings)
  console.log('Current state: ', shoppings)
  return shoppings
}

const reducer = (state = shopInitialState, action) => {
  const { type, payload } = action
  
  switch (type) {
    case actionShopping.ADD:
      console.log('New product added to cart:', payload)
      return {
        shopping: addShoppingCart(payload),
      }
    case actionShopping.CLEAR:
      return {
        shopping: clear(),
      }
    case actionShopping.INCREMENT: 
      return {
        shopping: increment(payload),
      }
    case actionShopping.DECREMENT:
      return {
        shopping: decrement(payload),
      }
    case actionShopping.REMOVE:
      return {
        shopping: removeShoppingCart(payload),
      }
    case actionShopping.FETCH:
    default:
      return {
        shopping: getShopping(),
      }
  }
}

export default reducer

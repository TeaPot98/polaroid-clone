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
  let shoppings = [...state]
  const filtered = shoppings.filter(item => item.product.id !== data.product.id)
  console.log('Filtered array from removeShoppingCart', filtered)
  setCookie(CARD, filtered)
  return filtered
}

// Increase quantity of one item from shopping cart
const increment = (data, state) => {
  let shoppings = [...state]
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
const decrement = (data, state) => {
  let shoppings = [...state]
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
const addShoppingCart = (data, state) => {
  let shoppings = [...state]
  console.log('Initial cookies when adding new item', shoppings)
  let isExisted = shoppings.some(item => item.product.id === data.product.id)
  console.log('Existing items vefore adding new one >>> ', shoppings)
  console.log('isExisted is', isExisted)
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

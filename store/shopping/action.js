export const actionShopping = {
  ADD: 'ADD',
  CLEAR: 'CLEAR',
  FETCH: 'FETCH',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  REMOVE: 'REMOVE',
}

export const addShopping = (product) => (dispatch) => {
  return dispatch({
    type: actionShopping.ADD,
    payload: {
      product: product,
      quantity: 1,
    }
  })
}

export const fetchShopping = () => (dispatch) => {
  return dispatch({
    type: actionShopping.FETCH,
  })
}

export const clearShopping = () => (dispatch) => {
  return dispatch({
    type: actionShopping.CLEAR,
  })
}

export const increment = (data) => (dispatch) => {
  return dispatch({
    type: actionShopping.INCREMENT,
    payload: data,
  })
}

export const decrement = (data) => (dispatch) => {
  return dispatch({
    type: actionShopping.DECREMENT,
    payload: data,
  })
}

export const remove = (data) => (dispatch) => {
  return dispatch({
    type: actionShopping.REMOVE,
    payload: data,
  })
}
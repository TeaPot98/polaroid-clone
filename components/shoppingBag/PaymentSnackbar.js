import React ,{ useState, useEffect } from 'react'
import {
  Snackbar,
  Alert,
} from '@mui/material'
import { useRouter } from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clearShopping } from '../../store/shopping-cart/action'

const PaymentSnackbar = ({ clearShopping }) => {
  const router = useRouter()
  // console.log('Router >>>', router)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  useEffect(() => {
    if (router.query.status) {
      setSnackbarOpen(true)
      if (router.query.status === "success") {
        clearShopping()
      }
    }
  }, [router.query])

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
      <Alert onClose={handleSnackbarClose} severity={router.query.status && router.query.status === "success" ? "success" : "error"}>
        {router.query.status === 'success' ? 'Successful payment!' : 'Payment failed!'}
      </Alert>
    </Snackbar>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearShopping: bindActionCreators(clearShopping, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(PaymentSnackbar)

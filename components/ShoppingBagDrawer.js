import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from '@mui/material'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CloseIcon from '@mui/icons-material/Close'

import { clearShopping } from '../store/shopping/action'
import { useRouter } from 'next/router'

import ShoppingBagItem from './ShoppingBagItem'

const ShoppingBagDrawer = ({ open, onClose, cartContent, clearShopping }) => {
  const router = useRouter()
  console.log('Router >>>', router)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  useEffect(() => {
    if (router.query.status) {
      setSnackbarOpen(true)
    }
  }, [router.query])

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: {
        xs: '100vw',
        sm: '450px'
      },
      height: '100%',
      p: 3,
      color: 'black',
    },
    headingContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    heading: {
      fontFamily: 'Real Head',
      fontSize: '1.8rem',
    },
    closeIcon: {
      color: 'black'
    },
    bagContent: {
      flex: 1,
      height: '100%',
      overflowY: 'auto',
    },
    totalPriceContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    price: {
      fontFamily: 'Real Head',
      fontSize: '1.7rem',
    },
    checkoutButton: {
      backgroundColor: '#000',
      color: '#fff',
      my: 2,
      p: 2,
      borderRadius: 15,
      textTransform: 'none',
      fontSize: '1rem',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black',
      }
    }
  }

  const items = cartContent.map(item => {
    return {
      name: 'Apple AirPods',
      description: 'Latest Apple AirPods.',
      image:
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      quantity: 1,
      price: 999,
    }
  })

  console.log('Cart content', cartContent)

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  // Get the Stripe Session for the checkout
  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/checkout_sessions', {
      items: items,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  
  return (
    <>
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onClose}
    >
      <Box
        sx={styles.container}
      >
        <Box sx={styles.headingContainer}>
          <Typography sx={styles.heading}>
            Your Bag ({cartContent.length})
          </Typography>
          <IconButton onClick={onClose} disableRipple>
            <CloseIcon fontSize="large" sx={styles.closeIcon} />
          </IconButton>
        </Box>
        <Box sx={styles.bagContent}>
          {cartContent.map((item, i) =>
            <ShoppingBagItem 
              key={i} 
              id={item.product.id}
            />
          )}
        </Box>
        <Box sx={styles.checkoutContainer}>
          <Box sx={styles.totalPriceContainer}>
            <Typography>Subtotal:</Typography>
            <Typography sx={styles.price}>${cartContent.reduce((a, b) => a + b.product.price, 0)}</Typography>
          </Box>
            <Button
              variant="contained"
              disableElevation
              sx={styles.checkoutButton}
              fullWidth
              disableRipple
              onClick={createCheckOutSession}
            >
              Checkout
            </Button>
        </Box>
      </Box>
    </Drawer>
    <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
      <Alert onClose={handleSnackbarClose} severity={router.query.status && router.query.status === "success" ? "success" : "error"}>
        {router.query.status === 'success' ? 'Successful payment!' : 'Payment failed!'}
      </Alert>
    </Snackbar>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearShopping: bindActionCreators(clearShopping, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(ShoppingBagDrawer)
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React from 'react'
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CloseIcon from '@mui/icons-material/Close'

import { clearShopping } from '../../store/shopping-cart/action'

import ShoppingBagItem from './ShoppingBagItem'
import PaymentSnackbar from './PaymentSnackbar'

const ShoppingBagDrawer = ({ open, onClose, shoppingCart }) => {
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

  const items = shoppingCart.map(item => {
    return {
      name: item.product.name,
      description: 'Original Polaroid product',
      image: item.product.image,
      quantity: item.quantity,
      price: item.product.price,
    }
  })

  // console.log('Cart content', shoppingCart)

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
            Your Bag ({shoppingCart.length})
          </Typography>
          <IconButton onClick={onClose} disableRipple>
            <CloseIcon fontSize="large" sx={styles.closeIcon} />
          </IconButton>
        </Box>
        <Box sx={styles.bagContent}>
          {shoppingCart.map((item, i) =>
            <ShoppingBagItem 
              key={i} 
              id={item.product.id}
            />
          )}
        </Box>
        <Box sx={styles.checkoutContainer}>
          <Box sx={styles.totalPriceContainer}>
            <Typography>Subtotal:</Typography>
            <Typography sx={styles.price}>${shoppingCart.reduce((a, b) => a + (b.product.price * b.quantity), 0).toFixed(2)}</Typography>
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
    <PaymentSnackbar />
    </>
  )
}

const mapStateToProps = (state) => {
  // console.log('State from mapStateTopProps >>>', state)
  return {
    shoppingCart: state.shoppingCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearShopping: bindActionCreators(clearShopping, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBagDrawer)

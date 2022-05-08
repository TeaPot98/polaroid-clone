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

import { remove, increment, decrement, clearShopping } from '../store/shopping-cart/action'

import ShoppingBagItem from './ShoppingBagItem'

const ShoppingBagDrawer = ({ open, onClose, shoppingCart, clearShopping }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: '450px',
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

  
  return (
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
              // remove={remove}
              // increment={increment}
              // decrement={decrement}
            />
          )}
        </Box>
        <Box sx={styles.checkoutContainer}>
          <Box sx={styles.totalPriceContainer}>
            <Typography>Subtotal:</Typography>
            <Typography sx={styles.price}>${shoppingCart.reduce((a, b) => a + b.product.price, 0)}</Typography>
          </Box>
          <Button
            variant="contained"
            disableElevation
            sx={styles.checkoutButton}
            fullWidth
            disableRipple
            onClick={() => clearShopping()}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

const mapStateToProps = (state) => {
  console.log('State from mapStateTopProps >>>', state)
  return {
    shoppingCart: state.shoppingCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearShopping: bindActionCreators(clearShopping, dispatch),
    // clear: bindActionCreators(clearShopping, dispatch),
  }
}

// TopBar.getInitialProps = ({ store }) => {
//   return {}
// }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBagDrawer)
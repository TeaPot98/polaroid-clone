import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import ShoppingBagItem from './ShoppingBagItem'

const ShoppingBagDrawer = ({ open, onClose }) => {
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
            Your Bag ()
          </Typography>
          <IconButton onClick={onClose} disableRipple>
            <CloseIcon fontSize="large" sx={styles.closeIcon} />
          </IconButton>
        </Box>
        <Box sx={styles.bagContent}>
          {[1, 2, 3, 4, 5, 6].map(i =>
            <ShoppingBagItem key={i} />
          )}
        </Box>
        <Box sx={styles.checkoutContainer}>
          <Box sx={styles.totalPriceContainer}>
            <Typography>Subtotal:</Typography>
            <Typography sx={styles.price}>$129.99</Typography>
          </Box>
          <Button
            variant="contained"
            disableElevation
            sx={styles.checkoutButton}
            fullWidth
            disableRipple
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default ShoppingBagDrawer
import {
  Box,
  Typography,
  IconButton,
  Button,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove, increment, decrement } from '../../store/shopping-cart/action'

const ShoppingBagItemOptions = ({ remove, increment, decrement, item }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    quantityPicker: {
      display: 'flex',
      alignItems: 'center',
      gap: 2.5,
    },
    quantityButton: {
      border: '1px solid lightGray',
      p: 0.5,
      '&:hover .quantity-button-icon': {
        color: 'dimGray',
      }
    },
    buttonIcon: {
      fontSize: '1.1rem',
      color: 'black',
      transition: 'color 0.1s',
    },
    removeButton: {
      color: 'gray',
      textTransform: 'none',
      textDecoration: 'underline',
      fontSize: '0.8rem',
      '&:hover': {
      textDecoration: 'underline',
      }
    },
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.quantityPicker}>
        <IconButton 
          sx={styles.quantityButton} 
          onClick={() => item.quantity > 1 ? decrement(item) : remove(item)}
          disableRipple
        >
          <RemoveIcon 
            sx={styles.buttonIcon} 
            fontSize="small" 
            className="quantity-button-icon"
          />
        </IconButton>
        <Typography sx={styles.quantity}>
          {item.quantity}
        </Typography>
        <IconButton 
          sx={styles.quantityButton} 
          onClick={() => increment(item)}
          disableRipple
        >
          <AddIcon 
            sx={styles.buttonIcon} 
            fontSize="small" 
            className="quantity-button-icon"
          />
        </IconButton>
      </Box>
      <Button sx={styles.removeButton} onClick={() => remove(item)} disableRipple>
        Remove
      </Button>
    </Box>
  )
}

// Passing Redux functions that component will use
const mapDispatchToProps = (dispatch) => {
  return {
    remove: bindActionCreators(remove, dispatch),
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(ShoppingBagItemOptions)
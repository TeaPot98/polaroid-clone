import {
  Box,
  Typography,
  Divider,
} from '@mui/material'
import { connect } from 'react-redux'

import Image from 'next/image'

import ImageWrapper from '../ImageWrapper'
import ShoppingBagItemOptions from './ShoppingBagItemOptions'

const ShoppingBagItem = ({ id, shoppingCart }) => {
  const item = shoppingCart.find(i => i.product.id === id)
  console.log(shoppingCart)
  
  const styles = {
    container: {
      my: 2,
    },
    optionsContainer: {
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
    divider: {
      my: 1,
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.name}>
        {item.product.name}
      </Typography>
      <Typography sx={styles.price}>
        {item.product.price}
      </Typography>
      <ImageWrapper width="80px">
        <Image 
          src={item.product.image}
          alt={item.product.name}
          layout="fill"
        />
      </ImageWrapper>
      <ShoppingBagItemOptions item={item} />
      <Divider sx={styles.divider} />
    </Box>
  )
}

// Passing Redux state props that component will use
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart
  }
}

export default connect(mapStateToProps, null)(ShoppingBagItem)
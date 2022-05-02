import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove';

import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

const ShoppingBagItem = () => {
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
    },
    divider: {
      my: 1,
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.name}>
        Polaroid Now i-Type Instant Camera - White
      </Typography>
      <Typography sx={styles.price}>
        $129.99
      </Typography>
      <ImageWrapper width="80px">
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_front-tilted_76818978-1bc2-45b2-a1f0-b5598abe1d3d_240x240.png?v=1643359177"
          alt="Polaroid Now"
          layout="fill"
        />
      </ImageWrapper>
      <Box sx={styles.optionsContainer}>
        <Box sx={styles.quantityPicker}>
          <IconButton 
            sx={styles.quantityButton} 
            disableRipple
          >
            <RemoveIcon 
              sx={styles.buttonIcon} 
              fontSize="small" 
              className="quantity-button-icon"
            />
          </IconButton>
          <Typography sx={styles.quantity}>
            1
          </Typography>
          <IconButton 
            sx={styles.quantityButton} 
            disableRipple
          >
            <AddIcon 
              sx={styles.buttonIcon} 
              fontSize="small" 
              className="quantity-button-icon"
            />
          </IconButton>
        </Box>
        <Button sx={styles.removeButton} disableRipple>
          Remove
        </Button>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  )
}

export default ShoppingBagItem
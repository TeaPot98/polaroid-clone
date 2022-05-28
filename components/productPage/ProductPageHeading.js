import React from 'react'
import {
  Box,
  Typography,
  Button,
} from '@mui/material'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addShopping } from '../../store/shopping-cart/action'

import ProductGallery from './ProductGallery'
import ColorButton from './ColorButton'
import ProductPageTabs from './ProductPageTabs'

const ProductPageHeading = ({ productModel, product, addShopping }) => {
  const styles = {
    headingContainer: {
      width: '100%',
      display: 'grid',
      gap: 4,
      gridTemplateColumns: {
        xs: '100%',
        md: '60% 30%',
      }
    },
    productGallery: {
      // flexBasis: '60%'
    },
    productHeading: {
      // flexBasis: '30%'
    },
    productName: {
      fontFamily: 'Real Head',
      fontSize: '2.5rem',
      lineHeight: 1
    },
    productPrice: {
      fontFamily: 'Real Head',
      fontSize: '1.5rem',
      mt: 1,
    },
    colorPickerContainer: {
      mt: 2,
      mb: 1,
    },
    addToBagButton: {
      backgroundColor: '#000',
      color: '#fff',
      my: 2,
      p: 2,
      borderRadius: 15,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#198cd9'
      }
    },
  }
  
  return (
    <Box sx={styles.headingContainer}>
      <Box sx={styles.productGallery}>
        <ProductGallery 
          images={product.images}
        />
      </Box>
      <Box sx={styles.productHeading}>
        <Typography sx={styles.productName}>
          {`Polaroid ${productModel.model}`}
        </Typography>
        <Typography sx={styles.productPrice}>
          ${productModel.price}
        </Typography>
        <Box sx={styles.colorPickerContainer}>
          <Typography>{product.name}</Typography>
          <Box>
            {productModel.products.map(p => 
              <ColorButton
                key={p.id}
                href={`/collections/instant-cameras/${productModel.model}/${p.id}`} 
                color={p.color}
                isActive={product.id === p.id}
              />
            )}
          </Box>
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={styles.addToBagButton}
          fullWidth
          disableRipple
          onClick={() => addShopping({
            id: product.id,
            name: `Polaroid ${productModel.model} ${product.name}`,
            image: product.images[0],
            price: productModel.price,
          })}
        >
          + Add To Bag
        </Button>
        <Box>
          {productModel.shortSpecifications.length > 0 ?
            <>
              <ProductPageTabs productModel={productModel} />
            </> :
            <Typography>
              {productModel.productPageDescription}
            </Typography>
          }
        </Box>
      </Box>
    </Box>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShopping: bindActionCreators(addShopping, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ProductPageHeading)
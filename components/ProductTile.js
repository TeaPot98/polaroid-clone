import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'

import ImageWrapper from './ImageWrapper'

const ProductTile = ({ productModel, product }) => {
  const styles = {
    modelProduct: {
      mx: 2,
      p: 2,
      cursor: 'pointer',
      transition: 'box-shadow 0.2s ease-in-out',
      '&:hover': {
        boxShadow: '0px 0px 20px lightgrey',
      }
    },
    productNameContainer: {
      display: 'flex',
      mt: 1
    },
    productName: {
      fontSize: '1.2rem',
      fontFamily: 'Real Head'
    },
    productPrice: {
      ml: 1,
      fontSize: '1.2rem'
    }
  }
  
  return (
    <Link href={`/collections/instant-cameras/${productModel.model}/${product.id}`}>
      <Box sx={styles.modelProduct}>
        <ImageWrapper>
          <Image
            src={product.images[0]}
            alt={productModel.model}
            layout="fill"
          />
        </ImageWrapper>
        <Box sx={styles.productNameContainer}>
          <Typography sx={styles.productName}>
            Polaroid {productModel.model} - {product.name}
          </Typography>
          <Typography sx={styles.productPrice}>
            ${productModel.price}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default ProductTile
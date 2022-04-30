import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'


const ProductTile = ({ product, productColor }) => {
  const styles = {
    modelProduct: {
      // backgroundColor: 'red',
      mx: 2,
      p: 2,
      // width: '150px',
      // height: '300px'
      // border: ''
      cursor: 'pointer',
      transition: 'box-shadow 0.2s ease-in-out',
      '&:hover': {
        boxShadow: '0px 0px 20px lightgrey',
        // boxShadow: '0px 0px 5px grey'
      }
    },
    productImageWrapper: {
      // backgroundColor: 'red',
      width: '100%',
      '& > span > img': {
        width: '100% !important',
        height: 'unset !important',
        position: 'relative !important',
        objectFit: 'contain',
      },
      '& > span': {
        position: 'unset !important'
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

  // console.log(productColor)
  
  return (
    <Link href={`/collections/instant-cameras/${product.model}/${productColor.id}`}>
      <Box sx={styles.modelProduct}>
        <Box sx={styles.productImageWrapper}>
          <Image
            src={productColor.images[0]}
            alt={product.model}
            layout="fill"
          />
        </Box>
        <Box sx={styles.productNameContainer}>
          <Typography sx={styles.productName}>
            Polaroid {product.model} - {productColor.name}
          </Typography>
          <Typography sx={styles.productPrice}>
            ${product.price}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default ProductTile
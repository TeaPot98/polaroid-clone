import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'


const ProductTile = () => {
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
      fontSize: '1.2rem'
    }
  }
  
  return (
    <Link href="/collections/64752">
      <Box sx={styles.modelProduct}>
        <Box sx={styles.productImageWrapper}>
          <Image
            src="http://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_front-tilted_76818978-1bc2-45b2-a1f0-b5598abe1d3d_1024x1024.png?v=1643359177"
            alt="Polaroid Now Camera"
            layout="fill"
          />
        </Box>
        <Box sx={styles.productNameContainer}>
          <Typography sx={styles.productName}>
            Polaroid Now+ Starter Set
          </Typography>
          <Typography sx={styles.productPrice}>
            $179.99
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default ProductTile
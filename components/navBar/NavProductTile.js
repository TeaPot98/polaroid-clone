import {
  Box,
  Typography,
} from '@mui/material'

import Link from 'next/link'
import Image from 'next/image'

import ImageWrapper from '../ImageWrapper'

const NavProductTile = ({ product }) => {
  const styles = {
    product: {
      display: 'flex',
      justifyContent: 'center',
      height: '300px',
      width: '100%',
      backgroundColor: theme => theme.palette.primary.container,
      flex: 1,
      cursor: 'pointer',
      p: 2,
    },
    title: {
      fontFamily: 'Real Head',
      fontSize: '1.2rem',
      lineHeight: 2,
    },
    description: {
      fontSize: '0.8rem',
      fontWeight: 400
    }
  }
  
  return (
    <Link key={product.id} href={`/collections/instant-cameras/${product.model}`}>
      <Box sx={styles.product}>
        <ImageWrapper width="150px">
          <Image
            src={product.image}
            alt="Polaroid"
            layout="fill"
          />
          <Typography sx={styles.title}>
            {product.name}
          </Typography>
          <Typography sx={styles.description}>
            {product.description}
          </Typography>
        </ImageWrapper>
      </Box>
    </Link>
  )
}

export default NavProductTile
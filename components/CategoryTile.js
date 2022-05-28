import {
  Box,
  Typography,
  Button,
} from '@mui/material'

import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

const CategoryTile = ({ image, name, link }) => {
  const styles = {
    container: {
      position: 'relative',
    },
    contentWrapper: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2,
      alignItems: 'center',
      bottom: {
        xs: '1rem',
        md: '2rem'
      },
      zIndex: 1,
    },
    name: {
      fontSize: '2rem',
      color: 'white',
      fontFamily: 'Real Head',
    },
    shopNowButton: {
      textTransform: 'none',
      borderRadius: 20,
      py: 1.5,
      px: 3,
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      }
    },
    shopNowButtonText: {
      fontFamily: 'Real Head',
    },
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.name}>
          {name}
        </Typography>
        <Button variant="contained" sx={styles.shopNowButton} href={link} disableElevation>
          <Typography sx={styles.shopNowButtonText}>
            Shop now
          </Typography>
        </Button>
      </Box>
      <ImageWrapper>
        <Image 
          src={image}
          alt={name}
          layout="fill"
        />
      </ImageWrapper>
    </Box>
  )
}

export default CategoryTile
import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

const ImageFeature = ({ 
  name,
  description,
  image,
  reverse=false, 
}) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      mx: 3,
      my: 8,
    },
    textWrapper: {
      flexBasis: '40%',
      px: 6,
    },
    name: {
      fontFamily: 'Real Head',
      fontSize: '3.7rem',
      lineHeight: 1,
      mb: 4
    },
    description: {
      // fontFamily: 'Real Head',
      fontSize: '1.3rem'
    },
    imageWrapper: {
      flexBasis: '60%',
      width: '100%',
    },
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.textWrapper}>
        <Typography sx={styles.name}>
          {name}
        </Typography>
        <Typography sx={styles.description}>
          {description}
        </Typography>
      </Box>
      <Box sx={styles.imageWrapper}>
        <ImageWrapper>
          <Image 
            src={image}
            alt={name}
            layout="fill"
          />
        </ImageWrapper>
      </Box>
    </Box>
  )
}

export default ImageFeature
import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

const HeroSection = ({ 
  image,
  category,
  title,
  description,
  textColor,
 }) => {
  const styles = {
    hero: {
      position: 'relative',
      width: '100%',
    },
    heroTextWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: textColor,
      width: '40%',
      height: '100%',
      position: 'absolute',
      bottom: '3rem',
      left: '2rem',
      zIndex: 1,
    },
    categoryText: {
      // color: textColor,
      fontFamily: 'Real Head',
      fontSize: '1.5rem',
    },
    titleText: {
      // color: textColor,
      fontFamily: 'Real Head',
      lineHeight: 1,
      fontSize: '4.2rem',
      mb: 2,
    },
    heroDescription: {
      // color: textColor,
      fontSize: '1.5rem',
    },
  }
  
  return (
    <Box sx={styles.hero} component="section">
      <Box sx={styles.heroTextWrapper}>
        <Typography sx={styles.categoryText}>
          {category}
        </Typography>
        <Typography sx={styles.titleText}>
          {title}
        </Typography>
        <Typography sx={styles.heroDescription}>
          {description}
        </Typography>
      </Box>
      <ImageWrapper>
        <Image 
          src={image}
          alt="Hero area image"
          layout="fill"
        />
      </ImageWrapper>
    </Box>
  )
}

export default HeroSection
import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

const HeroSection = ({ 
  image,
  mobileImage,
  category,
  title,
  description,
  mobileDescription,
  textColor,
  children,
 }) => {
  const styles = {
    hero: {
      position: 'relative',
      width: '100%',
    },
    heroTextWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: {
        xs: 'top',
        sm: 'center'
      },
      color: textColor,
      width: {
        xs: 'unset',
        sm: '65%'
      },
      height: '100%',
      position: 'absolute',
      // bottom: '3rem',
      left: '2rem',
      my: {
        xs: 2,
        sm: 'auto'
      },
      zIndex: 1,
    },
    categoryText: {
      // color: textColor,
      fontFamily: 'Real Head',
      fontSize: '1.5rem',
      textAlign: {
        xs: 'center',
        sm: 'unset',
      }
    },
    titleText: {
      // color: textColor,
      fontFamily: 'Real Head',
      lineHeight: 1,
      fontSize: '3.8rem',
      mb: 2,
      textAlign: {
        xs: 'center',
        sm: 'unset',
      }
    },
    heroDescription: {
      // color: textColor,
      display: {
        xs: 'none',
        sm: 'unset'
      },
      fontSize: '1.5rem',
    },
    heroMobileDescription: {
      // color: textColor,
      display: {
        xs: 'unset',
        sm: 'none'
      },
      fontSize: '1.5rem',
      textAlign: 'center',
    },
    image: {
      display: {
        xs: 'none',
        sm: 'block'
      }
    },
    mobileImage: {
      display: {
        xs: 'block',
        sm: 'none',
      }
    }
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
        <Typography sx={styles.heroMobileDescription}>
          {mobileDescription}
        </Typography>
        {children}
      </Box>
      <ImageWrapper sx={styles.image}>
        <Image 
          src={image}
          alt="Hero area image"
          layout="fill"
        />
      </ImageWrapper>
      <ImageWrapper sx={styles.mobileImage}>
        <Image 
          src={mobileImage}
          alt="Hero area image"
          layout="fill"
        />
      </ImageWrapper>
    </Box>
  )
}

export default HeroSection
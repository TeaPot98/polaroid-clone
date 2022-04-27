import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

const HeroSection = ({ 
  image,
  category,
  title,
  description,
 }) => {
  const styles = {
    hero: {
      position: 'relative',
      // backgroundImage: 'url("//cdn.shopify.com/s/files/1/1162/8964/files/image_collections_polaroid-printers_desktop_1800x.jpg?v=1609752279")',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // height: '300px',
      width: '100%',
    },
    heroTextWrapper: {
      width: '40%',
      position: 'absolute',
      bottom: '3rem',
      left: '2rem',
      zIndex: 1,
    },
    categoryText: {
      fontFamily: 'Real Head',
      fontSize: '1.5rem',
    },
    titleText: {
      fontFamily: 'Real Head',
      lineHeight: 1,
      fontSize: '4.2rem',
      mb: 2,
    },
    heroDescription: {
      fontSize: '1.5rem',
    },
    heroImageWrapper: {
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
      // '& > img': {
      //   maxWidth: '300px !important',
      //   height: 'auto',
      //   position: 'static !important',
      // }
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
      <Box sx={styles.heroImageWrapper}>
        <Image 
          src={image}
          alt="Hero area image"
          layout="fill"
        />
      </Box>
    </Box>
  )
}

export default HeroSection
import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

const ImageFeature = ({ reverse=false }) => {
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
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.textWrapper}>
        <Typography sx={styles.name}>
          Autofocus 2-lens system
        </Typography>
        <Typography sx={styles.description}>
          In other words: sharper photos, easily. The Polaroid Now decides which lens is suitable, so you get beautiful portraits in more places, more often - even without the flash.
        </Typography>
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/files/now_black-polaroid-camera_009028_feature-1_desktop_1136x.jpg?v=1585210139"
          alt="Feature"
          layout="fill"
        />
      </Box>
    </Box>
  )
}

export default ImageFeature
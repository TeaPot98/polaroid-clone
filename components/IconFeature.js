import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

const IconFeature = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      px: 2,
      gap: 1.5,
    },
    imgWrapper: {
      width: '80px',
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
    name: {
      fontFamily: 'Real Head',
      fontSize: '1.3rem',

    }
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imgWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/files/icon_flash.svg?v=13317334575094521199"
          alt="Icon"
          layout="fill"
        />
      </Box>
      <Typography sx={styles.name}>
        Accurate Flash
      </Typography>
      <Typography sx={styles.description}>
        A more human-friendly flash to make everyone look like they should.
      </Typography>
    </Box>
  )
}

export default IconFeature
import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

const IconFeature = ({
  name,
  description,
  image,
}) => {
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
          src={image}
          alt={name}
          layout="fill"
        />
      </Box>
      <Typography sx={styles.name}>
        {name}
      </Typography>
      <Typography sx={styles.description}>
        {description}
      </Typography>
    </Box>
  )
}

export default IconFeature
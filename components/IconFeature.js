import {
  Box,
  Typography,
} from '@mui/material'

import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

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
    name: {
      fontFamily: 'Real Head',
      fontSize: '1.3rem',
    }
  }
  
  return (
    <Box sx={styles.container}>
      <ImageWrapper width="80px">
        <Image 
          src={image}
          alt={name}
          layout="fill"
        />
      </ImageWrapper>
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
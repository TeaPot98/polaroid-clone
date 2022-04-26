import {
  Box,
  Typography,
} from '@mui/material'

import { styled } from '@mui/system'
import { useTheme } from '@emotion/react'

import DefaultCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import ProductTile from './ProductTile'

const Carousel = styled(DefaultCarousel)({
  width: '100%'
})

const ModelSection = () => {
  const theme = useTheme()

  const styles = {
    modelContainer: {
      display: 'flex',
      // width: '100%',
      // gridTemplateColumns: '400px 1fr'
    },
    modelName: {
      fontSize: '2rem',
      my: 2
    },
    modelDescription: {
      // display: 'inline-block',
      backgroundColor: theme.palette.secondary.orange,
      color: 'white',
      flex: '1 0 400px',
      height: '625px',
      p: 4,
      mr: 2,
    },
    modelDescriptionText: {
      fontSize: '1.5rem'
    },
    modelFilm: {
      mt: 2,
      fontSize: '1.3rem'
    },
    modelProductsCarousel: {
      // display: 'inline-block',
      height: '625px',
      // flex: '1',
      width: '90%',
    },
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  
  return (
    <Box sx={styles.modelContainer}>
      <Box sx={styles.modelDescription}>
        <Typography sx={styles.modelName}>
          Now+
        </Typography>
        <Typography sx={styles.modelDescriptionText}>
          Our most creative camera yet. Unlock extra creative tools inside the Polaroid mobile app, or mix it up with lens filters. A connected analog instant camera for more creativity.
        </Typography>
        <Typography sx={styles.modelFilm}>
          {`Works with: \n i-Type & 600 Film`}
        </Typography>
      </Box>
      {/* <Box sx={styles.modelProductsCarousel}> */}
        <Carousel
          responsive={responsive}
          autoPlay={false}
        >
          {[1, 2, 3, 4, 5].map(p => 
            <ProductTile key={p} />
          )}
        </Carousel>
      {/* </Box> */}
    </Box>
  )
}

export default ModelSection
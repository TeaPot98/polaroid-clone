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

const ModelSection = ({
  model,
  index,
}) => {
  const theme = useTheme()

  const styles = {
    modelContainer: {
      display: {
        sm: 'block',
        md: 'flex',
      },
      // flexDirection: {
      //   sm: 'column',

      // }
      // width: '100%',
      // gridTemplateColumns: '400px 1fr'
    },
    modelName: {
      fontSize: '2rem',
      my: 2
    },
    modelDescription: {
      // display: 'inline-block',
      backgroundColor: index < 5 ? 
      theme.palette.polaroid[Object.keys(theme.palette.polaroid)[i]] :
      theme.palette.polaroid[Object.keys(theme.palette.polaroid)[i % 5]],
      color: 'white',
      flex: '1 0 400px',
      height: {
        sm: 'unset',
        md: '625px'
      },
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
      breakpoint: { max: 3000, min: 900 },
      items: 2.5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 1.5,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  
  return (
    <Box sx={styles.modelContainer}>
      <Box sx={styles.modelDescription}>
        <Typography sx={styles.modelName}>
          {model.model}
        </Typography>
        <Typography sx={styles.modelDescriptionText}>
          {model.heroDescription}
        </Typography>
        <Typography sx={styles.modelFilm}>
          {`Works with: \n ${model.film[0]} ${model.film.length > 1 ? 
          ('& ' + model.film[1]) : ''} Film`}
        </Typography>
      </Box>
      {/* <Box sx={styles.modelProductsCarousel}> */}
        <Carousel
          responsive={responsive}
          autoPlay={false}
        >
          {model.products.map(p => 
            <ProductTile key={p.id} product={model} productColor={p} />
          )}
        </Carousel>
      {/* </Box> */}
    </Box>
  )
}

export default ModelSection
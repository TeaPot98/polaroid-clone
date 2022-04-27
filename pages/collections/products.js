import {
  Container,
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Link from 'next/link'

import HeroSection from '../../components/HeroSection'
import ProductGrid from '../../components/ProductGrid'

const products = () => {
  const theme = useTheme()

  const styles = {
    container: {
      // width: '100%',
      mt: 8,
      p: '0 !important',
    },
    navBar: {
      display: 'flex',
      justifyContent: 'center',
    },
    navElement: {
      // height: '70px',
      py: 4,
      px: 3,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.secondary.blue,
      },
      '&:hover p': {
        color: 'white',
        // cursor: 'default'
      }
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      px: 4,
      // width: '100%'
    },
  }
  
  return (
    <Container maxWidth="lg" sx={styles.container}>
    <Box sx={styles.navBar}>
      {[1, 2, 3, 4, 5].map(p => 
        <Link key={p} href="/collections/products">
          <Box sx={styles.navElement}>
            <Typography>
              Now+
            </Typography>
          </Box>
        </Link>
      )}
    </Box>
    <HeroSection 
        image="https://cdn.shopify.com/s/files/1/1162/8964/files/image_collections_polaroid-instant-cameras_desktop_1800x.jpg?v=1609752279"
        category="Instant Cameras"
        title="Polaroid Cameras"
        description="Home of the original Polaroid instant camera. Shop the cameras that changed history and the new creations to bring analog into today."
    />
    <Box sx={styles.content} component="section">
        <ProductGrid />
    </Box>
  </Container>
  )
}

export default products
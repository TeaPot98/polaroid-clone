import {
  Container,
  Box,
  Typography,
  Breadcrumbs,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import Carousel from 'react-material-ui-carousel'

import Image from 'next/image'
import Link from 'next/link'

const instantCameras = () => {
  const theme = useTheme()
  const styles = {
    container: {
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
    content: {
      px: 4
    },
    breadcrumbs: {
      mt: 4,
      mb: 2,
    },
    breadcrumb: {
      color: 'black',
    },
    breadcrumbActive: {
      color: 'black',
      cursor: 'pointer',
    },
    contentTitle: {
      fontFamily: 'Real Head',
      fontSize: '2rem',
      mb: 2,
    },
    modelName: {
      fontSize: '2rem',
      my: 2
    },
    modelDescription: {
      backgroundColor: theme.palette.secondary.orange,
      color: 'white',
      width: '400px',
      height: '625px',
      p: 4,
    },
    modelDescriptionText: {
      fontSize: '1.5rem'
    },
    modelFilm: {
      mt: 2,
      fontSize: '1.3rem'
    }
  }
  
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Box sx={styles.navBar}>
        {[1, 2, 3, 4, 5].map(p => 
          <Link key={p} href="/instant-film">
            <Box sx={styles.navElement}>
              <Typography>
                Now+
              </Typography>
            </Box>
          </Link>
        )}
      </Box>
      <Box sx={styles.hero} component="section">
        <Box sx={styles.heroTextWrapper}>
          <Typography sx={styles.categoryText}>
            Instant Cameras
          </Typography>
          <Typography sx={styles.titleText}>
            Polaroid Cameras
          </Typography>
          <Typography sx={styles.heroDescription}>
            Home of the original Polaroid instant camera. Shop the cameras that changed history and the new creations to bring analog into today.
          </Typography>
        </Box>
        <Box sx={styles.heroImageWrapper}>
          <Image 
            src="https://cdn.shopify.com/s/files/1/1162/8964/files/image_collections_polaroid-instant-cameras_desktop_1800x.jpg?v=1609752279"
            alt="Hero area image"
            layout="fill"
          />
        </Box>
      </Box>
      <Box sx={styles.content} component="section">
        <Breadcrumbs separator=">" sx={styles.breadcrumbs}>
          <Link href="/">
            <Typography sx={styles.breadcrumbActive}>
              Home
            </Typography>
          </Link>
          <Typography sx={styles.breadcrumb}>
            Instant Cameras
          </Typography>
        </Breadcrumbs>
        <Typography sx={styles.contentTitle}>
          New Cameras
        </Typography>
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
          <Box sx={styles.modelProductsCarousel}>
            
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default instantCameras
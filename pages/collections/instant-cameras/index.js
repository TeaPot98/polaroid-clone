import { server } from '../../../config'

import {
  Container,
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Link from 'next/link'

import HeroSection from '../../../components/HeroSection'
import ModelSection from '../../../components/ModelSection'
import Breadcrumbs from '../../../components/Breadcrumbs'

const instantCameras = ({ cameraModels }) => {
  const theme = useTheme()
  const styles = {
    container: {
      // width: '100%',
      // mt: 8,
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
        backgroundColor: theme.palette.polaroid.blue,
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
      pb: 2,
      // width: '100%'
    },
    contentTitle: {
      fontFamily: 'Real Head',
      fontSize: '2rem',
    },
  }
  
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Box sx={styles.navBar}>
        {cameraModels.map(p => 
          <Link key={p.id} href={`/collections/instant-cameras/${p.model}`}>
            <Box sx={styles.navElement}>
              <Typography>
                {p.model}
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
        <Breadcrumbs 
          links={[
            {
              name: 'Home',
              link: '/',
            },
            {
              name: 'Instant Cameras',
            },
          ]}
        />
        {/* <Typography sx={styles.contentTitle}>
          New Cameras
        </Typography> */}
        {cameraModels.map((m, i) =>
          <ModelSection key={m.id} model={m} color={
            i < 5 ? 
            theme.palette.polaroid[Object.keys(theme.palette.polaroid)[i]] :
            theme.palette.polaroid[Object.keys(theme.palette.polaroid)[i % 5]]
          } />
        )}
      </Box>
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/instant-cameras`)
  const cameraModels = await res.json()

  return {
    props: {
      cameraModels
    }
  }
}

export default instantCameras
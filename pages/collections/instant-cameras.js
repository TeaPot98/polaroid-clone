import {
  Container,
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Link from 'next/link'

import HeroSection from '../../components/HeroSection'
import ModelSection from '../../components/ModelSection'
import Breadcrumbs from '../../components/Breadcrumbs'

const instantCameras = () => {
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
    contentTitle: {
      fontFamily: 'Real Head',
      fontSize: '2rem',
    },
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
      <HeroSection />
      <Box sx={styles.content} component="section">
        <Breadcrumbs />
        <Typography sx={styles.contentTitle}>
          New Cameras
        </Typography>
        <ModelSection />
        <ModelSection />
        <ModelSection />

      </Box>
    </Container>
  )
}

export default instantCameras
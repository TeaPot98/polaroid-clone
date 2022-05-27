import { server } from '../../../config'
import axios from 'axios'

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
        backgroundColor: '#198cd9',
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
      px: {
        sm: 0,
        md: 4,
      },
      pb: 2,
      // width: '100%'
    },
    contentTitle: {
      fontFamily: 'Real Head',
      fontSize: '2rem',
    },
  }
  
  return (
    <Container maxWidth="xl" sx={styles.container}>
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
          mobileImage="https://cdn.shopify.com/s/files/1/1162/8964/files/image_collections_polaroid-instant-cameras_mobile_700x.jpg?v=1609752278"
          category="Instant Cameras"
          title="Polaroid Cameras"
          description="Home of the original Polaroid instant camera. Shop the cameras that changed history and the new creations to bring analog into today."
          mobileDescription="Home of the original Polaroid instant camera."
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
          <ModelSection key={m.id} model={m} index={i} />
        )}
      </Box>
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`${server}/api/instant-cameras`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    params: {
      populate: '*'
    }
  })
  const cameraModels = await res.data.data.map(m => ({...m, ...m.attributes}))

  return {
    props: {
      cameraModels
    }
  }
}

export default instantCameras
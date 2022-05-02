import { server } from '../../../../config'

import {
  Container,
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import HeroSection from '../../../../components/HeroSection'
import ProductGrid from '../../../../components/ProductGrid'

const products = ({ models, cameraModel }) => {
  const theme = useTheme()
  const router = useRouter()
  console.log(router)

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
      // width: '100%'
    },
  }
  
  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Box sx={styles.navBar}>
        {models.map(p => 
          <Link key={p.id} href={`/collections/instant-cameras/${p.model}`} >
            <Box sx={styles.navElement}>
              <Typography>
                {p.model}
              </Typography>
            </Box>
          </Link>
        )}
      </Box>
      <HeroSection 
          image={cameraModel.heroImage}
          category={cameraModel.category}
          title={`Polaroid ${cameraModel.model}`}
          description={cameraModel.heroDescription}
          textColor={cameraModel.model === 'Now+' ? 'white' : 'black'}
      />
      <Box sx={styles.content} component="section">
          <ProductGrid product={cameraModel} />
      </Box>
    </Container>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/instant-cameras`)
  const models = await res.json()

  const cameraModel = models.find(c => context.params.model === c.model)
  
  return {
    props: {
      models,
      cameraModel
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/instant-cameras`)

  const products = await res.json()

  const models = products.map(a => a.model)

  const paths = models.map(model => ({
    params: {
      model: model.toString(),
    },
  }))
  
  return {
    paths,
    fallback: false // If we go to page that doesn't exist, it shows 404 page
  }
}

export default products
import { server } from '../../../../config'

import React, { useState } from 'react'
import {
  Container, 
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Image from 'next/image'

import Breadcrumbs from '../../../../components/Breadcrumbs'
import ProductGallery from '../../../../components/ProductGallery'
import ImageFeature from '../../../../components/ImageFeature'
import IconFeature from '../../../../components/IconFeature'
import Dropdown from '../../../../components/Dropdown'

const cameraPage = ({ cameraModel, modelId }) => {
  const theme = useTheme()
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const cameraColor = cameraModel.colors.find(c => c.id === modelId)
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
    headingContainer: {
      width: '100%',
      display: 'grid',
      gap: 4,
      gridTemplateColumns: '60% 30%'
    },
    productGallery: {
      // flexBasis: '60%'
    },
    productHeading: {
      // flexBasis: '30%'
    },
    productName: {
      fontFamily: 'Real Head',
      fontSize: '2.5rem',
      lineHeight: 1
    },
    productPrice: {
      fontFamily: 'Real Head',
      fontSize: '1.5rem',
      mt: 1,
    },
    addToBagButton: {
      backgroundColor: '#000',
      color: '#fff',
      my: 2,
      p: 2,
      borderRadius: 15,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: theme.palette.polaroid.blue
      }
    },
    tabButtons: {
      my: 1,
      color: '#000',
      '& .MuiTabs-indicator': {
        backgroundColor: '#000',
        width: '100%',
        height: '3px',
      }
    },
    // tabButtonContainer: {
    //   mr: 2,
    // },
    tabButton: {
      borderRadius: 0,
      fontFamily: 'Real Head',
      fontSize: '1rem',
      color: '#000',
      p: 0,
      mr: 2,
      '&.Mui-selected': {
        color: '#000'
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#000'
      }
      // borderBottom: '3px solid black'
    },
    tabButtonUnderline: {
      height: '3px',
      backgroundColor: '#000',
      mt: '1px',
      width: '100%',
      // opacity: 0,
      transition: 'all 0.25s ease-in-out'
    },
    iconFeatures: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
      mt: 6,
      mb: 14,
    }
  }
  
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Breadcrumbs 
        links={[
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'Instant Cameras',
            link: '/collections/instant-cameras',
          },
          {
            name: `Polaroid ${cameraModel.model}`
          }
        ]}
      />
      <Box sx={styles.headingContainer}>
        <Box sx={styles.productGallery}>
          <ProductGallery 
            images={cameraColor.images}
          />
        </Box>
        <Box sx={styles.productHeading}>
          <Typography sx={styles.productName}>
            {`Polaroid ${cameraModel.model}`}
          </Typography>
          <Typography sx={styles.productPrice}>
            ${cameraModel.price}
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={styles.addToBagButton}
            fullWidth
            disableRipple
          >
            + Add To Bag
          </Button>
          <Box>
            {cameraModel.shortSpecifications.length > 0 ?
              <>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                sx={styles.tabButtons}
              >
                <Tab label="Description" sx={styles.tabButton} disableRipple/>
                <Tab label="Specifications" sx={styles.tabButton} disableRipple/>
              </Tabs> 
              <Box hidden={tabValue != 0}>
                <Typography>
                  {cameraModel.productPageDescription}
                </Typography>
              </Box>
              <Box hidden={tabValue != 1}>
                <ul>
                  {cameraModel.shortSpecifications.map(s => 
                    <li key={s}>
                      <Typography>
                        {s}
                      </Typography>
                    </li>
                  )}
                </ul>
              </Box> 
              </> :
              <Typography>
                {cameraModel.productPageDescription}
              </Typography>
            }
          </Box>
        </Box>
      </Box>
      <Box sx={styles.imageFeatures}>
        {cameraModel.imgFeatures.map((f, i) => 
          <ImageFeature 
            key={f.id} 
            reverse={i % 2 === 0} 
            name={f.name}
            description={f.description}
            image={f.img}
          />
        )}
      </Box>
      {cameraModel.features.length > 0 &&
        <Box sx={styles.iconFeatures}>
          {cameraModel.features.map(f =>
            <IconFeature 
              key={f.id} 
              name={f.name}
              description={f.description}
              image={f.icon}
            />
          )}
        </Box> 
      }
      <Dropdown 
        title="Technical Specifications"
        dataArray={cameraModel.specifications}
      />
    </Container>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/instant-cameras`)
  const models = await res.json()

  const cameraModel = models.find(c => context.params.model === c.model)
  const modelId = context.params.id
  
  return {
    props: {
      cameraModel,
      modelId
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/instant-cameras`)

  const products = await res.json()
  let colors = []
  
  products.forEach(p => p.colors.forEach(c => {
    colors = [...colors, c]
  }))
  
  colors.map(id => {
    const color = products.map(p => p.colors.find(c => c.id.toString() === id.toString()))
    console.log(color)
  })

  const paths = colors.map(color => {
    return {
      params: {
      // model: products.find(p => {
      //   const color = p.colors.find(c => c.id.toString() === id.toString())
      //   console.log(color, 'The color from gss')
      //   return color ? true : false
      // }),
      model: color.model,
      id: color.id.toString(),
      },
    }
  })
  
  return {
    paths,
    fallback: false // If we go to page that doesn't exist, it shows 404 page
  }
}

export default cameraPage
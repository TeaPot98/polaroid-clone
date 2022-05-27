import { server } from '../../../../config'
import axios from 'axios'

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

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addShopping } from '../../../../store/shopping-cart/action'

import Breadcrumbs from '../../../../components/Breadcrumbs'
import ProductGallery from '../../../../components/ProductGallery'
import ImageFeature from '../../../../components/ImageFeature'
import IconFeature from '../../../../components/IconFeature'
import Dropdown from '../../../../components/Dropdown'
import ColorButton from '../../../../components/ColorButton'
import ProductPageTabs from '../../../../components/ProductPageTabs'

const cameraPage = ({ cameraModel, modelId, addShopping }) => {
  // console.log('cameraModel', cameraModel)
  // console.log('modelId', modelId)
  // console.log('addShopping', addShopping)
  const cameraColor = cameraModel.products.find(c => c.id.toString() === modelId)
  // console.log('cameraColor', cameraColor)
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
      gridTemplateColumns: {
        xs: '100%',
        md: '60% 30%',
      }
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
    colorPickerContainer: {
      mt: 2,
      mb: 1,
    },
    addToBagButton: {
      backgroundColor: '#000',
      color: '#fff',
      my: 2,
      p: 2,
      borderRadius: 15,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#198cd9'
      }
    },
    // tabButtonContainer: {
    //   mr: 2,
    // },
    iconFeatures: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 2,
      mt: 6,
      mb: {
        xs: 4,
        md: 14
      },
    }
  }
  
  return (
    <Container maxWidth="xl" sx={styles.container}>
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
          <Box sx={styles.colorPickerContainer}>
            <Typography>{cameraColor.name}</Typography>
            <Box>
              {cameraModel.products.map(c => 
                <ColorButton
                  key={c.id}
                  href={`/collections/instant-cameras/${cameraModel.model}/${c.id}`} 
                  color={c.color}
                  isActive={modelId === c.id}
                />
              )}
            </Box>
          </Box>
          <Button
            variant="contained"
            disableElevation
            sx={styles.addToBagButton}
            fullWidth
            disableRipple
            onClick={() => addShopping({
              id: cameraColor.id,
              name: `Polaroid ${cameraModel.model} ${cameraColor.name}`,
              image: cameraColor.images[0],
              price: cameraModel.price,
              // image: cameraColor.images[0],
            })}
          >
            + Add To Bag
          </Button>
          <Box>
            {cameraModel.shortSpecifications.length > 0 ?
              <>
                <ProductPageTabs cameraModel={cameraModel} />
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
  const res = await axios.get(`${server}/api/instant-cameras`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    params: {
      populate: '*'
    }
  })
  const models = await res.data.data.map(m => ({...m, ...m.attributes}))

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
  const res = await axios.get(`${server}/api/instant-cameras`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    params: {
      populate: '*'
    }
  })

  const products = await res.data.data.map(m => ({...m, ...m.attributes}))
  let colors = []
  
  products.forEach(p => p.products.forEach(c => {
    colors = [...colors, c]
  }))
  
  colors.map(id => {
    const color = products.map(p => p.products.find(c => c.id.toString() === id.toString()))
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

const mapDispatchToProps = (dispatch) => {
  return {
    addShopping: bindActionCreators(addShopping, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(cameraPage)
import { server } from '../../../../config'
import axios from 'axios'

import React from 'react'
import {
  Container, 
} from '@mui/material'

import Breadcrumbs from '../../../../components/Breadcrumbs'
import Dropdown from '../../../../components/Dropdown'
import ProductPageHeading from '../../../../components/productPage/ProductPageHeading'
import ProductFeatures from '../../../../components/productPage/ProductFeatures'

const cameraPage = ({ cameraModel, cameraProduct }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
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
      <ProductPageHeading 
        product={cameraProduct}
        productModel={cameraModel}
      />
      <ProductFeatures 
        productModel={cameraModel}
      />
      <Dropdown 
        title="Technical Specifications"
        dataArray={cameraModel.specifications}
      />
    </Container>
  )
}

export const getStaticProps = async (context) => {
  // Fetching all the cameraModels from the server
  const res = await axios.get(`${server}/api/instant-cameras`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    params: {
      populate: '*'
    }
  })
  const models = await res.data.data.map(m => ({...m, ...m.attributes}))

  // Finding the cameraModel for this page, using page params
  const cameraModel = models.find(c => context.params.model === c.model)
  const productId = context.params.id
  // Finding the specific produt of this page
  const cameraProduct = cameraModel.products.find(p => p.id.toString() === productId)
  
  return {
    props: {
      cameraModel,
      cameraProduct
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
    // console.log(color)
  })

  const paths = colors.map(color => {
    return {
      params: {
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
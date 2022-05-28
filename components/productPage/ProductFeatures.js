import React from 'react'
import {
  Box,
} from '@mui/material'

import ImageFeature from './ImageFeature'
import IconFeature from './IconFeature'

const ProductFeatures = ({ productModel }) => {
  const styles = {
    iconFeatures: {
      overflowX: 'auto',
      display: 'flex',
      gap: 2,
      mt: 6,
      mb: {
        xs: 4,
        md: 14
      },
    }
  }
  
  return (
    <>
    <Box sx={styles.imageFeatures}>
      {productModel.imgFeatures.map((f, i) => 
        <ImageFeature 
          key={f.id} 
          reverse={i % 2 === 0} 
          name={f.name}
          description={f.description}
          image={f.img}
        />
      )}
    </Box>
    {productModel.features.length > 0 &&
      <Box sx={styles.iconFeatures}>
        {productModel.features.map(f =>
          <IconFeature 
            key={f.id} 
            name={f.name}
            description={f.description}
            image={f.icon}
          />
        )}
      </Box> 
    }
    </>
  )
}

export default ProductFeatures
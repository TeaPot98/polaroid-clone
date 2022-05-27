import {
  Box,
} from '@mui/material'

import ProductTile from './ProductTile'

const ProductGrid = ({ productModel }) => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: '1fr 1fr 1fr'
      },
      gap: 2,
      p: {
        xs: 0,
        sm: 4,
      },
    }
  }
  
  return (
    <Box sx={styles.container}>
      {productModel.products.map(p => 
        <ProductTile key={p.id} productModel={productModel} product={p} />
      )}
    </Box>
  )
}

export default ProductGrid
import {
  Box,
} from '@mui/material'

import ProductTile from './ProductTile'

const ProductGrid = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 2,
      p: 4,
    }
  }
  
  return (
    <Box sx={styles.container}>
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
    </Box>
  )
}

export default ProductGrid
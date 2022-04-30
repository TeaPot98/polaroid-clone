import {
  Box,
} from '@mui/material'

import ProductTile from './ProductTile'

const ProductGrid = ({ product }) => {
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
      {product.colors.map(p => 
        <ProductTile key={p.id} product={product} productColor={p} />
      )}
    </Box>
  )
}

export default ProductGrid
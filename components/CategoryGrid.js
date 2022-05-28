import {
  Box,
} from '@mui/material'

import CategoryTile from './CategoryTile'

const CategoryGrid = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: '1fr 1fr'
      },
      p: {
        xs: '1rem 0',
        md: 2,
      },
      gridColumnGap: {
        xs: 0,
        md: '1rem'
      },
      gridRowGap: {
        xs: '1rem',
        md: '3rem'
      },
    }
  }
  
  return (
    <Box sx={styles.container}>
      <CategoryTile 
        image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_cameras_1136x.jpg?v=1640015756"
        name="Instant cameras"
        link="collections/instant-cameras"
      />
      <CategoryTile 
        image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_exclusive_1136x.jpg?v=1640015871"
        name="Limited & Exclusive"
        link="collections/instant-cameras"
      />
      <CategoryTile 
        image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_accessories_1136x.jpg?v=1640016033"
        name="Accessories"
        link="collections/instant-cameras"
      />
      <CategoryTile 
        image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_printers_1136x.jpg?v=1640016165"
        name="Printers"
        link="collections/instant-cameras"
      />
    </Box>
  )
}

export default CategoryGrid
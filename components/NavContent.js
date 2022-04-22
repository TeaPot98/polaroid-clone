import {
  Box,
} from '@mui/material'

const NavContent = () => {
  const styles = {
    container: {
      display: 'flex',
      gap: 1,
      p: 3,
    },
    allProducts: {
      width: '200px',
      height: '300px',
      backgroundColor: 'red',
    },
    product: {
      height: '300px',
      backgroundColor: 'red',
      flex: 1,
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.allProducts}>

      </Box>
      {[1, 2, 3, 4, 5].map(p => 
        <Box sx={styles.product}>
          <img
            src="http://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_front-tilted_76818978-1bc2-45b2-a1f0-b5598abe1d3d_1024x1024.png?v=1643359177"
            alt="Polaroid"
          />
        </Box>
      )}
    </Box>
  )
}

export default NavContent
import {
  Container, 
  Box,
  Typography,
} from '@mui/material'

import Breadcrumbs from '../../components/Breadcrumbs'

const cameraPage = () => {
  const styles = {
    productGallery: {

    },
    productHeading: {
      
    }
  }
  
  return (
    <Container maxWidth="lg">
      <Breadcrumbs />
      <Box>
        <Box sx={styles.productGallery}></Box>
        <Box sx={styles.productHeading}>

        </Box>
      </Box>
    </Container>
  )
}

export default cameraPage
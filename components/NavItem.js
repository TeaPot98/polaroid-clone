import {
  Box,
  Typography,
} from '@mui/material'
import Link from 'next/link'

import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'

const NavItem = ({ product }) => {
  const theme = useTheme()
  const router = useRouter()
  
  const styles = {
    navItem: {
      // height: '70px',
      py: 4,
      px: 3,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.polaroid.blue,
      },
      '&:hover p': {
        color: 'white',
        // cursor: 'default'
      }
    },
  }
  
  return (
    <Link key={product.id} href={`/collections/instant-cameras/${product.model}`} >
      <Box sx={{
        ...styles.navItem, 
        backgroundColor: router.asPath === `/collections/instant-cameras/${product.model}` ?  theme.palette.polaroid.blue : 'white',
        color: router.asPath === `/collections/instant-cameras/${product.model}` ?  'white' : 'black'
      }}>
        <Typography>
          {product.model}
        </Typography>
      </Box>
    </Link>
  )
}

export default NavItem
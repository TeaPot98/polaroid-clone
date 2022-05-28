import {
  Box,
  Typography,
} from '@mui/material'

import Link from 'next/link'

import NavProductTile from './NavProductTile'

const NavContent = ({ allProductsTile, products }) => {
  const styles = {
    container: {
      display: 'flex',
      gap: 1,
      width: '100%',
      p: 3,
    },
    allProducts: {
      display: 'flex',
      alignItems: 'end',
      width: '200px',
      height: '300px',
      cursor: 'pointer',
      backgroundImage: 'url("https://images.ctfassets.net/l893v89mix1e/4RJE5VZ6fxs8TxOpBypayj/83985caea328195596c68c0c51956cf1/Hero_Polaroid_16x9.jpg?w=1400&h=787&fl=progressive&q=80&fm=jpg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      p: 2,
    },
    allProductsText: {
      verticalAlign: 'bottom',
      fontSize: '1.4rem',
      fontFamily: 'Real Head',
    },
  }
  
  return (
    <Box sx={styles.container}>
      <Link href={allProductsTile.link} >
        <Box sx={styles.allProducts} >
          <Typography sx={styles.allProductsText}>
            {allProductsTile.name}
          </Typography>
        </Box>
      </Link>
      {products.map(p => 
        <NavProductTile key={p.id} product={p} />
      )}
    </Box>
  )
}

export default NavContent
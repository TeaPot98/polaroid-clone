import {
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Image from 'next/image'
import Link from 'next/link'

const NavContent = ({ 
  allProductsTile,
  products,
}) => {
  const theme = useTheme()
  
  const styles = {
    container: {
      display: 'flex',
      gap: 1,
      width: '100%',
      p: 3,
      // maxHeight: '100%',
    },
    allProducts: {
      display: 'flex',
      // flexDirection: 'column',
      alignItems: 'end',
      width: '200px',
      height: '300px',
      cursor: 'pointer',
      // backgroundColor: 'red',
      backgroundImage: 'url("https://images.ctfassets.net/l893v89mix1e/4RJE5VZ6fxs8TxOpBypayj/83985caea328195596c68c0c51956cf1/Hero_Polaroid_16x9.jpg?w=1400&h=787&fl=progressive&q=80&fm=jpg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      // position: 'relative',
      // verticalAlign: 'baseline',
      p: 2,
    },
    allProductsText: {
      // display: 'inline-block',
      verticalAlign: 'bottom',
      fontSize: '1.4rem',
      fontFamily: 'Real Head',
      // verticalAlign: 'bottom'
      // mt: 'auto'
    },
    product: {
      display: 'flex',
      justifyContent: 'center',
      height: '300px',
      width: '100%',
      backgroundColor: theme.palette.primary.container,
      flex: 1,
      cursor: 'pointer',
      // p: 1
      p: 2,
    },
    title: {
      fontFamily: 'Real Head',
      fontSize: '1.2rem',
      lineHeight: 2,
    },
    productWrapper: {
      width: '150px',
      '& > span > img': {
        width: '100% !important',
        height: 'unset !important',
        position: 'relative !important',
        objectFit: 'contain',
      },
      '& > span': {
        position: 'unset !important'
      }
      // '& > img': {
      //   maxWidth: '300px !important',
      //   height: 'auto',
      //   position: 'static !important',
      // }
    },
    // productImage: {
    //   // maxWidth: '400px'
    //   position: 'static'
    // },
    description: {
      fontSize: '0.8rem',
      fontWeight: 400
    }
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
        <Link key={p.id} href={`/collections/instant-cameras/${p.model}`}>
          <Box sx={styles.product}>
            <Box sx={styles.productWrapper}>
              <Image
                // component={Image}
                src={p.image}
                alt="Polaroid"
                layout="fill"
                // objectFit="contain"
                // width="100%"
                // height="100%"
                style={styles.productImage}
              />
              <Typography sx={styles.title}>
                {p.name}
              </Typography>
              <Typography sx={styles.description}>
                {p.description}
              </Typography>
            </Box>
          </Box>
        </Link>
      )}
    </Box>
  )
}

export default NavContent
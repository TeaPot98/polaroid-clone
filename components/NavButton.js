import {
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Link from 'next/link'

import NavContent from './NavContent'

const NavButton = ({ name, color, link, navContent }) => {
  const theme = useTheme()
  
  const styles = {
    navButton: {
      // position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      '&:hover .nav-underline': {
        width: '100%',
        opacity: 100,
      },
      '&:hover .nav-content': {
        // display: 'block',
        maxHeight: '1000px',
        // opacity: 1
      }
    },
    navButtonNameContainer: {
      // my: 'auto',
      // verticalAlign: 'middle'
      cursor: 'pointer',
    },
    navButtonNameText: {
      fontFamily: 'Real Head'
    },
    navButtonUnderline: {
      height: '4px',
      backgroundColor: color ? color : theme.palette.secondary.red,
      mt: '1px',
      width: '0px',
      opacity: 0,
      transition: 'all 0.25s ease-in-out'
    },
    navContent: {
      // display: 'none',
      // alignSelf: 'top',
      position: 'absolute',
      maxHeight: '0px',
      width: '100%',
      backgroundColor: color,
      // opacity: 0,
      left: 0,
      top: '48px',
      transition: 'all 0.25s ease-in-out',
      mt: 2,
      // p: 3,
      overflow: 'hidden'
    }
  }
  
  return (
    <Box sx={styles.navButton}>
      <Link href={link}>
        <Box sx={styles.navButtonNameContainer}>
          <Typography sx={styles.navButtonNameText}>
            {name}
          </Typography>
          <Box sx={styles.navButtonUnderline} className="nav-underline" ></Box>
        </Box>
      </Link>
      <Box sx={styles.navContent} className="nav-content">
        <NavContent 
          allProductsTile={{
            name: 'All Cameras',
            image: 'https://images.ctfassets.net/l893v89mix1e/4RJE5VZ6fxs8TxOpBypayj/83985caea328195596c68c0c51956cf1/Hero_Polaroid_16x9.jpg?w=1400&h=787&fl=progressive&q=80&fm=jpg',
            link: link
          }}
          products={[
            {
              id: '1',
              name: 'Polaroid Now',
              description: 'Take a closer look at our products to find the creative tool for you.',
            },
            {
              id: '2',
              name: 'Polaroid Now',
              description: 'Take a closer look at our products to find the creative tool for you.',
            },
            {
              id: '3',
              name: 'Polaroid Now',
              description: 'Take a closer look at our products to find the creative tool for you.',
            },
          ]}
        />
      </Box>
    </Box>
  )
}

export default NavButton
import {
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Link from 'next/link'

import NavContent from './NavContent'

const NavButton = ({ name, color, navContent, allProductsTile }) => {
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
      backgroundColor: color ? color : theme.palette.polaroid.red,
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
      // backgroundColor: color,
      backgroundColor: 'white',
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
      <Link href={allProductsTile.link}>
        <Box sx={styles.navButtonNameContainer}>
          <Typography sx={styles.navButtonNameText}>
            {name}
          </Typography>
          <Box sx={styles.navButtonUnderline} className="nav-underline" ></Box>
        </Box>
      </Link>
      <Box sx={styles.navContent} className="nav-content">
        <NavContent 
          allProductsTile={allProductsTile}
          products={navContent.map(p => {
            return {
              id: p.id,
              model: p.model,
              name: `Polaroid ${p.model}`,
              description: p.navBarDescription,
              image: p.colors[0].images[0],
            }
          })}
        />
      </Box>
    </Box>
  )
}

export default NavButton
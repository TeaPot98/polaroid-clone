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
      '.nav-content': {
        // display: 'block',
        maxHeight: '1000px',
        // opacity: 1
      }
    },
    navButtonName: {
      // my: 'auto',
      // verticalAlign: 'middle'
      cursor: 'pointer',
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
      width: '100vw',
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
        <Box sx={styles.navButtonName}>
          <Typography>
            {name}
          </Typography>
          <Box sx={styles.navButtonUnderline} className="nav-underline" ></Box>
        </Box>
      </Link>
      <Box sx={styles.navContent} className="nav-content">
        <NavContent />
      </Box>
    </Box>
  )
}

export default NavButton
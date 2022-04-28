import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const Dropdown = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  
  const styles = {
    container: {
      backgroundColor: theme.palette.primary.footer,
      pt: 1,
      pb: 2,
      mb: 2,
    },
    button: {
      display: 'flex',
      mx: 'auto',
      gap: 1,
      textTransform: 'none',
      color: '#000'
    },
    buttonIcon: {
      // display: 'inline',
      fontSize: '2rem',
      transition: 'transform 0.2s ease-in-out',
      transform: open ? 'rotate(45deg)' : 'rotate(0)',
    },
    buttonText: {
      fontFamily: 'Real Head',
      fontSize: '1.6rem',
      borderBottom: '3px solid black',
    },
    content: {
      px: 10,
      // py: open ? 4 : 0,
      overflow: 'hidden',
      // height: 'auto',
      maxHeight: open ? '2000px' : '0px',
      transition: 'all 0.2s ease-in-out',
    },
    name: {
      fontFamily: 'Real Head',
      fontSize: '2.5rem',
      mt: 2,
    },
    list: {
      // display: 'flex',
      listStyle: 'none',
      m: 0,
      p: 0,
      '& li': {
        fontSize: '1.3rem',
        display: 'inline-block',
        my: 1.5,
        p: 0,
        width: '50%',
      }
    }
  }

  const handleOpen = () => {
    setOpen(open => !open)
  }
  
  return (
    <Box sx={styles.container}>
      <Box>
        <Button sx={styles.button} onClick={handleOpen} disableRipple>
          <AddCircleOutlineOutlinedIcon sx={styles.buttonIcon} />
          <Typography sx={styles.buttonText}>
            Technical Specifications
          </Typography>
        </Button>
      </Box>
      <Box sx={styles.content}>
        <Typography sx={styles.name}>
          Technical Specifications
        </Typography>
        <Box sx={styles.list} component="ul">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(s => 
            <li key={s}>Battery: High performance lithium-ion battery (750mAh), rechargeable via USB</li>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Dropdown
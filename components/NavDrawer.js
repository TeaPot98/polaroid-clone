import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import NavDrawerDropdown from './NavDrawerDropdown'

const NavDrawer = ({ open, onClose, navContent }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: {
        xs: '100vw',
        sm: '450px'
      },
      height: '100%',
      p: 3,
      color: 'black',
    },
    headingContainer: {
      marginLeft: 'auto'
    },
    closeIcon: {
      color: 'black'
    },
  }
  
  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onClose}
    >
      <Box
        sx={styles.container}
      >
        <Box sx={styles.headingContainer}>
          <IconButton onClick={onClose} disableRipple>
            <CloseIcon fontSize="large" sx={styles.closeIcon} />
          </IconButton>
        </Box>
        <Box>
          <NavDrawerDropdown 
            onClose={onClose} 
            products={navContent.map(p => {
              return {
                id: p.id,
                model: p.model,
                name: `Polaroid ${p.model}`,
              }
            })}
          />
        </Box>
      </Box>
    </Drawer>
  )
}

export default NavDrawer
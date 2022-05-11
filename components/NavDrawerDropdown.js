import React, { useState } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import Link from 'next/link'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavDrawerDropdown = ({ onClose, products }) => {
  const [open, setOpen] = useState(false)
  const styles = {
    dropdownContainer: {

    },
    dropdownTopContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItem: 'center',
      cursor: 'pointer',
    },
    title: {
      fontSize: '1.2rem'
    },
    icon: {
      transform: open ? 'rotate(0.5turn)' : 'unset',
      transition: 'transform 0.2s ease-in-out'
    },
    dropdownContent: {
      maxHeight: open ? '1000px' : '0px',
      overflowY: 'hidden',
      transition: 'max-height 0.2s ease-in-out',
      px: 3,
    },
    link: {
      fontSize: '0.9rem'
    }
  }

  const handleDropdownClick = () => {
    setOpen(open => !open)
  }
  
  return (
    <Box sx={styles.dropdownContainer}>
      <Box sx={styles.dropdownTopContainer} onClick={handleDropdownClick}>
        <Typography sx={styles.title}>
          Instant Cameras
        </Typography>
        <KeyboardArrowDownIcon fontSize="large" sx={styles.icon} />
      </Box>
      <Box sx={styles.dropdownContent}>
        <Link href={'/collections/instant-cameras'}>
          <Typography sx={styles.link} onClick={onClose}>View All</Typography>
        </Link>
        {products.map(p =>
          <Link key={p.id} href={`/collections/instant-cameras/${p.model}`}>
            <Typography sx={styles.link} onClick={onClose}>{p.name}</Typography>
          </Link>
        )}
      </Box>
    </Box>
  )
}

export default NavDrawerDropdown
import { server } from '../../../../config'

import React, { useState } from 'react'
import {
  Container, 
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@mui/material'

const ProductPageTabs = ({ cameraModel }) => {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const styles = {
    tabButtons: {
      my: 1,
      color: '#000',
      '& .MuiTabs-indicator': {
        backgroundColor: '#000',
        width: '100%',
        height: '3px',
      }
    },
    tabButton: {
      borderRadius: 0,
      fontFamily: 'Real Head',
      fontSize: '1rem',
      color: '#000',
      p: 0,
      mr: 2,
      '&.Mui-selected': {
        color: '#000'
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#000'
      }
      // borderBottom: '3px solid black'
    },
    tabButtonUnderline: {
      height: '3px',
      backgroundColor: '#000',
      mt: '1px',
      width: '100%',
      // opacity: 0,
      transition: 'all 0.25s ease-in-out'
    },
  }

  return (
    <>
    <Tabs 
      value={tabValue} 
      onChange={handleTabChange} 
      sx={styles.tabButtons}
    >
      <Tab label="Description" sx={styles.tabButton} disableRipple/>
      <Tab label="Specifications" sx={styles.tabButton} disableRipple/>
    </Tabs> 
    <Box hidden={tabValue != 0}>
      <Typography>
        {cameraModel.productPageDescription}
      </Typography>
    </Box>
    <Box hidden={tabValue != 1}>
      <ul>
        {cameraModel.shortSpecifications.map(s => 
          <li key={s}>
            <Typography>
              {s}
            </Typography>
          </li>
        )}
      </ul>
    </Box> 
    </>
  )
}

export default ProductPageTabs
import React, { useState } from 'react'
import {
  Container, 
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Image from 'next/image'

import Breadcrumbs from '../../components/Breadcrumbs'
import ProductGallery from '../../components/ProductGallery'
import ImageFeature from '../../components/ImageFeature'
import IconFeature from '../../components/IconFeature'
import Dropdown from '../../components/Dropdown'

const cameraPage = () => {
  const theme = useTheme()
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
    headingContainer: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '60% 30%'
    },
    productGallery: {
      // flexBasis: '60%'
    },
    productHeading: {
      // flexBasis: '30%'
    },
    productName: {
      fontFamily: 'Real Head',
      fontSize: '2.5rem',
      lineHeight: 1
    },
    productPrice: {
      fontFamily: 'Real Head',
      fontSize: '1.5rem',
      mt: 1,
    },
    addToBagButton: {
      backgroundColor: '#000',
      color: '#fff',
      my: 2,
      p: 2,
      borderRadius: 15,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: theme.palette.secondary.blue
      }
    },
    tabButtons: {
      my: 1,
      color: '#000',
      '& .MuiTabs-indicator': {
        backgroundColor: '#000',
        width: '100%',
        height: '3px',
      }
    },
    // tabButtonContainer: {
    //   mr: 2,
    // },
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
    iconFeatures: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
      mt: 6,
      mb: 14,
    }
  }
  
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Breadcrumbs />
      <Box sx={styles.headingContainer}>
        <Box sx={styles.productGallery}>
          <ProductGallery />
        </Box>
        <Box sx={styles.productHeading}>
          <Typography sx={styles.productName}>
            Polaroid Now i-Type Instant Camera
          </Typography>
          <Typography sx={styles.productPrice}>
            $119.99
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={styles.addToBagButton}
            fullWidth
            disableRipple
          >
            + Add To Bag
          </Button>
          <Box>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              sx={styles.tabButtons}
            >
              <Tab label="Description" sx={styles.tabButton} disableRipple/>
              <Tab label="Specifications" sx={styles.tabButton} disableRipple/>
            </Tabs>
            <Box hidden={tabValue != 0}>
              Capture and keep your everyday moments forever with the Polaroid Now. Our new analog instant camera comes with autofocus to help you catch life as you live it in that iconic Polaroid instant film format. In 7 colors, plus black and white, there’s a Polaroid Now to suit you.
            </Box>
            <Box hidden={tabValue != 1}>
              <ul>
                {[1, 2, 3, 4, 5].map(s => 
                  <li key={s}>Accurate human friendly flash system</li>
                )}
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.imageFeatures}>
        {[1, 2, 3, 4].map((f, i) => 
          <ImageFeature key={f} reverse={i % 2 === 0} />
        )}
      </Box>
      <Box sx={styles.iconFeatures}>
        {[1, 2, 3].map(f =>
          <IconFeature key={f} />
        )}
      </Box>
      <Dropdown />
    </Container>
  )
}

export default cameraPage
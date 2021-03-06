import axios from 'axios'
import { server } from '../../config'

// React and Material UI
import React, { useEffect, useState } from 'react'
import {
  Box, 
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Badge,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchShopping } from '../../store/shopping-cart/action'

// Icons
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import MenuIcon from '@mui/icons-material/Menu'

// Custom components
import NavButton from '../navBar/NavButton'
import ShoppingBagDrawer from '../shoppingBag/ShoppingBagDrawer'
import NavDrawer from '../navBar/NavDrawer'
import ImageWrapper from '../ImageWrapper'

const TopBar = ({ shoppingCart, fetchShopping }) => {
  const theme = useTheme()
  const [cameraModels, setCameraModels] = useState([])
  const [shoppingBagOpen, setShoppingBagOpen] = useState(false)
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}/api/instant-cameras`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          },
          params: {
            populate: '*'
          }
        })
        // console.log(res)
        const jsonModels = await res.data.data
        // console.log('jsonModels', jsonModels.map(m => ({id: m.id, ...m.attributes})))
        setCameraModels(jsonModels.map(m => ({...m, ...m.attributes})))
      } catch (error) {
        // console.log(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    fetchShopping()
  }, [])

  const closeShoppingBag = () => {
    setShoppingBagOpen(false)
  }

  const openShoppingBag = () => {
    setShoppingBagOpen(true)
  }

  const closeNavDrawer = () => {
    setNavDrawerOpen(false)
  }

  const openNavDrawer = () => {
    setNavDrawerOpen(true)
  }
  
  const styles = {
    container: {
      p: {
        xs: 0,
        md: 'unset'
      }
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    navButtons: {
      display: {
        xs: 'none',
        md: 'flex',
      },
      alignItems: 'stretch',
      gap: theme => theme.spacing(3)
    },
    topBarButtons: {
      alignSelf: 'center',
    },
    topBarButton: {
      color: 'black'
    },
    navMenuButton: {
      display: {
        xs: 'unset',
        md: 'none'
      }
    },
    logo: {
      cursor: 'pointer',
      maxWidth: '100px'
    },
    badge: {
      '& .MuiBadge-badge': {
        backgroundColor: theme.palette.polaroid.blue,
        color: 'white',
        display: 'flex',
        pb: 0.5,
      }
    }
  }
  
  return (
    <AppBar elevation={0} >
      <Container maxWidth="xl" sx={styles.container}>
        <Toolbar sx={styles.toolbar}>
          <svg style={styles.logo} focusable="false" role="img" viewBox="0 0 96.137 30">
              <g data-name="Polaroid Color Spectrum">
                  <path fill="#ef3827" d="M0 26.587h9.853V30H0z"></path>
                  <path fill="#ff8200" d="M9.853 26.587h9.853V30H9.853z"></path>
                  <path fill="#ffb500" d="M19.707 26.587h9.853V30h-9.853z"></path>
                  <path fill="#78be20" d="M29.56 26.587h9.853V30H29.56z"></path>
                  <path fill="#198cd9" d="M39.413 26.587h9.853V30h-9.853z"></path>
              </g>
              <g data-name="Group 4">
                  <path data-name="Path 2" d="M3.606 19.761H0V0h7.895c4.4 0 7.156 2.146 7.156 6.3 0 4.1-2.752 6.3-7.156 6.3H3.602zm4.1-10.266c2.477 0 3.8-1.156 3.8-3.193 0-2.064-1.321-3.193-3.8-3.193h-4.1v6.385z"></path>
                  <path data-name="Path 3" d="M22.761 20.064c-4.156 0-7.1-3.028-7.1-7.514s2.945-7.514 7.1-7.514 7.1 3.027 7.1 7.514-2.945 7.514-7.1 7.514m0-2.89c2.257 0 3.66-1.734 3.66-4.624s-1.4-4.624-3.66-4.624-3.66 1.734-3.66 4.624 1.4 4.624 3.66 4.624"></path>
                  <path data-name="Rectangle 7" d="M31.734 0h3.413v19.761h-3.413z"></path>
                  <path data-name="Path 4" d="M45.826 18.551a5.229 5.229 0 0 1-3.881 1.459c-2.835 0-4.954-1.679-4.954-4.293 0-2.7 2.064-3.936 4.844-4.514l3.936-.826v-.248c0-1.321-.688-2.147-2.394-2.147a2.508 2.508 0 0 0-2.725 2.037l-3.193-.716c.688-2.45 2.725-4.266 6.11-4.266 3.248 0 5.477 1.652 5.477 4.982v6.275a23.2 23.2 0 0 0 .22 3.468h-3.358a8.676 8.676 0 0 1-.083-1.211m-.055-5.587l-3.055.661c-1.348.3-2.367.771-2.367 2.009 0 1.074.8 1.651 2.174 1.651 1.679 0 3.247-.881 3.247-2.587z"></path>
                  <path data-name="Path 5" d="M59.887 8.697a8.761 8.761 0 0 0-1.156-.083 3.387 3.387 0 0 0-3.633 3.551v7.592h-3.411V5.312H55.1v2.312a3.92 3.92 0 0 1 3.908-2.395 7.961 7.961 0 0 1 .881.055z"></path>
                  <path data-name="Path 6" d="M67.679 20.064c-4.156 0-7.1-3.028-7.1-7.514s2.945-7.514 7.1-7.514 7.1 3.027 7.1 7.514-2.945 7.514-7.1 7.514m0-2.89c2.257 0 3.661-1.734 3.661-4.624s-1.4-4.624-3.661-4.624-3.661 1.734-3.661 4.624 1.4 4.624 3.661 4.624"></path>
                  <path data-name="Path 7" d="M76.651 0h3.523v3.5h-3.523zm3.468 19.762h-3.413V5.312h3.413z"></path>
                  <path data-name="Path 8" d="M92.725 0h3.413v19.761h-3.413V18a4.739 4.739 0 0 1-4.184 2.064c-4.1 0-6.5-3.413-6.5-7.514s2.394-7.514 6.5-7.514A4.739 4.739 0 0 1 92.725 7.1zm-3.523 8.037c-2.339 0-3.716 1.844-3.716 4.514 0 2.7 1.376 4.514 3.716 4.514 2.064 0 3.605-1.486 3.605-4.073v-.853c0-2.642-1.541-4.1-3.605-4.1"></path>
              </g>
          </svg>
          <Box sx={styles.navButtons}>
            <NavButton 
              name="Instant Cameras" 
              color={theme.palette.polaroid.orange} 
              navContent={cameraModels}
              allProductsTile={{
                name: 'All Cameras',
                image: 'https://images.ctfassets.net/l893v89mix1e/4RJE5VZ6fxs8TxOpBypayj/83985caea328195596c68c0c51956cf1/Hero_Polaroid_16x9.jpg?w=1400&h=787&fl=progressive&q=80&fm=jpg',
                link: '/collections/instant-cameras'
              }}
            />
            <NavButton 
              name="Instant Film" 
              color={theme.palette.polaroid.yellow} 
              navContent={cameraModels}
              allProductsTile={{
                name: 'All Cameras',
                image: 'https://images.ctfassets.net/l893v89mix1e/4RJE5VZ6fxs8TxOpBypayj/83985caea328195596c68c0c51956cf1/Hero_Polaroid_16x9.jpg?w=1400&h=787&fl=progressive&q=80&fm=jpg',
                link: '/collections/instant-film'
              }}
            />
            <NavButton 
              name="Printers" 
              color={theme.palette.polaroid.green} 
              navContent={cameraModels}
              allProductsTile={{
                name: 'All Cameras',
                image: 'https://images.ctfassets.net/l893v89mix1e/4RJE5VZ6fxs8TxOpBypayj/83985caea328195596c68c0c51956cf1/Hero_Polaroid_16x9.jpg?w=1400&h=787&fl=progressive&q=80&fm=jpg',
                link: '/collections/polaroid-printers'
              }}
            />
            <NavButton 
              name="Accessories" 
              color={theme.palette.polaroid.blue} 
              navContent={cameraModels}
              allProductsTile={{
                name: 'All Cameras',
                image: 'https://images.ctfassets.net/l893v89mix1e/4RJE5VZ6fxs8TxOpBypayj/83985caea328195596c68c0c51956cf1/Hero_Polaroid_16x9.jpg?w=1400&h=787&fl=progressive&q=80&fm=jpg',
                link: '/collections/accessories'
              }}
            />
          </Box>
          <Box sx={styles.topBarButtons}>
            <Badge badgeContent={shoppingCart ? shoppingCart.length : 0} sx={styles.badge} overlap="circular" showZero>
              <IconButton 
                sx={styles.topBarButton} 
                disableRipple
                onClick={openShoppingBag}
              >
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </Badge>
            <IconButton 
              sx={styles.navMenuButton} 
              disableRipple
              onClick={openNavDrawer}
              >
              <MenuIcon />
            </IconButton>
            <NavDrawer 
              open={navDrawerOpen}
              onClose={closeNavDrawer}
              navContent={cameraModels}
            />
            <ShoppingBagDrawer 
              open={shoppingBagOpen}
              onClose={closeShoppingBag}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}


const mapStateToProps = (state) => {
  const data = state.shoppingCart;
  return {
    shoppingCart: data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShopping: bindActionCreators(fetchShopping, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
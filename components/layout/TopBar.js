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
import Logo from '../Logo'

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
        console.log(res)
        const jsonModels = await res.data.data
        console.log('jsonModels', jsonModels.map(m => ({id: m.id, ...m.attributes})))
        setCameraModels(jsonModels.map(m => ({...m, ...m.attributes})))
      } catch (error) {
        console.log(error)
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
          <Link
            href="/"
          >
            <Logo style={styles.logo} />
          </Link>
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
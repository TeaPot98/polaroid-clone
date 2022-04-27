import {
  Box,
  Typography,
  Container,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Meta from './Meta'
import TopBar from './TopBar'

const Layout = ({ children }) => {
  const theme = useTheme()
  
  const styles = {
    main: {
      marginTop: '4rem',
    },
    footer: {
      backgroundColor: theme.palette.primary.footer,
    },
    container: {
      p: 4,
    },
    footerList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      listStyleType: 'none',
      p: 0,
      m: 0,
      fontSize: '1.5rem',
      '& > li': {
        marginBottom: '1rem'
      }
    },
    supportHeading: {
      fontFamily: 'Real Head',
      fontSize: '2rem',
    },
    support: {
      fontSize: '1.2rem',
      mt: 2,
      '& a': {
        borderBottom: '1px solid black'
      }
    },
    footerTopContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    },
    listContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    },
  }
  
  return (
    <>
      <Meta />
      <TopBar />
      <main style={styles.main}>
        {children}
      </main>
      <footer style={styles.footer}>
        <Container maxWidht="lg" sx={styles.container}>
          <Box sx={styles.footerTopContainer}>
            <Box>
              <Typography sx={styles.supportHeading}>
                We're here to help.
              </Typography>
              <Typography sx={styles.support}>
                <a href="">Get in touch</a> 
                <span> </span>with our customer service team.
              </Typography>
            </Box>
            <Box sx={styles.listContainer}>
              <ul style={styles.footerList}>
                <li><a href="" >Gift Cards</a></li>
                <li><a href="" >About Us</a></li>
                <li><a href="" >More Products</a></li>
                <li><a href="" >Collaborations</a></li>
                <li><a href="" >Careers</a></li>
                <li><a href="" >Contact Us</a></li>
                <li><a href="" >Affiliate Program</a></li>
                <li><a href="" >Our Brands</a></li>
                <li><a href="" >Polaroid Corporate Gifting</a></li>
              </ul>
              <ul style={styles.footerList}>
                <li><a href="" >Customer Support</a></li>
                <li><a href="" >Polaroid Loyalty Program</a></li>
                <li><a href="" >Rewards Points</a></li>
                <li><a href="" >Shipping</a></li>
                <li><a href="" >FAQs</a></li>
                <li><a href="" >Returns & Exchanges</a></li>
                <li><a href="" >COVID-19 Update</a></li>
              </ul>
            </Box>
          </Box>
          <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
          <div>This website is made for learning purpose and to show my frontend skills. All the rights belong to Polaroid. </div>
        </Container>
      </footer>
    </>
  )
}

export default Layout
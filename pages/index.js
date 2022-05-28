import {
  Container,
  Box,
  Button,
  Typography,
} from '@mui/material'

import HeroSection from '../components/HeroSection'
import CategoryGrid from '../components/CategoryGrid'

const Home = () => {
  const styles = {
    container: {
      p: '0 !important',
    },
    heroButtons: {
      my: 3,
      mx: {
        xs: 'auto',
        md: 'unset',
      }
    },
    shopNowButton: {
      textTransform: 'none',
      borderRadius: 20,
      py: 1.5,
      px: 3,
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      }
    },
    heroLearnButton: {
      mx: 3,
      textTransform: 'none',
      p: 0,
      borderRadius: 0,
      borderBottom: '1px solid white',
      '&:hover': {
        color: 'black',
        borderBottom: '1px solid black',
        backgroundColor: 'unset',
      }
    },
    shopNowButtonText: {
      fontFamily: 'Real Head',
    },
  }

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <HeroSection 
          image="https://cdn.shopify.com/s/files/1/1162/8964/files/image_homepage_header_polaroid-go_009070_desktop_76247a6a-17dc-42a4-b19f-65c9286ab9ed_1800x.jpg?v=1652098145"
          mobileImage="https://cdn.shopify.com/s/files/1/1162/8964/files/image_homepage_header_polaroid-go_009070_mobile_ea2f2ee8-9e75-4e60-b960-e1dd519a69e9_700x.jpg?v=1652098251"
          category=""
          title="Polaroid Go"
          description="Portable. Wearable. Take anywhere-able."
          mobileDescription="Portable. Wearable. Take anywhere-able."
          textColor="white"
      >
        <Box sx={styles.heroButtons}>
          <Button 
            variant="contained" 
            sx={styles.shopNowButton}
            disableElevation
            href="collections/instant-cameras/Go"
          >
            <Typography sx={styles.shopNowButtonText}>
              Shop now
            </Typography>
          </Button>
          <Button sx={styles.heroLearnButton}>
            <Typography>
              Learn more
            </Typography>
          </Button>
        </Box>
      </HeroSection>
      <CategoryGrid />
    </Container>
  )
}

export default Home

// All the files stored in `public` folder will be available from 
// the browser. Be careful what files do you put there

// The global.css cannot be imported within the pages or components,
// it's only imported in _app.js !!! Import the module css instead !

// For routing use Link component (like React Router)

// Use CSS-in-JS directly in component only when you have some 
// conditional rendering (ex: a color depending on some variable)
// Otherwise, the code will look messy

// Custom Document - allows you to create your own custom HTML structure
// You can pass props to HTML tag, put your own links, meta etc. It's SSR,
// So you can't have onClick function in it.
// Custom Document is defined using _document.js file.

// To fetch data, you must define a function in page file
// 'getStaticProps' will allow us to fetch the data at build time
// 'getServerSideProps' - fetch data on each request (a little slower)
// 'getStaticPaths' - dinamically generate paths based on data we're fetching

// You can also use the classic 'useEffect' fetching method

// 'getServerSideProps' can be used on an article page, or in my case - 
// on the produt page. It fetches data on each request (when product page is visited)

// You can use a combination of 'getStaticProps' and 'getStaticPaths'
// to dimanically generate the paths with the data. This is much faster
// than using 'getServerSideProps', because 'getServerSideProps' generates
// pages on every request. The combination of 'getStaticProps' and 'getStaticPaths'
// allow us to statically pre-render pages that use dynamic routes
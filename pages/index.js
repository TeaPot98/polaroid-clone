import axios from 'axios'
import { server } from '../config'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Container,
  Box,
  Button,
  Typography,
} from '@mui/material'

import HeroSection from '../components/HeroSection'
import HomeCategoryTile from '../components/HomeCategoryTile'

const Home = ({ cameraModels }) => {
  console.log(cameraModels)
  const styles = {
    container: {
      // width: '100%',
      // mt: 8,
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
      // textDecoration: 'underline',
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
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: '1fr 1fr'
      },
      p: {
        xs: '1rem 0',
        md: 2,
      },
      gridColumnGap: {
        xs: 0,
        md: '1rem'
      },
      gridRowGap: {
        xs: '1rem',
        md: '3rem'
      },
    }
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
      <Box sx={styles.categoriesGrid}>
        <HomeCategoryTile 
          image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_cameras_1136x.jpg?v=1640015756"
          name="Instant cameras"
          link="collections/instant-cameras"
        />
        <HomeCategoryTile 
          image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_exclusive_1136x.jpg?v=1640015871"
          name="Limited & Exclusive"
          link="collections/instant-cameras"
        />
        <HomeCategoryTile 
          image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_accessories_1136x.jpg?v=1640016033"
          name="Accessories"
          link="collections/instant-cameras"
        />
        <HomeCategoryTile 
          image="https://cdn.shopify.com/s/files/1/1162/8964/files/homepage_module_desktop_printers_1136x.jpg?v=1640016165"
          name="Printers"
          link="collections/instant-cameras"
        />
      </Box>
    </Container>
  )
}

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${server}/api/instant-cameras`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      params: {
        populate: '*'
      }
    })
    const cameraModels = await res.data.data.map(m => ({...m, ...m.attributes}))
  
    return {
      props: {
        cameraModels
      },
      // revalidate: 10,
    }
  } catch (error) {
    console.log(error)
  }
  return {
    props: {}
  }
}

export default Home

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

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
import { server } from '../config'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ cameraModels }) {
  console.log(cameraModels)
  return (
    <div className={styles.container}>
      {/* Head helps us to give a page custom title, meta etc. */}
      <Head>
        <title>Polaroid Instant Cameras and Film</title>
        <meta name="description" content="Buy Polaroid cameras from official store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/instant-cameras`)
  const cameraModels = await res.json()

  return {
    props: {
      cameraModels
    },
    // revalidate: 10,
  }
}

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
import { themeOptions as light } from '../themes/light'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from '@emotion/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp

// The _app.js shows how every page will be returned
// As default, it only returns a component. If you want you can add
// a layout which will be returned for every page (same title, meta, links etc.)
// Another use: same footer, header, appBar for every page !!!

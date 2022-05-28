import dynamic from 'next/dynamic'

import Meta from './Meta'
import Footer from './Footer'

// The TopBar will now be rendered on server, because we have to change the number of cart items
const TopBar = dynamic(() => import('./TopBar'), { ssr: false })

const Layout = ({ children }) => {
  const styles = {
    main: {
      marginTop: '4rem',
    },
  }
  
  return (
    <>
      <Meta />
      <TopBar />
      <main style={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
import Meta from './Meta'
import Footer from './Footer'
// import TopBar from './TopBar'
import dynamic from 'next/dynamic'

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
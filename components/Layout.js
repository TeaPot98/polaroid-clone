import Meta from './Meta'

import TopBar from './TopBar'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <TopBar />
      <main>
        {children}
      </main>
      <footer>
        <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
      </footer>
    </>
  )
}

export default Layout
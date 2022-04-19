import { themeOptions as light } from '../themes/light'
import Meta from './Meta'
import { ThemeProvider } from '@emotion/react'

import TopBar from './TopBar'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <Meta />
      <TopBar />
      <main>
        {children}
      </main>
      <footer>
        <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
      </footer>
    </ThemeProvider>
  )
}

export default Layout
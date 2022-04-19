import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // You can add tags to HTML like 'lang="en"'
    // You have to restart the server in order to see the changes,
    // because it's server-side-rendered (SSR)
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
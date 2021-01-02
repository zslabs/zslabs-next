import Document, { Html, Head, Main, NextScript } from 'next/document'

import Analytics from '~components/Analytics'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Manrope-Medium.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Manrope-ExtraBold.woff2"
            as="font"
            crossOrigin=""
          />
          <link rel="shortcut icon" href="/me.png" />
          <Analytics />
        </Head>
        <body className="antialiased text-gray-900 dark:text-gray-100 min-h-screen bg-gray-100 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

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
            href="/fonts/Manrope.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/me.png" />
          <Analytics />
        </Head>
        <body className="antialiased font-medium text-gray-900 dark:text-gray-100 min-h-screen bg-gray-100 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

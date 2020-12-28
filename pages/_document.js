import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Manrope[wght].ttf"
            as="font"
            crossOrigin=""
          />
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

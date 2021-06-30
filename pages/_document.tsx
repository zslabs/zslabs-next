import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

import Analytics from '~components/Analytics'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Manrope.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/me.png" />
          <Analytics />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed"
            href="/rss.xml"
          />
        </Head>
        <body className="antialiased overflow-y-scroll overflow-x-hidden font-medium text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

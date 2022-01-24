import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Html, Head, Main, NextScript } from 'next/document'

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
            href="/fonts/Manrope[wght].woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono[wght].woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/me.png" />
          <Analytics />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed"
            href="/rss.xml"
          />
        </Head>
        <body className="antialiased overflow-y-scroll overflow-x-hidden font-medium text-slate-12 bg-slate-1">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

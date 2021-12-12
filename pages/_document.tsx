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
            href="/fonts/Manrope[wght].ttf"
            as="font"
            type="font/ttf"
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
        <body className="antialiased overflow-y-scroll overflow-x-hidden font-medium text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 tracking-tight">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

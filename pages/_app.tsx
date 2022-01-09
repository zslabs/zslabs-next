import { MotionConfig } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import SEO from '../next-seo.config'

import { spring } from '~helpers/styles'
import BaseLayout from '~layouts/BaseLayout'

import '~styles/index.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

/* eslint-disable no-undef */
Router.events.on('routeChangeComplete', (url) => {
  NProgress.done()

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.gtag('config', 'UA-17637644-1', {
        page_location: url,
        page_title: document.title,
      })
    }, 0)
  }
})
/* eslint-enable no-undef */

Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <MotionConfig transition={spring}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <DefaultSeo {...SEO} />
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </MotionConfig>
  )
}

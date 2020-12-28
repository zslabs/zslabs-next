import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'

import BaseLayout from '~layouts/BaseLayout'

import '~styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp

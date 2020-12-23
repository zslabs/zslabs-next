import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'

import BaseLayout from '~layouts/BaseLayout'

import '~styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
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

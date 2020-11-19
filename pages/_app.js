import PropTypes from 'prop-types'

import BaseLayout from '~layouts/BaseLayout'

import '~styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp

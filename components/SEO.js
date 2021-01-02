import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export default function SEO({ title, ...rest }) {
  const router = useRouter()

  return (
    <NextSeo
      title={`${title} - Zach Schnackel`}
      canonical={`https://zslabs.com${router.asPath}`}
      openGraph={{
        url: `https://zslabs.com${router.asPath}`,
        title: `${title} - Zach Schnackel`,
      }}
      {...rest}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

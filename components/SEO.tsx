import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
}

const SEO: React.FC<SEOProps> = ({ title, ...rest }) => {
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

export default SEO

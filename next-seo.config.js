const title = 'Zach Schnackel'
const description = 'Full-stack/motion developer'

const SEO = {
  title,
  description,
  canonical: 'https://zslabs.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://zslabs.com',
    title,
    description,
    images: [
      {
        url: 'https://zslabs.com/me.png',
        alt: title,
        width: 460,
        height: 460,
      },
    ],
  },
  twitter: {
    handle: '@zslabs',
    site: '@zslabs',
    cardType: 'summary_large_image',
  },
}

export default SEO

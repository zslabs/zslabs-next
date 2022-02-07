import * as React from 'react'

import { NextSeo } from 'next-seo'
import type { OpenGraph } from 'next-seo/lib/types'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
}

export default function SEO({ title, ...rest }: SEOProps): React.ReactElement {
  const router = useRouter()

  const openGraph: OpenGraph = React.useMemo(
    () => ({
      url: `https://zslabs.com${router.asPath}`,
      title: `${title} - Zach Schnackel`,
    }),
    [router.asPath, title]
  )

  return (
    <NextSeo
      title={`${title} - Zach Schnackel`}
      canonical={`https://zslabs.com${router.asPath}`}
      openGraph={openGraph}
      {...rest}
    />
  )
}

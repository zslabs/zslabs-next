import { GetServerSideProps, NextPage } from 'next'

import { getAllPosts } from '~lib/api'
import { getRssXml } from '~lib/rss'

const RSS: NextPage = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await getAllPosts()

  const rssData = getRssXml(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(rssData)
  res.end()

  return {
    props: {},
  }
}

export default RSS

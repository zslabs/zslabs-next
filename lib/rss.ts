import type { Post } from 'contentlayer/generated'

const blogPostsRssXml = (
  posts: Pick<Post, 'title' | 'url' | 'date'>[]
): {
  latestPostDate: string
  rssItemsXml: string
} => {
  let rssItemsXml = ''

  posts.forEach((post) => {
    rssItemsXml += `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>https://zslabs.com${post.url}</link>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid isPermaLink="false">https://zslabs.com${post.url}</guid>
      </item>`
  })

  return {
    latestPostDate: new Date(posts[0].date).toUTCString(),
    rssItemsXml,
  }
}

// eslint-disable-next-line import/prefer-default-export
export const getRssXml = (
  posts: Pick<Post, 'title' | 'url' | 'date'>[]
): string => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(posts)

  return `<?xml version="1.0" ?>
      <rss
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:content="http://purl.org/rss/1.0/modules/content/"
        xmlns:atom="http://www.w3.org/2005/Atom"
        version="2.0"
      >
        <channel>
          <title><![CDATA[ZS Labs articles]]></title>
          <link>https://zslabs.com</link>
          <description>
            <![CDATA[Full-stack/motion developer]]>
          </description>
          <language>en</language>
          <lastBuildDate>${latestPostDate}</lastBuildDate>
          ${rssItemsXml}
        </channel>
      </rss>`
}

import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'articles')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export interface Post {
  content?: string
  date: Date
  dateModified?: Date
  slug: string
  title: string
}

interface PostBySlugProps {
  slug: string
  fields?: string[]
  includeContent?: boolean
}

export function getPostBySlug({
  slug,
  fields = [],
  includeContent,
}: PostBySlugProps): Post {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const returnObj = {
    title: data.title,
    date: data.date,
    slug: realSlug,
    ...(includeContent && { content }),
  }

  fields.forEach((field) => {
    if (data[field]) {
      returnObj[field] = data[field]
    }
  })

  return returnObj
}

export function getAllPosts(fields?: string[]): Post[] {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => getPostBySlug({ slug, fields }))
    // Sort posts by date in descending order
    .sort(
      (post1: Post, post2: Post) =>
        +new Date(post2.date) - +new Date(post1.date)
    )

  return posts
}

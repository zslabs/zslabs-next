import fs from 'fs'
import path from 'path'

import { bundleMDX } from 'mdx-bundler'

const postsDirectory = path.join(process.cwd(), 'articles')

export function getFiles(folder: string): string[] {
  return fs.readdirSync(folder)
}

export interface Post {
  frontmatter: {
    title: string
    date: Date
    dateModified?: Date
    slug: string
  }
  content?: string
}

interface PostFile {
  frontmatter: {
    [key: string]: unknown
  }
  content?: string
}

/**
 * Gets article contents
 */
export async function resolvePostFile({
  post,
  includeContent,
}: {
  post: string
  includeContent?: boolean
}): Promise<PostFile> {
  const fullPath = path.join(postsDirectory, post)

  const { code: content, frontmatter } = await bundleMDX({
    file: fullPath,
  })

  const resolvedFrontmatter = frontmatter.slug
    ? frontmatter
    : { ...frontmatter, slug: post.replace(/\.mdx$/, '') }

  if (includeContent) {
    return {
      frontmatter: resolvedFrontmatter,
      content,
    }
  }

  return {
    frontmatter: resolvedFrontmatter,
  }
}

export async function getAllPosts(includeContent?: boolean): Promise<Post[]> {
  const files = getFiles(postsDirectory)

  const posts = await Promise.all(
    files.map(async (post) => resolvePostFile({ post, includeContent }))
  )

  posts.sort(
    (post1: Post, post2: Post) =>
      +new Date(post2.frontmatter.date) - +new Date(post1.frontmatter.date)
  )

  return posts as Post[]
}

export async function getPostBySlug({ slug }: { slug: string }): Promise<Post> {
  const posts = await getAllPosts(true)

  const matchedPost = posts.find((post) => post.frontmatter.slug === slug)

  return matchedPost
}

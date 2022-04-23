import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    dateModified: {
      type: 'date',
      description: 'The modified date of the post',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/articles/${post._raw.flattenedPath}`, // eslint-disable-line no-underscore-dangle
    },
  },
}))

export default makeSource({
  contentDirPath: 'articles',
  documentTypes: [Post],
})

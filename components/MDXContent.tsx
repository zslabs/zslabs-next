import React from 'react'

import type { MDX } from 'contentlayer/core'
import { getMDXComponent } from 'mdx-bundler/client'
import NextImage from 'next/image'

import AutoLinkHeader from './AutoLinkHeader'

import Alert from '~components/Alert'
import Blockquote from '~components/Blockquote'
import Code from '~components/Code'
import CodePen from '~components/CodePen'
import Prose from '~components/Prose'
import TextLink from '~components/TextLink'
import Tweet from '~components/Tweet'

interface ImageProps {
  caption?: string
  src: string
  height: string
  width: string
}

function Image({
  caption,
  src,
  height,
  width,
}: ImageProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <figure className="my-8 text-center">
      <div className="relative mx-auto grid w-fit rounded-lg shadow">
        <div className="absolute -inset-2 rounded-lg bg-slate-200 shadow-inner dark:bg-slate-900" />
        <NextImage
          src={src}
          height={height}
          width={width}
          className="rounded-lg"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

const components = {
  Alert,
  Image,
  CodePen,
  Tweet,
  TextLink,
  a: (props) => <TextLink includeIcon {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  h1: (props) => <AutoLinkHeader as="h1" {...props} />,
  h2: (props) => <AutoLinkHeader as="h2" {...props} />,
  h3: (props) => <AutoLinkHeader as="h3" {...props} />,
  h4: (props) => <AutoLinkHeader as="h4" {...props} />,
  h5: (props) => <AutoLinkHeader as="h5" {...props} />,
  pre: (preProps) => {
    const {
      children: {
        props: { children, className },
      },
    } = preProps

    const props = {
      codeString: children.trim(),
      language: className && className.split('-')[1],
    }

    return (
      <div className="my-8">
        <Code {...props} />
      </div>
    )
  },
}

const MDXContent: React.FC<{
  content: MDX
}> = ({ content }) => {
  const Component = React.useMemo(
    () => getMDXComponent(content.code),
    [content]
  )

  return (
    <Prose>
      <Component components={components} />
    </Prose>
  )
}

export default MDXContent

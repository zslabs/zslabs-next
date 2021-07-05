import React from 'react'
import NextImage from 'next/image'
import { getMDXComponent } from 'mdx-bundler/client'
import clsx from 'clsx'

import AutoLinkHeader from './AutoLinkHeader'

import Alert from '~components/Alert'
import Prose from '~components/Prose'
import TextLink from '~components/TextLink'
import Code from '~components/Code'
import Blockquote from '~components/Blockquote'
import CodePen from '~components/CodePen'
import Tweet from '~components/Tweet'

interface ImageProps {
  src: string
  height: string
  width: string
}

function Image({
  className,
  src,
  height,
  width,
}: ImageProps & React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div className="my-8 text-center">
      <NextImage
        src={src}
        height={height}
        width={width}
        className={clsx('rounded-lg shadow-sm', className)}
      />
    </div>
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

    return <Code {...props} wrapperClassName="my-8" />
  },
}

const MDXContent: React.FC<{
  content: string
  className?: string
}> = ({ content, className }) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content])

  return (
    <Prose className={className}>
      <Component components={components} />
    </Prose>
  )
}

export default MDXContent

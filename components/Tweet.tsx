/**
 * @SOURCE https://github.com/PaulieScanlon/mdx-embed/blob/main/packages/mdx-embed/src/components/twitter/tweet.tsx
 * MIT License
 * Copyright (c) 2020 Paul Scanlon
 */
import React from 'react'

import GeneralObserver from '~components/GeneralObserver'
import useScript from '~hooks/useScript'

export interface ITweetProps {
  /** Tweet link */
  tweetLink: string
  /** Color theme of the Tweet */
  theme?: 'light' | 'dark'
  /** Alignment of the Tweet */
  align?: 'left' | 'center' | 'right'
  /** Hides the conversation */
  hideConversation?: boolean
}

const Tweet: React.FC<ITweetProps> = ({
  tweetLink,
  theme = 'light',
  align = 'left',
  hideConversation = false,
}: ITweetProps) => {
  useScript('https://platform.twitter.com/widgets.js')

  return (
    <GeneralObserver>
      <div data-testid="twitter-tweet" style={{ overflow: 'auto' }}>
        <blockquote
          className="twitter-tweet"
          data-theme={theme}
          data-align={align}
          data-conversation={hideConversation ? 'none' : ''}
        >
          <a href={`https://twitter.com/${tweetLink}?ref_src=twsrc%5Etfw`}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {typeof window !== 'undefined' && !(window as any).twttr
              ? 'Loading'
              : ''}
          </a>
        </blockquote>
      </div>
    </GeneralObserver>
  )
}

export default Tweet

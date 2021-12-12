import * as React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { ReactComponent as SlackSvg } from '~icons/logos/slack.svg'
import { ReactComponent as TwitterSvg } from '~icons/logos/twitter.svg'
import { ReactComponent as GitHubSvg } from '~icons/logos/github.svg'

// Checks against absolute URLs that share 👇 so we can still pass it along to our internal link component
const domainRegex = /http[s]*:\/\/[www.]*zslabs\.com[/]?/

export interface TextLinkProps {
  href: string
  includeIcon?: boolean
}

const TextLinkContentsIcon: React.FC<{ href: string; className?: string }> = ({
  href,
  className,
}) => {
  if (href.includes('slack.com')) {
    return <SlackSvg className={clsx(className)} />
  }

  if (href.includes('twitter.com')) {
    return <TwitterSvg className={clsx('text-[#1DA1F2]', className)} />
  }

  if (href.includes('github.com')) {
    return (
      <GitHubSvg
        className={clsx('text-slate-900 dark:text-slate-100', className)}
      />
    )
  }

  return null
}

interface TextLinkContentsProps {
  href: string
  includeIcon?: boolean
}

const TextLinkContents: React.FC<TextLinkContentsProps> = ({
  includeIcon,
  children,
  href,
}) => {
  if (!includeIcon) {
    return <>{children}</>
  }

  return (
    <>
      <TextLinkContentsIcon
        className="inline-block mr-1 relative -top-0.5"
        href={href}
      />
      {children}
    </>
  )
}

/* eslint-disable no-param-reassign */
const TextLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & TextLinkProps
> = ({ href, children, includeIcon, ...rest }) => {
  const sameDomain = domainRegex.test(href)

  // If our link matches the `domainRegex` above, update to become relative
  if (sameDomain) {
    href = href.replace(domainRegex, '/')
  }

  // If our link is relative, we can assume it's an internal link and use `next/link`
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a data-link-internal {...rest}>
          <TextLinkContents href={href} includeIcon={includeIcon}>
            {children}
          </TextLinkContents>
        </a>
      </Link>
    )
  }

  // Treat urls that aren't http protocols as "normal" links
  if (!href.startsWith('http')) {
    return (
      <a href={href} {...rest}>
        <TextLinkContents href={href} includeIcon={includeIcon}>
          {children}
        </TextLinkContents>
      </a>
    )
  }

  // Otherwise, this is an external link that we can add on good security defaults for
  return (
    <a
      data-link-external
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    >
      <TextLinkContents href={href} includeIcon={includeIcon}>
        {children}
      </TextLinkContents>
    </a>
  )
}
/* eslint-enable no-param-reassign */

export default React.memo(TextLink)

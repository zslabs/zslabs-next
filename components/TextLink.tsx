import * as React from 'react'

import Link from 'next/link'

// Checks against absolute URLs that share 👇 so we can still pass it along to our internal link component
const domainRegex = /http[s]*:\/\/[www.]*zslabs\.com[/]?/

export interface TextLinkProps {
  href: string
}

/* eslint-disable no-param-reassign */
const TextLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & TextLinkProps
> = ({ href, children, ...rest }) => {
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
          {children}
        </a>
      </Link>
    )
  }

  // Treat urls that aren't http protocols as "normal" links
  if (!href.startsWith('http')) {
    return (
      <a href={href} {...rest}>
        {children}
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
      {children}
    </a>
  )
}
/* eslint-enable no-param-reassign */

export default React.memo(TextLink)

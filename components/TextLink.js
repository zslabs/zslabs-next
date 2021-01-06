import PropTypes from 'prop-types'
import Link from 'next/link'

// Checks against absolute URLs that share 👇 so we can still pass it along to our internal link component
const domainRegex = /http[s]*:\/\/[www.]*zslabs\.com[/]?/

/* eslint-disable no-param-reassign */
const TextLink = ({ href, ...rest }) => {
  const sameDomain = domainRegex.test(href)

  // If our link matches the `domainRegex` above, update to become relative
  if (sameDomain) {
    href = href.replace(domainRegex, '/')
  }

  // If our link is relative, we can assume it's an internal link and use `next/link`
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a data-link-internal {...rest} />
      </Link>
    )
  }

  // Treat urls that aren't http protocols as "normal" links
  if (!href.startsWith('http')) {
    return <a href={href} {...rest} />
  }

  // Otherwise, this is an external link that we can add on good security defaults for
  return (
    <a
      data-link-external
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  )
}
/* eslint-enable no-param-reassign */

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default TextLink

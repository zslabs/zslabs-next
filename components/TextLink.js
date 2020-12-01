import PropTypes from 'prop-types'
import Link from 'next/link'

// Checks against absolute URLs that share 👇 so we can still pass it along to our internal link component
const domainRegex = /http[s]*:\/\/[www.]*zslabs\.com[/]?/

/* eslint-disable no-param-reassign */
const TextLink = ({ href, ...rest }) => {
  const sameDomain = domainRegex.test(href)

  if (sameDomain) {
    href = href.replace(domainRegex, '/')
  }

  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a data-link-internal {...rest} />
      </Link>
    )
  }

  // Treat urls that aren't web protocols as "normal" links
  if (!href.startsWith('http')) {
    return <a href={href} {...rest} />
  }

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

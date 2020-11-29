import PropTypes from 'prop-types'

export function BubbleListItem({ title, children, link, ...rest }) {
  return (
    <div
      className="relative z-20 grid grid-flow-col auto-cols-auto gap-8 items-center justify-start group"
      {...rest}
    >
      <div className="w-4 h-4 ring-4 ring-gray-100 dark:ring-gray-800 border-2 border-gray-900 dark:border-gray-100 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-900 dark:group-hover:bg-gray-100 transform duration-300 ease-bounce group-hover:scale-125" />
      <div className="space-y-2">
        <h3 className="font-extrabold text-2xl">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <div>{children}</div>
      </div>
    </div>
  )
}

BubbleListItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default function BubbleList({ children, ...rest }) {
  return (
    <div className="relative" {...rest}>
      <div className="absolute top-0 left-2 transform -translate-x-1/2 h-full z-10">
        <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
        <div
          className="h-full bg-gray-900 dark:bg-gray-100"
          style={{ width: 2 }}
        />
        <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="grid grid-cols-1 gap-8 py-8">{children}</div>
    </div>
  )
}

BubbleList.propTypes = {
  children: PropTypes.node.isRequired,
}

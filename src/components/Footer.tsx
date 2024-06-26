import config from '../../config/site.config'

const createFooterMarkup = () => {
  return {
    __html: config.footer,
  }
}

const Footer = () => {
  return (
    <div
      className="w-full border-t border-gray-900 p-4 text-center text-xs font-medium text-gray-900 dark:border-gray-900/30"
      dangerouslySetInnerHTML={createFooterMarkup()}
    ></div>
  )
}

export default Footer

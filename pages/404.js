import SEO from '~components/SEO'

export default function PageNotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <h1 className="text-25vw text-center font-extrabold bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 text-fill-transparent leading-none">
        404
      </h1>
    </>
  )
}

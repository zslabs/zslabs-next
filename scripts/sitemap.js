/* @SOURCE https://github.com/leerob/leerob.io */
const fs = require('fs')

const globby = require('globby')
const prettier = require('prettier')

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./prettier.config.js')
  const pages = await globby([
    'pages/*.js',
    'articles/*.mdx',
    '!pages/_*.js',
    '!pages/404.js',
    '!pages/api',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('articles', '/articles')
                  .replace('.js', '')
                  .replace('.mdx', '')
                const route = path === '/index' ? '' : path

                return `
                        <url>
                            <loc>${`https://zslabs.com${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}

generateSitemap()

import ixanary from '../../ixanary.config'

const fixedPage = [
  '',
  'cards/',
  'skills/',
  'unit-skills/',
  'search/'
]

export function generateSitemapXml(): string {  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  fixedPage.forEach((fixed) => {
      const path = `${ixanary.baseUrl}/${fixed}`
      const lastmod = new Date()

      xml += `
        <url>
          <loc>${path}</loc>
          <lastmod>${lastmod.toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
        </url>
      `
  })

  xml += `</urlset>`

  return xml
}
const listAllLinks = require('./lib/list-all-links')
const filterLinks = require('./lib/filter-links')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const { url } = request
  const pathname = url.split('?').shift()
  const data = request.method === 'POST' ? await request.body : await request.query
  const results = Object.values(data).length > 0 ? filterLinks(data) : listAllLinks()

  if (!['/', '/view'].includes(pathname)) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  }

  if (request.method === 'OPTIONS') {
    response.end()
  } else if (pathname === '/links') {
    response.json(results)
  } else if (pathname === '/view') {
    response.send(renderPage(results))
  } else {
    response.status(404)
    response.send('not found')
  }
}

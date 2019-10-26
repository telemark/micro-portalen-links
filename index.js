const { readFileSync } = require('fs')
const md = require('markdown-it')()
const { send } = require('micro')
const listAllLinks = require('./lib/list-all-links')
const filterLinks = require('./lib/filter-links')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const { url: pathname } = request
  const data = request.method === 'POST' ? await request.body : await request.query
  const results = Object.values(data).length > 0 ? filterLinks(data) : listAllLinks()

  if (!['/', '/view'].includes(pathname)) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  }

  if (request.method === 'OPTIONS') {
    response.end()
  } else if (pathname === '/links') {
    send(response, 200, results)
  } else if (pathname === '/view') {
    send(response, 200, renderPage(results))
  } else {
    const readme = readFileSync(`${__dirname}/README.md`, 'utf-8')
    send(response, 200, md.render(readme))
  }
}

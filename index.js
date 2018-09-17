const { readFile } = require('fs').promises
const md = require('markdown-it')()
const { parse } = require('url')
const { json, send } = require('micro')
const listAllLinks = require('./lib/list-all-links')
const filterLinks = require('./lib/filter-links')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const { pathname, query } = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
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
    const readme = await readFile('./README.md', 'utf-8')
    send(response, 200, md.render(readme))
  }
}

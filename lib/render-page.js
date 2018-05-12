'use strict'

module.exports = (results) => {
  const links = results
    .map((link) => {
      return `<div><h2>${link.title}</h2><div>${link.description}</div><div><a href="${link.url}" target="_blank">${link.url}</a></div></div>`
    })

  return `<html><body style="text-align: center"><h1>Linker</h1>${links.join('')}</body></html>`
}

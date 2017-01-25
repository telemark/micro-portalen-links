'use strict'

const fs = require('fs')
const makeUnique = require('tfk-unique-array')
const isJson = (file) => file.endsWith('.json')

module.exports = () => {
  const files = fs.readdirSync('data').filter(isJson)
  let links = []

  files.forEach((file) => {
    const jsonPath = `../data/${file}`
    links = links.concat(require(jsonPath))
  })

  return makeUnique(links)
}

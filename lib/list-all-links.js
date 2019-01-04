const { readdirSync } = require('fs')
const makeUnique = require('tfk-unique-array')
const isJson = (file) => file.endsWith('.json')

module.exports = () => {
  const files = readdirSync(`${__dirname}/data`).filter(isJson)
  let links = []

  files.forEach((file) => {
    const jsonPath = `${__dirname}/data/${file}`
    links = links.concat(require(jsonPath))
  })

  return makeUnique(links)
}

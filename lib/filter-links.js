const makeUnique = require('tfk-unique-array')
const isFile = require('is-file')
const wildcard = require('wildcard')

function validateIp (options) {
  const { link, myIp } = options
  const include = link.includeIps && Array.isArray(link.includeIps) ? link.includeIps.filter(ip => wildcard(ip, myIp)).length > 0 : true
  const exclude = link.excludeIps && Array.isArray(link.excludeIps) ? link.excludeIps.filter(ip => wildcard(ip, myIp)).length !== 0 : false

  return include === true && exclude === false
}

function ipFilter (options) {
  const links = options.links.map(link => Object.assign(link, { isValid: validateIp({ link: link, myIp: options.myIp }) }))
  return links.filter(link => link.isValid)
}

module.exports = data => {
  let roles = data ? data.roles : []
  let myLinks = []
  let myIp = data ? data.myIp : false

  roles = Array.isArray(roles) ? roles : roles.split('|')

  roles.forEach((item) => {
    const jsonPath = `${__dirname}/data/${item}.json`
    const filePath = `${__dirname}/data/${item}.json`

    if (isFile(filePath)) {
      myLinks = myLinks.concat(require(jsonPath))
    }
  })

  return makeUnique(myIp ? ipFilter({ links: myLinks, myIp: myIp }) : myLinks)
}

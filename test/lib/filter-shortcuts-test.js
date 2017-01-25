'use strict'

const tap = require('tap')
const buildMyLinks = require('../../lib/filter-links')
const administrasjonen = require('../../data/administrasjonen.json')
const skole = require('../../data/skole.json')
const tannhelse = require('../../data/tannhelse.json')
const tullefant = []

tap.equal(JSON.stringify(administrasjonen), JSON.stringify(buildMyLinks({roles: 'administrasjonen'})), 'It returns administrasjonen correct')

tap.equal(JSON.stringify(skole), JSON.stringify(buildMyLinks({roles: 'skole'})), 'It returns skole correct')

tap.equal(JSON.stringify(tannhelse), JSON.stringify(buildMyLinks({roles: ['tannhelse']})), 'It returns tannhelse correct')

tap.equal(JSON.stringify(tullefant), JSON.stringify(buildMyLinks({roles: ['tullefant']})), 'It returns tullefant correct')

tap.equal(JSON.stringify([]), JSON.stringify(buildMyLinks()), 'It returns empty correct')

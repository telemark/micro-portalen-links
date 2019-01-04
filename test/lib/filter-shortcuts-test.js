'use strict'

const test = require('ava')
const buildMyLinks = require('../../lib/filter-links')
const administrasjonen = require('../../lib/data/administrasjonen.json')
const skole = require('../../lib/data/skole.json')
const tannhelse = require('../../lib/data/tannhelse.json')
const tullefant = []

test('Links generated correct', t => {
  t.deepEqual(administrasjonen, buildMyLinks({ roles: 'administrasjonen' }), 'It returns administrasjonen correct')

  t.deepEqual(skole, buildMyLinks({ roles: 'skole' }), 'It returns skole correct')

  t.deepEqual(tannhelse, buildMyLinks({ roles: ['tannhelse'] }), 'It returns tannhelse correct')

  t.deepEqual(tullefant, buildMyLinks({ roles: ['tullefant'] }), 'It returns tullefant correct')

  t.deepEqual([], buildMyLinks(), 'It returns empty correct')
})

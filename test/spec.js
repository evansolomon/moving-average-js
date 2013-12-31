var assert = require('assert')
var fs = require('fs')
var path = require('path')

var yaml = require('js-yaml')

var pathToSpec = path.resolve(__dirname, 'spec.yml')
var spec = yaml.load(fs.readFileSync(pathToSpec, 'utf8'))

var movingAverage = require('../')

function test(input, expected) {
  assert.deepEqual(movingAverage(input), expected)
}

var description, data
for (description in spec) {
  if (! spec.hasOwnProperty(description)) continue

  data = spec[description];
  it(description, test.bind(null, data.input, data.expected))
}

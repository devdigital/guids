#!/usr/bin/env node

const { uuid } = require('uuidv4')
const clipboard = require('clipboardy')

const guid = uuid()
clipboard.writeSync(guid)

console.log(guid)

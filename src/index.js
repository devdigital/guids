#!/usr/bin/env node

import { v4 as uuidv4 } from 'uuid'
import clipboard from 'clipboardy'

const guid = uuidv4()
clipboard.writeSync(guid)

console.log(guid)

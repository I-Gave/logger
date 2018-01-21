/* eslint-env node, mocha */

'use strict';

const assert = require('assert');
const Logger = require('./logger');

let logger;

describe('Logger', () => {

  it('inits new logger', () => {
    logger = new Logger();
  })

  it('defaults to errors and above', () => {
    assert(logger.level(), 50);
  })

})
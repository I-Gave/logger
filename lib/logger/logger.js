const bunyan = require('bunyan');
const bformat = require('bunyan-format')
const formatOut = bformat({ outputMode: 'short' })
const util = require('../util');

class Logger {
  constructor(name) {
    const config = Logger.DEFAULTS;
    config.name = name;
    return bunyan.createLogger(config);
  }

  static get DEFAULTS() {
    return {
      name: 'logger',
      level: 'debug', // debug if no options passed
      streams: [{
        type: 'rotating-file',
        path: '/tmp/logger.log',
        period: '1d',
        count: 30
      },
      {
        stream: formatOut
      }]
    }
  }
}

module.exports = Logger;
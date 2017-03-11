#!/usr/bin/env node

// eslint-disable-next-line no-unused-expressions
require('yargs')
  .config(require('rc')('ghorg', null, {}))
  .option('o', {
    alias: 'organization',
    describe: 'Organization name',
    required: true
  })
  .commandDir('./commands')
  .demandCommand()
  .help('h')
  .argv

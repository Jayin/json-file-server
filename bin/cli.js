#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
var program = require('commander')
var app = require('../app')
var fs = require('fs')
var package = require('../package.json')

program
    .version(package.version)

program
    .command('run [folder]')
    .description('run json file server')
    .option('-p, --port [port]', 'the port to listen on')
    .action(function(folder, options) {
        var base_path = folder || '.'
        var port = options.port || 3000
        app.set('base_path', base_path)
        app.listen(port, function() {
            console.log('Now working on http://127.0.0.1:%d ,serving `%s`', port, base_path)
        })
    });

program
    .parse(process.argv);

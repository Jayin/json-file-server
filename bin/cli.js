#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2))
var app = require('../app')

app.set('base_path', argv['_'][0] || '.')
app.listen(argv['port'] || 3000, function(){
    console.log('Now working on http://127.0.0.1:' + (argv['port'] || 3000))
})

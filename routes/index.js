var fs = require('fs')
var express = require('express')
var router = express.Router()
var path = require('path')


router.all('*', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(process.cwd())
    console.log(path.resolve(process.cwd(), '../test'))
    var base_path = path.resolve(process.cwd(), '../test')
    var posible_file = []
    posible_file.push(req.url)
    posible_file.push(req.url + '.' + req.method.toLowerCase())
    console.log(posible_file)
    var hasFind = false;
    for (var i = 0; i < posible_file.length; i++) {
        var file_path = path.join(base_path, posible_file[i])
        console.log(file_path)
        if (fs.existsSync(file_path)) {
            console.log('exist')
            hasFind = true
            res.sendFile(file_path)
            break
        } else {
            console.log('not exist')
        }
    }
    if (!hasFind) {
        res.status(404).send('NOT FILE')
    }
});

module.exports = router;

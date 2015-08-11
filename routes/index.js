var fs = require('fs')
var express = require('express')
var router = express.Router()
var path = require('path')


router.all('*', function(req, res, next) {
    var base_path = path.resolve(process.cwd(), req.app.get('base_path'))
    var f = req.url + '.' + req.method.toLowerCase()
    // without querystring
    if(fs.existsSync(path.join(base_path, f))){
         res.sendFile(path.join(base_path, f))
         return
    }
    if(req.url.indexOf('?') == -1){
        res.status(404).send('NOT FILE')
        return
    }
    // with query string
    var prefix = req.url.split('?')[0]
    var full_prefix = prefix + '.' + req.method.toLowerCase()
    var _dir = req.url.substring(0, prefix.lastIndexOf('/'))

    if(fs.existsSync(path.join(base_path, _dir))){
        var posible_files = fs.readdirSync(path.join(base_path, _dir))

        for(var i=0; i<posible_files.length; i++){
             var f = posible_files[i]
             var file_path = path.join(base_path, f)
             if(file_path.indexOf(full_prefix + '?') != -1){
                var ok = true
                for(var k in req.query){
                    if(file_path.indexOf(k + '=' + req.query[k]) == -1){
                        ok = false
                        break
                    }
                }
                if(ok){
                    res.sendFile(file_path)
                    return
                }
             }
        }
    }
    res.status(404).send('No File')
});

module.exports = router;

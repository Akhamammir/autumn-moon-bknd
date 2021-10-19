var express = require('express');
var router = express.Router();
const https = require("https");
const fs = require('fs')

router.post('/', function(req, res, next) {
    console.log("🚀 ~ file: guias.js ~ line 8 ~ router.post ~ req.files.foo", req.files.archivo.tempFilePath)

    fs.readFile(req.files.archivo.tempFilePath, 'utf8', function (err, data) {
        const request = https.request('https://content.dropboxapi.com/2/files/upload', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer WctdIMCxWZEAAAAAAAAAAXjFgKTcqT5EDEfrfaxLAF-7jme4V40blD26Iy6Ymows`,
                'Dropbox-API-Arg': JSON.stringify({
                    'path': '/HezaServer/cvtest.pdf',
                    'mode': 'overwrite',
                    'autorename': true, 
                    'mute': false,
                    'strict_conflict': false
                }),
                'Content-Type': 'application/octet-stream',
            }
        }, (response) => {
            response.on('data', function(d) {
                process.stdout.write(d);
            });
        });
        
        request.write(data);
        request.end();
        res.send(200, {message: "archivo cargado"});
    });
    
});

module.exports = router;

const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

function getMockJson(req, res, method) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8')
    const originalUrl = req.originalUrl
        .split('/')
        [req.originalUrl.split('/').length - 1].split('?')[0]
    res.status(200).send(
        fs
            .readFileSync(
                `${path.join(__dirname, 'json')}/${method}/${originalUrl}.json`
            )
            .toString('UTF-8')
    )
}
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE'
    )
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})
app.get('*', (req, res) => {
    getMockJson(req, res, 'GET')
})
app.post('*', (req, res) => {
    getMockJson(req, res, 'POST')
})
app.put('*', (req, res) => {
    getMockJson(req, res, 'PUT')
})
app.delete('*', (req, res) => {
    getMockJson(req, res, 'DELETE')
})

app.listen(8001, function() {
    console.log(`Mock listening on port 8001`)
})

const app = require('./app');
const port = process.env.port || 3000;
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');


const directoryToServe = 'views';

app.use('/', express.static(path.join(__dirname, '.', directoryToServe)));

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key'))
};

https.createServer(httpsOptions, app)
    .listen(port, () => {
        console.log(`Servering the ${directoryToServe}/ directory at https://localhost:${port}`)
    });
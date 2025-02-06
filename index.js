// import os package
// const os = require('os')
// import path package
// const path = require('path')

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname, 'myName.txt'), (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});


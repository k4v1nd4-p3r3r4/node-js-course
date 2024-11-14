// import os pakage
// const os = require('os')
// import path pakage
// const path = require('path')

import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//console out os platform
console.log(os.platform());
//console out os version
console.log(os.version());

// find out where is your project file path
console.log(__dirname);
//and with file name
console.log(__filename);
// console out only file name
console.log(path.basename(__filename));
//console out file extention 
console.log(path.extname(__filename));

console.log(path.parse(__filename));



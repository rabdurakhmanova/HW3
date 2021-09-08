/*var json2xlsx = require('node-json-xlsx');
var fs =require('fs');
fs.readFile('data.json', function(err, data) {
    if (err) throw (err);
    var result = JSON.parse(data);
    var xlsx = json2xlsx(result);
    fs.writeFileSync('data.xlsx', xlsx, 'binary');
})*/

const fs = require('fs');
const path = require('path');
const json2xls = require('json2xls');
const filename = './data.xlsx';

const convert = (pathToJSONFiles, pathToXLSX) => {
  const jsonsInDir = fs.readdirSync(pathToJSONFiles).filter(file => path.extname(file) === '.json');
  jsonsInDir.forEach((fileName) => {
    const fileData = fs.readFileSync(path.join(pathToJSONFiles, fileName), 'utf-8');
    const json = JSON.parse(fileData);
    const xls = json2xls(json);
    fs.writeFileSync('data.xlsx', xls, 'binary');
  });
  
  const [fileName] = pathToXLSX.split('/').reverse();
  console.log( filename + " file is saved!");
};

convert('./jsons', './data.xlsx');

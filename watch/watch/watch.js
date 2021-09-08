var chokidar = require('chokidar');
const { reverse } = require('dns');
const { fstat } = require('fs');

const getFileNameAndExt = (path) => {
    const [file] = path.split('\\')
        .reverse()
    return [ext, fileName] = file.split('.')
        .reverse();
}

const watch = (folderPath) => {
    const watcher = chokidar.watch(folderPath, {ignored: /^\./, persistent: true});
    watcher
        .on('add', function(path) {
            const [ext, fileName] = getFileNameAndExt(path);
            if (ext === 'csv') {
                console.log(`new ${fileName}.csv file has been added`);
                // fs.write
            }
        })
        .on('change', function(path) {
            const [ext, fileName] = getFileNameAndExt(path);
            if (ext === 'csv') {
                console.log(`${fileName}.csv file has been changed`);
                // fs.write
            }
        })
        .on('unlink', function(path) {console.log('File', path, 'has been removed');})
        .on('error', function(error) {console.error('Error happened', error);})
};

watch('./files')


// /*const fs = require('fs');

// fs.watch("data.csv", (eventType, filename) => {
// console.log("\nThe file", filename, "was modified!");
// console.log("The type of change was:", eventType);
// });

// // Renaming the file to a new name
// setTimeout(
// () => fs.renameSync("data.csv", "new_data.csv"),
// 1000
// );

// // Renaming the file back to its old name
// setTimeout(
// () => fs.renameSync("new_data.csv", "data.csv"),
// 2000
// );

// // Changing the contents of the file
// setTimeout(
// () => fs.writeFileSync("data.csv",
// "The file is modified"), 3000
// );*/

// // Node.js program to demonstrate the
// // fs.watch() method

// // Import the filesystem module
// const fs = require('fs');

// fs.watch("watch", (eventType, filename) => {
// console.log("\nThe file", filename, "was modified!");
// console.log("The type of change was:", eventType);
// });


// // Changing the contents of a file
// setTimeout(
// () => fs.writeFileSync("watch/data.csv",
// "File, modified"), 1000
// );
// const CSVToJSON = require('csvtojson');

// // convert users.csv file to JSON array
// CSVToJSON().fromFile('data.csv')
//     .then(status=> {

//         // users is a JSON array
//         // log the JSON array
//         console.log(status);
//     }).catch(err => {
//         // log error if any
//         console.log(err);
//     });

//     fs.writeFile('dat.json', JSON.stringify(status), (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("JSON array is saved.");
//     });


// // Renaming a file to a new name
// setTimeout(
// () => fs.renameSync("watch/data.csv",
// "watch/data2.csv"), 2000
// );


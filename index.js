const fsPromises = require('fs').promises



const copy = (src, dst) => {
    fsPromises.readFile(src, 'utf-8')
        .then(data => {
            fsPromises.writeFile(dst, data);

        })
        .catch(err => {
            console.log(err);
        })
}

const transform = (src) => {
    fsPromises.readFile(src, 'utf-8')
        .then(data => {
            fsPromises.writeFile(src, data.replace(/[^a-z]/g, '').toUpperCase().split("").reverse().join(""))

        })
        .catch(err => {
            console.log(err);
        })
}






module.exports = {
    copy,
    transform
}
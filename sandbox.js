const fsPromises = require('fs').promises

fsPromises.readFile('read.txt', 'utf-8')
    .then(data => {
        data.toUpperCase;
    })
    .catch(err => {
        console.log(err);
    })

fsPromises.writeFile('./reeeeed.txt', 'your mom')

fsPromises.readFile('README.md', 'utf-8')
    .then(data => {
        fsPromises.writeFile('./copy.md', data)
            ;
    })
    .catch(err => {
        console.log(err);
    })


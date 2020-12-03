const fsPromises = require('fs').promises
const fetch = require('node-fetch');
// fsPromises.readFile('read.txt', 'utf-8')
//     .then(data => {
//         data.toUpperCase;
//     })
//     .catch(err => {
//         console.log(err);
//     })

// fsPromises.writeFile('./reeeeed.txt', 'your mom')

// fsPromises.readFile('README.md', 'utf-8')
//     .then(data => {
//         fsPromises.writeFile('./copy.md', data)
//             ;
//     })
//     .catch(err => {
//         console.log(err);
//     })

const fetchQuotes = () => {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/')


        .then(json => {
            return res.json.map(quote => quote.quote)

        })
}

// Promise.all([
//     fetch('https://rickandmortyapi.com/api/character/1'),
//     fetch(`https://rickandmortyapi.com/api/location/1`)
// ])
//     .then(results => { console.log(results.]]\\) })



fetchQuotes()
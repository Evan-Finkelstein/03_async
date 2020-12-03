const fsPromises = require('fs').promises
const fetch = require('node-fetch')


const copy = (src, dst) => {
    return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            return fsPromises.writeFile(dst, data);

        })
        .catch(err => {
            console.log(err);
        })
}

const transform = (src) => {
    return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            return fsPromises.writeFile(src, data.replace(/[^a-z]/g, '').toUpperCase().split("").reverse().join(""))

        })
        .catch(err => {
            console.log(err);
        })
}


const getCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            return [json.name, json.status, json.species

        })
}




module.exports = {
    copy,
    transform,
    getCharacter
}
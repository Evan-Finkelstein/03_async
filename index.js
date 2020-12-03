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

const getCharacter = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const json = await res.json()
    const character = [json.name, json.status, json.species]
    return character
}

// const getManyCharacter = async (id) => {
//     const res1 = await fetch(`https://rickandmortyapi.com/api/character/${id[0]}`)
//     const res2 = await fetch(`https://rickandmortyapi.com/api/character/${id[1]}`)
//     const json1 = await res1.json()
//     const json2 = await res2.json()
//     const character1 = json1.name, json1.status, json1.species, [json2.name, json2.status, json2.species

//     return character1


// }

const getManyCharacter = (arr) => {

    return Promise.all([
        getCharacter(arr[0]),
        getCharacter(arr[1])

    ])


}





module.exports = {
    copy,
    transform,
    getCharacter,
    getManyCharacter
}
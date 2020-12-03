const { copy,
    transform,
    getCharacter } = require('./index.js');
const fsPromises = require('fs').promises


describe('copy', () => {

    afterEach(async () => {
        await fsPromises.unlink('./new.md');
    });
    it('copy', async () => {
        await copy('./README.md', './new.md')
        const content = await fsPromises.readFile('./new.md', 'utf-8')
        expect(content).toEqual('# 03_async')
    })
})

describe('transform', () => {

    afterAll(async () => {
        await fsPromises.writeFile('read.txt', 'yourRRRR momDHUDISDF');
    });
    it('transform', async () => {
        await transform('read.txt')
        const content = await fsPromises.readFile('read.txt', 'utf-8')
        expect(content).toEqual('MOMRUOY')
    })
})

it('transform', async () => {
    const expected = await getCharacter(1)
    expect(expected).toEqual(["Rick Sanchez", "Alive", "Human"])
})
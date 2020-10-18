const findUp = require('find-up');
const fs = require('fs/promises');
const cache = new Map();
exports.readCacheFile = async function (fileName) {
    if (cache.has(fileName)) {
        return cache.get(fileName);
    }
    let path = await findUp(fileName);
    let fileContent = await fs.readFile(path);
    fileContent = fileContent.toString();
    cache.set(fileName, fileContent);
    return fileContent;
}
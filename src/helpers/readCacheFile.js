const fs = require('fs/promises');
const cache = new Map();
exports.readCacheFile = async function (path) {
    if (cache.has(path)) {
        return cache.get(path);
    }
    let fileContent = await fs.readFile(path);
    fileContent = fileContent.toString();
    cache.set(path, fileContent);
    return fileContent;
}
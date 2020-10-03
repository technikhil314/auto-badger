const fs = require('fs/promises');
const yaml = require('yaml');

const cache = new Map();
const detectType = async function (typeMapping, detectionType) {
    let extrasToReturn = {};
    if (cache.has(detectionType)) {
        return cache.get(detectionType);
    }
    let type = null;
    for (let prop in typeMapping) {
        try {
            let isTrue = false;
            if (prop.endsWith("/")) {
                const files = await fs.readdir(prop);
                const fileContent = await fs.readFile(prop + files[0]);
                const fileJson = yaml.parse(fileContent.toString());
                extrasToReturn.jobName = fileJson.name;
                isTrue = true;
            } else {
                isTrue = await fs.stat(prop);
            }
            if (isTrue) {
                type = typeMapping[prop];
                break;
            }
        } catch (e) {
            continue;
        }
    }
    cache.set(detectionType, type);
    return { type, ...extrasToReturn };
}

exports.detectType = detectType;
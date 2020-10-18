const findUp = require('find-up');
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
                const path = await findUp(prop, { type: 'directory' });
                const files = await fs.readdir(path);
                const fileContent = await fs.readFile(path + files[0]);
                const fileJson = yaml.parse(fileContent.toString());
                extrasToReturn.jobName = fileJson.name;
                isTrue = true;
            } else {
                const path = await findUp(prop);
                isTrue = await fs.stat(path);
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
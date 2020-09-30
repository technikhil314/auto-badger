const fs = require('fs/promises');
const cache = new Map();
const detectType = async function (typeMapping, detectionType) {
    if (cache.has(detectionType)) {
        return cache.get(detectionType);
    }
    let type = null;
    for (let prop in typeMapping) {
        try {
            const isTrue = await fs.stat(prop);
            if (isTrue) {
                type = typeMapping[prop];
                break;
            }
        } catch (e) {
            continue;
        }
    }
    cache.set(detectionType, type);
    return type;
}

exports.detectType = detectType;
const path = require('path');
const fs = require('fs/promises');
const types = require("../constants/types");
const { detectType } = require("../helpers/detectType")
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require('../helpers/readCacheFile');
const { detectRepoUrl } = require('../helpers/detectRepoUrl');
const { parseRepoUrl } = require('../helpers/parseRepoUrl');
exports.generate = async function () {
    const [pmType, repoUrl] = await Promise.all([detectType(packageManagerProviders, "Package manager"), detectRepoUrl()]);
    const { repoOwner, repoName } = parseRepoUrl(repoUrl);
    switch (pmType) {
        case types.NPM:
            let packagejson = await readCacheFile(path.resolve(process.cwd(), "package.json"));
            packagejson = JSON.parse(packagejson);
            return `[![license](https://img.shields.io/npm/l/${packagejson.name})](https://github.com/${repoOwner}/${repoName}/blob/master/LICENSE)`
        default:
            console.error("Could not find any license related configuration. Skipping it...")
            return '';
    }
}
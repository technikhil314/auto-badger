const path = require('path');
const types = require("../constants/types");
const { detectType } = require("../helpers/detectType")
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require('../helpers/readCacheFile');

exports.generate = async function () {
    const { type } = await detectType(packageManagerProviders, "Package manager");
    switch (type) {
        case types.NPM:
            let packagejson = await readCacheFile(path.resolve(process.cwd(), "package.json"));
            packagejson = JSON.parse(packagejson);
            return `[![version](https://img.shields.io/npm/v/${packagejson.name}.svg?style=flat-square)](https://npmjs.org/${packagejson.name})`
        default:
            console.error("Could not find any version related configuration. Skipping it...")
            return '';
    }
}
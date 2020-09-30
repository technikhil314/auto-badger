const path = require('path');
const fs = require('fs/promises');
const types = require("../constants/types");
const { detectType } = require("../helpers/detectType")
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require('../helpers/readCacheFile');
exports.generate = async function () {
    const pmType = await detectType(packageManagerProviders, "Package manager");
    switch (pmType) {
        case types.NPM:
            let packagejson = await readCacheFile(path.resolve(process.cwd(), "package.json"));
            packagejson = JSON.parse(packagejson);
            return `[![downloads](https://img.shields.io/npm/dm/${packagejson.name})](https://npmcharts.com/compare/${packagejson.name})`
        default:
            console.error("Could not find any downloads related configuration. Skipping it...")
            return '';
    }
}
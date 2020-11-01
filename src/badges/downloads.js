const path = require('path');
const types = require("../constants/types");
const { detectType } = require("../helpers/detectType")
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require('../helpers/readCacheFile');
const chalk = require('chalk');
exports.generate = async function () {
    const { type } = await detectType(packageManagerProviders, "Package manager");
    switch (type) {
        case types.NPM:
            let packagejson = await readCacheFile("package.json");
            packagejson = JSON.parse(packagejson);
            return `[![downloads](https://img.shields.io/npm/dm/${packagejson.name})](https://npmcharts.com/compare/${packagejson.name})`
        default:
            console.warn(chalk.yellow("Could not find any downloads related configuration. Skipping it..."))
            return '';
    }
}
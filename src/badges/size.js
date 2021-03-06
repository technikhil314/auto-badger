const { providerTypes, badgeTypes } = require("../constants/types");
const { detectType } = require("../helpers/detectType");
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require("../helpers/readCacheFile");
const chalk = require("chalk");
exports.generate = async function ({ exclude }) {
  if (exclude.includes(badgeTypes.SIZE)) return "";
  const { type } = await detectType(packageManagerProviders, "Package manager");
  switch (type) {
    case providerTypes.NPM: {
      let packagejson = await readCacheFile("package.json");
      packagejson = JSON.parse(packagejson);
      if (packagejson.bin && Object.keys(packagejson.bin).length > 0) {
        return `[![package size](https://packagephobia.com/badge?p=${packagejson.name})](https://packagephobia.com/result?p=${packagejson.name})`;
      }
      return [
        `[![min size](https://img.shields.io/bundlephobia/min/${packagejson.name}?style=flat-square)](https://bundlephobia.com/result?p=${packagejson.name})`,
        `[![mingzip size](https://img.shields.io/bundlephobia/minzip/${packagejson.name})](https://bundlephobia.com/result?p=${packagejson.name})`,
      ].join("\n");
    }
    default: {
      console.warn(
        chalk.yellow(
          "Could not find any size related configuration. Skipping it..."
        )
      );
      return "";
    }
  }
};

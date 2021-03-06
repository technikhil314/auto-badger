const { providerTypes, badgeTypes } = require("../constants/types");
const { detectType } = require("../helpers/detectType");
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require("../helpers/readCacheFile");
const chalk = require("chalk");
exports.generate = async function ({ exclude }) {
  if (exclude.includes(badgeTypes.VERSION)) return "";
  const { type } = await detectType(packageManagerProviders, "Package manager");
  switch (type) {
    case providerTypes.NPM: {
      let packagejson = await readCacheFile("package.json");
      packagejson = JSON.parse(packagejson);
      return `[![version](https://img.shields.io/npm/v/${packagejson.name}.svg?style=flat-square)](https://npmjs.org/${packagejson.name})`;
    }
    default: {
      console.warn(
        chalk.yellow(
          "Could not find any version related configuration. Skipping it..."
        )
      );
      return "";
    }
  }
};

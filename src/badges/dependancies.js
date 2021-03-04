const chalk = require("chalk");
const { providerTypes, badgeTypes } = require("../constants/types");
const { detectType } = require("../helpers/detectType");
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require("../helpers/readCacheFile");
exports.generate = async function ({ exclude }) {
  if (exclude.includes(badgeTypes.DEPENDANCIES)) return "";
  const { type } = await detectType(packageManagerProviders, "Package manager");
  switch (type) {
    case providerTypes.NPM: {
      let packagejson = await readCacheFile("package.json");
      packagejson = JSON.parse(packagejson);
      return `[![dependancies](https://img.shields.io/librariesio/release/npm/${
        packagejson.name
      }?color=%23007a1f)](https://libraries.io/npm/${encodeURIComponent(
        packagejson.name
      )})`;
    }
    default: {
      console.warn(
        chalk.yellow(
          "Could not find any dependancies related configuration. Skipping it..."
        )
      );
      return "";
    }
  }
};

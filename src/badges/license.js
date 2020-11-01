const types = require("../constants/types");
const chalk = require("chalk");
const { detectType } = require("../helpers/detectType");
const { packageManagerProviders } = require("../constants/provierConstants");
const { readCacheFile } = require("../helpers/readCacheFile");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
exports.generate = async function () {
  const [{ type }, repoUrl] = await Promise.all([
    detectType(packageManagerProviders, "Package manager"),
    detectRepoUrl(),
  ]);
  const { repoOwner, repoName } = parseRepoUrl(repoUrl);
  switch (type) {
    case types.NPM: {
      let packagejson = await readCacheFile("package.json");
      packagejson = JSON.parse(packagejson);
      return `[![license](https://img.shields.io/npm/l/${packagejson.name}?color=%23007a1f)](https://github.com/${repoOwner}/${repoName}/blob/master/LICENSE)`;
    }
    default: {
      console.warn(
        chalk.yellow(
          "Could not find any license related configuration. Skipping it..."
        )
      );
      return "";
    }
  }
};

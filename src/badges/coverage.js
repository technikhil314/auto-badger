const { providerTypes, badgeTypes } = require("../constants/types");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { detectType } = require("../helpers/detectType");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
const { coverageProviders } = require("../constants/provierConstants");
const chalk = require("chalk");
exports.generate = async function ({ exclude }) {
  if (exclude.includes(badgeTypes.COVERAGE)) return "";
  const [{ type }, repoUrl] = await Promise.all([
    detectType(coverageProviders, "COVERAGE"),
    detectRepoUrl(),
  ]);
  const { repoOwner, repoName } = parseRepoUrl(repoUrl);
  switch (type) {
    case providerTypes.CODECOV:
      return `[![Code coverage](https://img.shields.io/codecov/c/github/${repoOwner}/${repoName}.svg?style=flat-square)](https://codecov.io/github/${repoOwner}/${repoName})`;
    case providerTypes.COVERALLS:
      return `[![Code coverage](https://img.shields.io/coveralls/github/${repoOwner}/${repoName}.svg?style=flat-square)](https://coveralls.io/github/${repoOwner}/${repoName}?branch=master)`;
    default:
      console.warn(
        chalk.yellow(
          "Could not find any code coverage related configuration. Skipping it..."
        )
      );
      return "";
  }
};

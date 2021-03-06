const { providerTypes, badgeTypes } = require("../constants/types");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { detectType } = require("../helpers/detectType");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
const { ciProviders } = require("../constants/provierConstants");
const chalk = require("chalk");
exports.generate = async function ({ exclude }) {
  if (exclude.includes(badgeTypes.BUILD)) return "";
  const [{ type, ...rest }, repoUrl] = await Promise.all([
    detectType(ciProviders, "CI"),
    detectRepoUrl(),
  ]);
  const { repoOwner, repoName } = parseRepoUrl(repoUrl);
  switch (type) {
    case providerTypes.TRAVIS:
      return `[![Build Status](https://img.shields.io/travis/${repoOwner}/${repoName}.svg?style=flat-square&color=%23007a1f)](https://travis-ci.org/${repoOwner}/${repoName})`;
    case providerTypes.GITHUB:
      return `[![Build Status](https://img.shields.io/github/workflow/status/${repoOwner}/${repoName}/${encodeURIComponent(
        rest.jobName
      )}?style=flat-square&color=%23007a1f)](https://github.com/${repoOwner}/${repoName}/actions)`;
    case providerTypes.APPVEYOR:
      return `[![Build Status](https://img.shields.io/appveyor/build/${repoOwner}/${repoName}?style=flat-square&color=%23007a1f)](https://ci.appveyor.com/api/projects/status/github/${repoOwner}/${repoName})`;
    case providerTypes.CIRCLECI:
      return `[![Build Status](https://circleci.com/gh/${repoOwner}/${repoName}.svg?style=svg)](https://circleci.com/gh/${repoOwner}/${repoName})`;
    default:
      console.warn(
        chalk.yellow(
          "Could not find any CI related configuration. Skipping it..."
        )
      );
      return "";
  }
};

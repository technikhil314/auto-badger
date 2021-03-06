const { providerTypes } = require("../constants/types");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
const chalk = require("chalk");
exports.generate = async function ({
  communityProvider,
  communityId,
  communityServerUrl,
}) {
  if (!communityProvider) {
    return ``;
  }
  const repoUrl = await detectRepoUrl();
  const { repoOwner, repoName } = parseRepoUrl(repoUrl);
  const community = communityProvider.toUpperCase();
  switch (community) {
    case providerTypes.DISCORD:
      return `[![chat with community](https://img.shields.io//discord/${communityId}?color=%23007a1f&style=flat-square)](${communityServerUrl})`;
    case providerTypes.SPECTRUM:
      return `[![chat with community](https://img.shields.io/badge/Join%20us%20on-spectrum-orange?style=flat-square)](https://spectrum.chat/${communityId})`;
    case providerTypes.GITTER:
      return `[![chat with community](https://img.shields.io/gitter/room/${repoOwner}/${repoName}?color=%23007a1f&style=flat-square)](https://gitter.im/${communityId})`;
    default:
      console.warn(
        chalk.yellow(
          "Could not find any community related configuration. Skipping it..."
        )
      );
      return "";
  }
};

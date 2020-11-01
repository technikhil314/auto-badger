const types = require("../constants/types");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
const chalk = require('chalk');
exports.generate = async function ({ communityProvider, communityId, communityServerUrl }) {
    if (!communityProvider) {
        return ``;
    }
    const repoUrl = await detectRepoUrl();
    const { repoOwner, repoName } = parseRepoUrl(repoUrl);
    const community = communityProvider.toUpperCase();
    switch (community) {
        case types.DISCORD:
            return `[![chat with community](https://img.shields.io//discord/${communityId}?color=%23007a1f)](${communityServerUrl})`;
        case types.SPECTRUM:
            return `[![chat with community](https://img.shields.io/badge/Join%20us%20on-spectrum-orange)](https://spectrum.chat/${communityId})`
        case types.GITTER:
            return `[![chat with community](https://img.shields.io/gitter/room/${repoOwner}/${repoName}?color=%23007a1f)](https://gitter.im/${communityId})`
        default:
            console.warn(chalk.yellow("Could not find any community related configuration. Skipping it..."));
            return '';
    }
}

const types = require("../constants/types");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
exports.generate = async function ({ communityProvider, communityId, communityServerUrl }) {
    if (!communityProvider) {
        return ``;
    }
    const repoUrl = await detectRepoUrl();
    const { repoOwner, repoName } = parseRepoUrl(repoUrl);
    const community = communityProvider.toUpperCase();
    switch (community) {
        case types.DISCORD:
            return `[![chat with community](https://img.shields.io//discord/${communityId})](${communityServerUrl})`;
        case types.SPECTRUM:
            return `[![chat with community](https://img.shields.io/badge/Join%20us%20on-spectrum-orange)](https://spectrum.chat/${communityId})`
        case types.GITTER:
            return `[![chat with community](https://img.shields.io/gitter/room/${repoOwner}/${repoName})](https://gitter.im/${communityId})`
        default:
            console.error("Could not find any community related configuration. Skipping it...");
            return '';
    }
}

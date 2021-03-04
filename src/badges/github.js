const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
const { badgeTypes } = require("../constants/types");

exports.generate = async function ({ exclude }) {
  const repoUrl = await detectRepoUrl();
  const { repoOwner, repoName } = parseRepoUrl(repoUrl);
  const allContributersBadge = exclude.includes(badgeTypes.ALL_CONTRIBUTERS)
    ? ``
    : `[![all contributors](https://img.shields.io/github/all-contributors/${repoOwner}/${repoName})](https://github.com/${repoOwner}/${repoName}/graphs/contributors)`;
  const codeOfConduct = exclude.includes(badgeTypes.CODE_OF_CONDUCT)
    ? ``
    : `[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/${repoOwner}/${repoName}/blob/master/CODE_OF_CONDUCT.md)`;
  const starsBadge = exclude.includes(badgeTypes.GH_STAR)
    ? ``
    : `[![stargazers](https://img.shields.io/github/stars/${repoOwner}/${repoName}?style=social)](https://github.com/${repoOwner}/${repoName}/stargazers)`;
  const forkBadge = exclude.includes(badgeTypes.GH_FORK)
    ? ``
    : `[![number of forks](https://img.shields.io/github/forks/${repoOwner}/${repoName}?style=social)](https://github.com/${repoOwner}/${repoName}/fork)`;
  return [allContributersBadge, codeOfConduct, starsBadge, forkBadge];
};

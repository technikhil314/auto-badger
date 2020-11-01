const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
exports.generate = async function () {
  const repoUrl = await detectRepoUrl();
  const { repoOwner, repoName } = parseRepoUrl(repoUrl);
  const allContributersBadge = `[![all contributors](https://img.shields.io/github/all-contributors/${repoOwner}/${repoName})](https://github.com/${repoOwner}/${repoName}/graphs/contributors)`;
  const codeOfConduct = `[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/${repoOwner}/${repoName}/blob/master/CODE_OF_CONDUCT.md)`;
  const starsBadge = `[![stargazers](https://img.shields.io/github/stars/${repoOwner}/${repoName}?style=social)](https://github.com/${repoOwner}/${repoName}/stargazers)`;
  const forkBadge = `[![number of forks](https://img.shields.io/github/forks/${repoOwner}/${repoName}?style=social)](https://github.com/${repoOwner}/${repoName}/fork)`;
  return [allContributersBadge, codeOfConduct, starsBadge, forkBadge];
};

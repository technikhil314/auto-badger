const types = require("../constants/types");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { detectType } = require("../helpers/detectType")
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
const { ciProviders } = require("../constants/provierConstants");

exports.generate = async function () {
    const [ciType, repoUrl] = await Promise.all([detectType(ciProviders, "CI"), detectRepoUrl()]);
    const {repoOwner, repoName} = parseRepoUrl(repoUrl);
    switch (ciType) {
        case types.TRAVIS:
            return `[![Build Status](https://img.shields.io/travis/${repoOwner}/${repoName}.svg?style=flat-square)](https://travis-ci.org/${repoOwner}/${repoName})`
        default:
            console.error("Could not find any CI related configuration. Skipping it...")
            return '';
    }
}
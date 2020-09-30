const types = require("./types");

const baseUrls = {
    [types.TRAVIS]: "https://travis-ci.org",
    [types.GITHUB]: "https://github.com",
    [types.GITLAB]: "https://gitlab.com",
    [types.APPVEYOR]: "https://www.appveyor.com",
    [types.NODEJS]: "http://nodejs.org",
    [types.PYTHON]: "https://www.python.org",
    [types.COVERALLS]: "https://coveralls.io",
    [types.CODECOV]: "https://codecov.io",
    [types.NPM]: "https://www.npmjs.com",
    [types.PIP]: "https://pypi.org",
    [types.TWITTER]: "https://twitter.com/"
}

module.exports = {
    baseUrls
}
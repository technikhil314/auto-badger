const types = require("./types");

const ciProviders = {
    "./.gitlab-ci.yml": types.GITLAB,
    "./appveyor.yml": types.APPVEYOR,
    "./.travis.yml": types.TRAVIS,
    "./.github/workdlows": types.GITHUB
}

const projectRTProviders = {
    "./package.json": types.NODEJS,
    "./requirements.txt": types.PYTHON
}

const coverageProviders = {
    "./.coveralls.yml": types.COVERALLS,
    "./codecov.yml": types.CODECOV
}

const packageManagerProviders = {
    "./package.json": types.NPM,
    "./requirements.txt": types.PIP
}

module.exports = {
    ciProviders,
    projectRTProviders,
    coverageProviders,
    packageManagerProviders
}
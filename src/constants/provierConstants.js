const { providerTypes } = require("./types");

const ciProviders = {
  ".gitlab-ci.yml": providerTypes.GITLAB,
  "appveyor.yml": providerTypes.APPVEYOR,
  ".travis.yml": providerTypes.TRAVIS,
  ".github/workflows/": providerTypes.GITHUB,
};

const projectRTProviders = {
  "package.json": providerTypes.NODEJS,
  "requirements.txt": providerTypes.PYTHON,
};

const coverageProviders = {
  ".coveralls.yml": providerTypes.COVERALLS,
  "codecov.yml": providerTypes.CODECOV,
};

const packageManagerProviders = {
  "package.json": providerTypes.NPM,
  "requirements.txt": providerTypes.PIP,
};

module.exports = {
  ciProviders,
  projectRTProviders,
  coverageProviders,
  packageManagerProviders,
};

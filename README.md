# Git Auto badger

A npm cli tool that reads your packagejson/project metadata and git config and connects your readme with multiple badge providers (shields.io, badgen.net etc)

[//]: <> (start placeholder for auto-badger)

[![version](https://img.shields.io/npm/v/git-auto-badger.svg?style=flat-square)](https://npmjs.org/git-auto-badger)
[![size](https://img.shields.io/bundlephobia/min/git-auto-badger)](https://bundlephobia.com/result?p=git-auto-badger)
[![license](https://img.shields.io/npm/l/git-auto-badger)](https://github.com/technikhil314/auto-badger/blob/master/LICENSE)

[![dependancies](https://img.shields.io/librariesio/release/npm/git-auto-badger)](https://libraries.io/npm/git-auto-badger)
[![all contributors](https://img.shields.io/github/all-contributors/technikhil314/auto-badger)](https://github.com/technikhil314/auto-badger/graphs/contributors)
[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/technikhil314/auto-badger/blob/master/CODE_OF_CONDUCT.md)

[![chat with community](https://img.shields.io/gitter/room/technikhil314/auto-badger)](https://gitter.im/auto-badger)
[![stargazers](https://img.shields.io/github/stars/technikhil314/auto-badger?style=social)](https://github.com/technikhil314/auto-badger/stargazers)
[![number of forks](https://img.shields.io/github/forks/technikhil314/auto-badger?style=social)](https://github.com/technikhil314/auto-badger/fork)
[![Follow twitterUserName on twiter](https://img.shields.io/twitter/follow/technikhil314?label=Follow)](https://www.twitter.com/technikhil314)

[//]: <> (end placeholder for auto-badger)

### See the demo running here

[![demo](https://raw.githubusercontent.com/technikhil314/my-static-assets/master/terminal-casts/auto-badger.svg)](https://raw.githubusercontent.com/technikhil314/my-static-assets/master/terminal-casts/auto-badger.svg)

## How to use

```
    npm i -g git-auto-badger
```

Add following markdown comment where you want the badges to appear

```
[//]: <> (start placeholder for auto-badger)
```

then run following in your project root directory

```
    npx auto-badger
```

This cli currently supports following providers from each category

1. VCS
   - [Github](https://www.github.com/) [:heavy_check_mark:]
   - [Gitlab](https://www.gitlab.com/) [Coming soon]
1. CI/CD
   - [Travis CI](https://travis-ci.org/) [:heavy_check_mark:]
   - [Github Actions (first Job)](https://github.com/features/actions) [:heavy_check_mark:]
   - [Appveyor](https://www.appveyor.com/) [:heavy_check_mark:]
   - [Circle CI](https://circleci.com/) [:heavy_check_mark:]
1. Coverage
   - [Coveralls](https://coveralls.io/) [:heavy_check_mark:]
   - [CodeCov](https://codecov.io/) [Coming soon]
1. Package Managers
   - [NPM](https://www.npmjs.com/) [:heavy_check_mark:]
   - [PyPI](https://pypi.org/) [Coming soon]
1. License
   - Github License File [:heavy_check_mark:]
1. Code of Conduct
   - Github CoC File [:heavy_check_mark:]
1. Dependancies
   - [Libraries.io for NPM](https://libraries.io/) [:heavy_check_mark:]
1. Package size
   - [Bundelphobia](https://bundlephobia.com/) [:heavy_check_mark:]
1. Download Count
   - [NPM Per month](https://npmcharts.com/) [:heavy_check_mark:]
1. Social
   - Github (Repo Stars, Fork) [:heavy_check_mark:]
   - twitter (Follow user/org) [:heavy_check_mark:]
1. Chat
   - [Gitter](https://gitter.im/) [:heavy_check_mark:]
   - [Spectrum](https://spectrum.chat/) [:heavy_check_mark:]
   - [Discord](https://discord.com/) [:heavy_check_mark:]

### How it works?

1. It looks for different file in your project root directory. To decide what tools are you using. And generates badges based on it.
   e.g. If you have .travis.yml then it assumes you are using travis for CI/CD and it creates a dynamic badge for travis latest build status

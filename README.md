# Git Auto badger

A npm cli tool that reads your packagejson and git config and connects your readme with multiple badge providers (shields.io, badgen.net etc)

### This is still a WIP

[//]: <> (start placeholder for auto-badger)


[![Build Status](https://img.shields.io/travis/technikhil314/auto-badger.svg?style=flat-square)](https://travis-ci.org/technikhil314/auto-badger)
[![version](https://img.shields.io/npm/v/git-auto-badger.svg?style=flat-square)](https://npmjs.org/git-auto-badger)
[![size](https://img.shields.io/bundlephobia/min/git-auto-badger)](https://bundlephobia.com/result?p=git-auto-badger)
[![license](https://img.shields.io/npm/l/git-auto-badger)](https://github.com/technikhil314/auto-badger/blob/master/LICENSE)

[![dependancies](https://img.shields.io/librariesio/release/npm/git-auto-badger)](https://libraries.io/npm/git-auto-badger)
[![all contributors](https://img.shields.io/github/all-contributors/technikhil314/auto-badger)](https://github.com/technikhil314/auto-badger/graphs/contributors)
[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/technikhil314/auto-badger/blob/master/CODE_OF_CONDUCT.md)

[![stargazers](https://img.shields.io/github/stars/technikhil314/auto-badger?style=social)](https://github.com/technikhil314/auto-badger/stargazers)
[![number of forks](https://img.shields.io/github/forks/technikhil314/auto-badger?style=social)](https://github.com/technikhil314/auto-badger/fork)
[![Follow twitterUserName on twiter](https://img.shields.io/twitter/follow/technikhil314?label=Follow)](https://www.twitter.com/technikhil314)

[//]: <> (end placeholder for auto-badger)





























### See the demo running here 
[![asciicast](https://asciinema.org/a/362652.svg)](https://asciinema.org/a/362652)

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
    - Github [:heavy_check_mark:]
    - Gitlab [Coming soon]
1. CI/CD
    - Travis CI [:heavy_check_mark:]
    - Github Actions (first Job) [:heavy_check_mark:]
    - Appveyor [:heavy_check_mark:]
    - Circle CI [:heavy_check_mark:]
2. Coverage
    - Coveralls [:heavy_check_mark:]
    - CodeCov [Coming soon]
3. Package Managers
    - NPM [:heavy_check_mark:]
    - PyPI [Coming soon]
4. License
    - Github License File [:heavy_check_mark:]
5. Code of Conduct
    - Github CoC File [:heavy_check_mark:]
6. Dependancies
    - Libraries.io for NPM [:heavy_check_mark:]
7. Package size
    - Bundelphobia [:heavy_check_mark:]
8. Download Count
    - NPM Per month [:heavy_check_mark:]
9. Social
    - Github (Repo Stars, Fork) [:heavy_check_mark:]
    - twitter (Follow user/org) [:heavy_check_mark:]

### How it works?

1. It looks for different file in your project root directory. To decide what tools are you using. And generates badges based on it.
e.g. If you have .travis.yml then it assumes you are using travis for CI/CD and it creates a dynamic badge for travis latest build status

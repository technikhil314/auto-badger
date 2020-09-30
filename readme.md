# Git Auto badger

A npm cli tool that reads your packagejson and git config and connects your readme with multiple badge providers (shields.io, badgen.net etc)

### This is still a WIP

[//]: <> (start placeholder for auto-badger)



## How to use

```
    npm i -g git-auto-badger
```

Add following markdown comment where you want the badges to appear in

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
    - Github Actions [Coming soon]
    - Appveyor [Coming soon]
    - Circle CI [Coming soon]
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
    - twitter [Coming soon]

### How it works?

1. It looks for different file in your project root directory. To decide what tools are you using. And generates badges based on it.
e.g. If you have .travis.yml then it assumes you are using travis for CI/CD and it creates a dynamic badge for travis latest build status
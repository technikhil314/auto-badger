#! /usr/bin/env node

"use strict";
const meow = require("meow");
const autoBadger = require("../index.js");

const cli = meow(
  `
    Usage
      $ auto-badger [Options]
 
    Options
        --markdown-path, -p         Path to markdown to add badges to (relative to current directory)
                                        defaults to ./README.md (case sensitive)
        --twitter-username, -t      Twitter username to generate badges for
        --community-provider        Pass name of community provider 
                                        viz. discord, spectrum, gitter
        --community-name            Name of the community on specified community provider
        --community-server-url      Url to the community server 
                                        this is respected only in case of discord
        --exclude, -e               If you don't want a specific badge to be generated. Simply add it to deny list
                                        See list of all badge names available below
 
    Examples
      $ auto-badger -p ./README.md

    Types of badges
    Badge Name                      | Purpose of the badge
    ----------------------------------------------------------------------------------------
    build                           | Badge related to ci/cd pipeline status
    coverage                        | Test coverage percentage
    dependancies                    | Current status of all dependancy updates
    downloads                       | Count of downloads per month
    ghFork                          | Github fork repo
    ghStar                          | Github start repo
    allContributers                 | all contributers count
    codeOfConduct                   | code of conduct of github repo
    license                         | license of package from package.json
    size                            | size of npm package
    version                         | version of npm package
    ----------------------------------------------------------------------------------------
`,
  {
    flags: {
      markdownPath: {
        type: "string",
        alias: "p",
      },
      twitterUserName: {
        type: "string",
        alias: "t",
      },
      communityProvider: {
        type: "string",
      },
      communityName: {
        type: "string",
      },
      communityServerUrl: {
        type: "string",
      },
      exclude: {
        type: "string",
        alias: "e",
        isMultiple: true,
      },
    },
  }
);

autoBadger(cli.input[0], cli.flags);

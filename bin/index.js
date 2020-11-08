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
 
    Examples
      $ auto-badger -p ./README.md
`,
  {
    flags: {
      markdownPath: {
        type: "string",
        alias: "p",
      },
    },
  }
);

autoBadger(cli.input[0], cli.flags);

#! /usr/bin/env node

'use strict';
const meow = require('meow');
const autoBadger = require("../index.js")

const cli = meow(`
    Usage
      $ auto-badger [Options]
 
    Options
        --twitter-username, -t      Twitter username to generate badges for
        --community-provider        Pass name of community provider 
                                        viz. discord, spectrum, gitter
        --community-name            Name of the community of specified community provider
        --community-server-url      Url to the community server 
                                        this is respected only in case of discord
 
    Examples
      $ auto-badger -p ./README.md
`, {
});

autoBadger(cli.input[0], cli.flags);

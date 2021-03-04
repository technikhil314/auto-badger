#! /usr/bin/env node

const badges = require("./src/badges");
const fsPromises = require("fs/promises");
const fs = require("fs");
const chalk = require("chalk");
const { startPlaceholder, endPlaceholder } = require("./src/constants/strings");
const updateNotifier = require("update-notifier");
const pkg = require("./package.json");
updateNotifier({ pkg }).notify();
async function autoBadger(input, cliArgs) {
  const markDownPath = cliArgs.markdownPath || "./README.md";
  if (!fs.existsSync(markDownPath)) {
    console.error(
      chalk.red.bgYellow(`${cliArgs.markdownPath} not found. Aborting...`)
    );
    return;
  }
  const readmeBuffer = await fsPromises.readFile(markDownPath);
  const readmeContent = readmeBuffer.toString();
  const startPlaceholderIndex = readmeContent.indexOf(startPlaceholder);
  const endPlaceholderIndex = readmeContent.indexOf(endPlaceholder);
  if (startPlaceholderIndex === -1) {
    console.error(
      chalk.yellow("No placeholder found in markdown. Aborting...")
    );
    return;
  }
  let allBadges = await Promise.all([
    badges.build.generate(cliArgs),
    badges.version.generate(cliArgs),
    badges.dependancies.generate(cliArgs),
    badges.size.generate(cliArgs),
    badges.downloads.generate(cliArgs),
    badges.coverage.generate(cliArgs),
    badges.github.generate(cliArgs),
    badges.license.generate(cliArgs),
    badges.twitter.generate(cliArgs),
    badges.community.generate(cliArgs),
  ]);
  const [
    buildBadge,
    versionBadge,
    dependanciesBadge,
    sizeBadge,
    downloadsBadge,
    coverageBadge,
    allContributersBadge,
    codeOfConduct,
    starsBadge,
    forkBadge,
    licenseBadge,
    twitterBadge,
    communityBadge,
  ] = allBadges.flat(Infinity);
  const allBadgesString = [
    [buildBadge, versionBadge, sizeBadge, coverageBadge, licenseBadge]
      .filter(Boolean)
      .join("\n"),
    [
      dependanciesBadge,
      downloadsBadge,
      allContributersBadge,
      codeOfConduct,
      communityBadge,
    ]
      .filter(Boolean)
      .join("\n"),
    [starsBadge, forkBadge, twitterBadge].filter(Boolean).join("\n"),
  ].join("\n\n");
  console.log(chalk.blue("Generated Badges Are\n"));
  console.log(chalk.blue(allBadgesString));
  // backup readme
  await fsPromises.copyFile(markDownPath, "readme.md.bk");
  try {
    // truncate the existing readme
    await fsPromises.truncate(markDownPath, 0);
    // copy content from start to start placeholder to the truncated file
    // along with start placeholder
    await fsPromises.appendFile(
      markDownPath,
      readmeContent.slice(
        0,
        startPlaceholderIndex + startPlaceholder.length + 1
      )
    );
    // append all generated badges
    await fsPromises.appendFile(markDownPath, "\n\n" + allBadgesString);
    let contentToAppend;
    // if both start and end placeholder are present in the file
    // this means user already used auto-badger on this file
    // we now need to be more careful
    if (startPlaceholderIndex > -1 && endPlaceholderIndex > -1) {
      // content from end of end placeholder to end of file
      contentToAppend = readmeContent.slice(
        endPlaceholderIndex + endPlaceholder.length + 1,
        readmeContent.length
      );
    } else if (startPlaceholderIndex > -1) {
      // content from end of start placeholder to end of file
      contentToAppend = readmeContent.slice(
        startPlaceholderIndex + startPlaceholder.length + 1,
        readmeContent.length
      );
    }
    // add promotional content and end of badges
    await fsPromises.appendFile(
      markDownPath,
      "\n\n" +
        `###### :clap: & :heart: to [auto badger](https://github.com/technikhil314/auto-badger) for making badging simple`
    );
    // add end placeholder
    await fsPromises.appendFile(markDownPath, "\n\n" + endPlaceholder);
    // append the remaining content
    await fsPromises.appendFile(markDownPath, "\n\n" + contentToAppend);
  } catch (err) {
    console.err(err);
    console.err("Sorry something is wrong you might want to report an issue.");
    await fsPromises.copyFile("readme.md.bk", markDownPath);
  } finally {
    await fsPromises.unlink("readme.md.bk");
  }
}

module.exports = autoBadger;

#! /usr/bin/env node
const badges = require("./src/badges");
const path = require('path');
const fs = require('fs/promises');
const { startPlaceholder, endPlaceholder } = require("./src/constants/strings");
async function index() {

}

async function cli() {
    const readmePath = path.resolve(process.cwd(), 'readme.md');
    const argv = require('minimist')(process.argv.slice(2));
    const readmeBuffer = await fs.readFile(readmePath);
    const readmeContent = readmeBuffer.toString();
    const startPlaceholderIndex = readmeContent.indexOf(startPlaceholder);
    const endPlaceholderIndex = readmeContent.indexOf(endPlaceholder);
    if (startPlaceholderIndex === -1) {
        console.error("No placeholder found in readme");
        return;
    }
    let allBadges = await Promise.all([
        badges.build.generate(),
        badges.version.generate(),
        badges.dependancies.generate(),
        badges.size.generate(),
        badges.downloads.generate(),
        badges.coverage.generate(),
        badges.github.generate(),
        badges.license.generate()
    ]);
    [
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
        licenseBadge
    ] = allBadges.flat(Infinity);
    console.log("Generated Badhes Are");
    console.log(allBadges);
    const allBadgesString = [
        [
            buildBadge,
            versionBadge,
            sizeBadge,
            coverageBadge,
            licenseBadge
        ].filter(Boolean).join("\n"),
        [
            dependanciesBadge,
            downloadsBadge,
            allContributersBadge,
            codeOfConduct
        ].filter(Boolean).join("\n"),
        [
            starsBadge,
            forkBadge
        ].filter(Boolean).join("\n")
    ].join("\n\n");
    // Replace placeholder in readme.md
    await fs.copyFile(readmePath, "readme.md.bk");
    try {
        await fs.truncae(readmePath, 0);
        await fs.appendFile(readmePath, readmeContent.slice(0, startPlaceholderIndex + startPlaceholder.length + 1));
        await fs.appendFile(readmePath, "\n\n" + allBadgesString);
        let contentToAppend
        if (startPlaceholderIndex > -1 && endPlaceholderIndex > -1) {
            contentToAppend = readmeContent.slice(endPlaceholderIndex + endPlaceholder.length + 1, readmeContent.length);
        } else if (startPlaceholderIndex > -1) {
            contentToAppend = readmeContent.slice(startPlaceholderIndex + startPlaceholder.length + 1, readmeContent.length);
        }
        // console.log(contentToAppend);
        await fs.appendFile(readmePath, "\n\n" + endPlaceholder);
        await fs.appendFile(readmePath, "\n\n" + contentToAppend);
    } catch (err) {
        await fs.copyFile("readme.md.bk", readmePath);
    } finally {
        await fs.unlink("readme.md.bk");
    }
}


// TODO: Take twitter username, github Username, pm username
// as cli arg as they can be different from repoOwner
cli();
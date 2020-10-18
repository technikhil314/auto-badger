const findUp = require('find-up');
const parse = require('parse-git-config');
let url = null;
const detectRepoUrl = async function () {
    if (url) {
        return url;
    }
    const dotGitPath = await findUp(".git", { type: 'directory' });
    return parse.sync({
        path: dotGitPath + "/config"
    })['remote "origin"'].url;
}
exports.detectRepoUrl = detectRepoUrl;
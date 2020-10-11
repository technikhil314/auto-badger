const parse = require('parse-git-config');
let url = null;
const detectRepoUrl = async function () {
    if (url) {
        return url;
    }
    return parse.sync()['remote "origin"'].url;
}
exports.detectRepoUrl = detectRepoUrl;
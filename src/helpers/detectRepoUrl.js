const nodegit = require('nodegit');
let url = null;
const detectRepoUrl = async function () {
    if (url) {
        return url;
    }
    url = await nodegit.Repository.open(".git")
        .then(repo => repo.config())
        .then(config => {
            return config.getStringBuf("remote.origin.url")
        })
        .then(buf => buf.toString());
    return url;
}
exports.detectRepoUrl = detectRepoUrl;
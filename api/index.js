const http = require("http");
function fetch(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                console.error(error.message);
                res.resume();
                reject("Something wrong with shields.io");
                return;
            }
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    console.log(rawData);
                    resolve(rawData);
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
            reject("Something wrong with shields.io");
        });
    })
}

module.exports = async (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    console.log(req.headers.referer || req.headers.Referer);
    const badges = await Promise.all([fetch("http://img.shields.io/badge/style-for--the--badge-green?logo=appveyor&style=for-the-badge")]);
    return res.send(badges.join(" "));
};
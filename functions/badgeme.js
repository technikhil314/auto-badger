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

exports.handler = async (event) => {
    console.log(event);
    console.log(event.headers.referer || event.headers.Referer);
    const badges = await Promise.all([fetch("http://img.shields.io/badge/style-for--the--badge-green?logo=travis&style=for-the-badge"), fetch("http://img.shields.io/badge/style-for--the--badge-green?logo=circleci&style=for-the-badge")]);
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "image/svg+xml; charset=UTF-8"
        },
        body: `<svg xmlns="http://www.w3.org/2000/svg">${badges.join("")}</svg>`,
    }
};
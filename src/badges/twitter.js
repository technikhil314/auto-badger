exports.generate = async function (twitterUserName) {
    if (!twitterUserName) {
        return ``;
    }
    return `[![Follow ${twitterUserName} on twitter](https://img.shields.io/twitter/follow/${twitterUserName}?label=Follow)](https://www.twitter.com/${twitterUserName})`
}
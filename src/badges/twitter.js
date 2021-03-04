exports.generate = async function ({ twitterUsername }) {
  if (!twitterUsername) {
    return ``;
  }
  return `[![Follow ${twitterUsername} on twitter](https://img.shields.io/twitter/follow/${twitterUsername}?label=Follow)](https://www.twitter.com/${twitterUsername})`;
};

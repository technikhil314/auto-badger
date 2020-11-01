const parseRepoUrl = function (url) {
  const isSSHUrl = url.includes("@");
  let urlPath = null;
  if (isSSHUrl) {
    urlPath = url.split("@")[1].split(":")[1];
  } else {
    urlPath = new URL(url).pathname;
  }
  if (urlPath) {
    let [repoOwner, repoName] = urlPath.split("/");
    repoName = repoName.replace(".git", "");
    return { repoOwner, repoName };
  } else {
    throw new Error("Invalid repository URL");
  }
};

exports.parseRepoUrl = parseRepoUrl;

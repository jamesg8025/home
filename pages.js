const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/jamesg8025/jamesg8025.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
    add: true,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);

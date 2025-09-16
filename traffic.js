import fetch from "node-fetch";

const token = "DEIN_TOKEN"; // nicht ins Repo hochladen!
const owner = "DEIN_USERNAME";
const repo = "DEIN_REPO";

const url = `https://api.github.com/repos/${owner}/${repo}/traffic/views`;

fetch(url, {
  headers: {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": `token ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    console.log("Gesamtaufrufe (14 Tage):", data.count);
    console.log("Eindeutige Besucher:", data.uniques);
    console.log("Details:", data.views);
  })
  .catch(err => console.error(err));

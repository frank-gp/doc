import { get } from "https";

const urlSite = {
  hostname: "frankgp.com",
  port: 443,
  path: "/contact/",
};
console.log("https://" +urlSite.hostname + urlSite.path)

get(urlSite, (res) => {
  console.log(urlSite.hostname);
  console.log(res.statusCode);
  console.log(res.statusMessage);
}).on("error", (err) => {
  console.error(urlSite.hostname);
  console.error(err.code);
  console.error(err.message);
});

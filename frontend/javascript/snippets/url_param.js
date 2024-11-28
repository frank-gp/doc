const url = new URL(window.location.href);
if (url.search) {
  const params = url.search.replace("?", "");
  console.log("params", params);
} else {
  console.log("else");
}
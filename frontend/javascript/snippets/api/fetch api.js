
let urlInstagram = "https://graph.instagram.com/me/media?";
let fiels = "fields=media_type,media_url,caption,permalink";
var access_token = "access_token";

var jsonFile = urlInstagram + fiels + "&access_token=" + access_token;

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    data.data.map(item => {
      const templateHtml = `<img src="${item.media_url}">`
      document.querySelector(".container").innerHTML += templateHtml
    })
  });

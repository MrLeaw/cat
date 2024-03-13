// display a custom cursor
// request gif from giphy

function newCat() {
  offset = Math.floor(Math.random() * 100);
  url =
    "https://api.giphy.com/v1/gifs/search?api_key=WyLJlCFUtHoDO6xV1EpQr9sFzB7qsTEY&q=cat&limit=1&offset=" +
    offset;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let gif = data.data[0].images.original.url;
      document.querySelector(".cursor img").src = gif;
    });
}

newCat();

function empty() {
  document.querySelector("#username").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
}

function empty2() {
  document.querySelector("#username2").value = "";
  document.querySelector("#password2").value = "";
}

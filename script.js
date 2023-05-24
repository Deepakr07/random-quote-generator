let url = "http://api.quotable.io/random";
let quote = document.getElementById("quote");
let author = document.getElementById("athr-name");
let btn = document.getElementById("next-quote");

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
        console.log(item);
    });
}

window.addEventListener("load", getQuote);
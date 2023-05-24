
let url = "http://api.quotable.io/random";
let quote = document.getElementById("quote-para");
let author = document.getElementById("athr-name");
let btn = document.getElementById("next-quote");

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText = `" ${item.content} "`;
        author.innerText = `~ ${item.author}`;
    });
}
btn.addEventListener("click",getQuote);

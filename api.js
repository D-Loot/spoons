// QUOTE API

const quote = document.getElementById("quote");
generateQuote();

function generateQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      quote.innerHTML = `
      <h3 class="title is-3">"${data.quote}"</h3><h4 class="title is-4">-Kanye West</h4>`;
    });
}
// KITTEN API
const kittenContainer = document.getElementById("kittenContainer");
generateCat();
function generateCat() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0].url);
      kittenContainer.innerHTML = `<img src="${data[0].url}" alt="cat picture">`;
    });
}

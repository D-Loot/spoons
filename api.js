// QUOTE API

const quote = document.getElementById("quote");

generateQuote();

function generateQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      quote.innerHTML = `
      <h3 class="title is-3">"${data.quote}"</h3>`;
    });
}

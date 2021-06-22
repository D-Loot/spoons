// QUOTE API

const quote = document.getElementById("quote");

/*
const ZQ_API_KEY = "0357db8750cf52337319cbfb3f540da9d1fead89";
const ZQ_API_URL =
  "https://zenquotes.io/api/today&key=0357db8750cf52337319cbfb3f540da9d1fead89";

generateQuote();

async function generateQuote(
  url = "https://zenquotes.io/api/today&key=0357db8750cf52337319cbfb3f540da9d1fead89"
) {
  const response = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain",
    },
  });
  const data = await response.json();

  console.log(data);
}
*/
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
      console.log(data[0].url);
      kittenContainer.innerHTML = `<img src="${data[0].url}" alt="cat picture">`;
    });
}

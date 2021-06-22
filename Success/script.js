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

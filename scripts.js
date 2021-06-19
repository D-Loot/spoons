// import numbers from "../../api.js";

// console.log(numbers.odd);

// ------------------------------------------

const dayValue = moment().format("DDDD");
// It would not let me commit because of the "moment" function
// const dayValue = 20;

init();
function init() {
  loadTaskInformation();
}

function loadTaskInformation() {
  // ??? When the event is complete, change the event's color on the main page???
  for (let i = 1; i <= 3; i++) {
    // TODO: update the "3"
    if (localStorage.getItem(`${dayValue}-task${i}Completed`) === "true") {
      const btnComplete = document.getElementById(`task${i}Btn`);
      btnComplete.removeAttribute("enabled", "");
      btnComplete.setAttribute("disabled", "");
      btnComplete.className = "button disabled";
      btnComplete.textContent = "Complete";
      btnComplete.removeAttribute("href", "");
    }
  }
}

// VALUES THAT WILL BE CONSISTENT:
// TOTAL_DAYS: ## - check
// TOTAL_SPOONS: ##

// for tasks 1-6
// TOTAL_TASK1_TIME: ##
// TOTAL_TASK1_COMPLETED: ##

// ------------------------------------------

// GENERATE TODAY'S DATE

// WHEN THE PAGE IS LOADED, CHECK IF THE DATE HAS CHANGED, IF SO, ADD 1 TO THE DATE COUNTER LOCAL STORAGE. IF THE DATE HAS CHANGED, RESET ALL OF THE VALUES.

if (localStorage.getItem(`currentDay`) !== dayValue) {
  if (localStorage.getItem(`dayCounter`)) {
    let dayCounter = localStorage.getItem(`dayCounter`);
    dayCounter += 1;
    localStorage.setItem("dayCounter", dayCounter);
  } else {
    const dayCounter = 1;
    localStorage.setItem("dayCounter", dayCounter);
  }
  localStorage.setItem(`currentDay`, dayValue);

  localStorage.setItem(`${dayValue}-allCompleted`, false);
  localStorage.setItem(`${dayValue}-task1Time`, 0);
  localStorage.setItem(`${dayValue}-task1Completed`, false);
  localStorage.setItem(`${dayValue}-task1Spoons`, false);
  localStorage.setItem(`${dayValue}-task2Time`, 0);
  localStorage.setItem(`${dayValue}-task2Completed`, false);
  localStorage.setItem(`${dayValue}-task3Time`, 0);
  localStorage.setItem(`${dayValue}-task3Completed`, false);

  localStorage.setItem(`${dayValue}-totalSpoons`, 15);
  // TODO - LATER, store the correct amount of spoons
}

// WHEN THE BUTTON IS CLICKED TO START THE TIMER, SWITCH THE TASK NAME IN LOCAL STORAGE TO IDENTIFY THE CURRENT TASK
// LATER THE LOCAL STORAGE WILL READ THE TASK AND CHANGE VALUES IN THE LOCAL STORAGE BASED ON THE "CURRENT TASK"

document.querySelector("#task1Btn").addEventListener("click", function () {
  localStorage.setItem("currentTask", 1);
});

document.querySelector("#task2Btn").addEventListener("click", function () {
  localStorage.setItem("currentTask", 2);
});

document.querySelector("#task3Btn").addEventListener("click", function () {
  localStorage.setItem("currentTask", 3);
});

// QUOTE API

const quote = document.getElementById("quote");

generateQuote();

function generateQuote() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://zenquotes.io/api/random/")
    .then((response) => response.json())
    .then((data) => {
      quoteContainer.innerHTML = `
        <h3 class="title is-2">${data.q}</h3>
        <h4 class="title is-4>${data.a}</h4>`;
    });
}

// KITTEN API
const kittenurl = "http://placekitten.com/300/300";

// import numbers from "../../api.js";

// console.log(numbers.odd);

// ------------------------------------------

// const dayValue = moment().format("DDDD"); // It would not let me commit because of the "moment" function
const dayValue = 20;

init();
function init() {
  loadTaskInformation();
}

function loadTaskInformation() {
  // ??? When the event is complete, change the event's color on the main page???
  for (let i = 0; i < 3; i++) {
    // TODO: update the "3"
    if (localStorage.getItem(`${dayValue}-task${i}Completed`)) {
      document.querySelector(`#task${i}1Btn`).classList.add("disabled");
    }
  }
}

// VALUES THAT WILL BE CONSISTENT:
// TOTAL_DAYS: ## - check
// TOTAL_SPOONS: ##
// TOTAL_WEEKLY_TASKS: ##

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

  localStorage.setItem(`${dayValue}-totalSpoons`, 15); // LATER, store the correct amount of spoons
}

// WHEN THE BUTTON IS CLICKED TO START THE TIMER, SWITCH THE TASK NAME IN LOCAL STORAGE TO IDENTIFY THE CURRENT TASK
// LATER THE LOCAL STORAGE WILL READ THE TASK AND CHANGE VALUES IN THE LOCAL STORAGE BASED ON THE "CURRENT TASK"

document.querySelector("#task1Btn").addEventListener("click", function () {
  localStorage.setItem("currentTask", 1);
});

// TODO: ADD THE SPOONS VALUE FROM THE FIRST PAGE TO:
// [DATE]-spoons

// When the "Completed" is selected, stop the timer,
// Save the new time by storing it to the local storage
// ??? then Display a button to go back to the main page ???

// When the "Start timer" is selected, start and display a timer
// create a function to display the time using the time interval function
document.querySelector("#startButton").addEventListener("click", startTimer());

function startTimer() {
  const timerElement = document.querySelector("#messageDisplay");
  let timer = 0;
  const timerCount = setInterval(function () {
    timerElement.textContent = "TIME: " + timer;

    document.querySelector("#endButton").addEventListener("click", function () {
      // DISPLAY THE TIME AND "COMPLETED" <--- HYPERLINK TO FIRST PAGE
      timerElement.textContent = `TIME: ${timer}`;
      const linkToMainPage = document.createElement("a");
      linkToMainPage.setAttribte("href", "../tasks.html"); // TODO: verify that this link is going to the correct place
      timerElement.append(linkToMainPage);

      // GET THE TASK NUMBER FROM LOCAL STORAGE
      const taskNum = localStorage.getItem("currentTask");
      // SET THE TASK NUMBER'S TIME TO THE CURRENT TIME,
      localStorage.setItem(`${dayValue}-task${taskNum}Time`, timer);
      localStorage.setItem(`${dayValue}-task${taskNum}Completed`, true);

      // CLEAR THE INTERVAL
      clearInterval(timerCount);
    });
    timer++;
  }, 1000);
}

// When the "CHARTS" button is displayed, get the data from the local storage, calculate the answer and display the information

// If a button is clicked, then load calculate and display the correct data
// ??? Dynamic Elements ???

// -------------------------------------------------------
// daily task reference
// var dailytasks = {
//   { task: "Move my body to the best of my ability" },
//   { task: "Eat Breakfast" },
//   { task: "Eat Lunch" },
//   { task: "Eat Dinner" },
//   { task: "Get Dressed" },
//   { task: "Wash My Face" },
//   { task: "Bathe" },
//   { task: "Brush Teeth" },
//   { task: "Use the Restroom" },
//   { task: "Take Medication" },
// };
// //weekly task reference
// var weeklytasks = {
//   { task: "Get groceries" },
//   { task: "Manage transportation" },
//   { task: "Pay Bills" },
//   { task: "Go Shopping" },
//   { task: "Reach Out to Others" },
//   { task: "Attend Events" },
// };
// //cleaning task reference
// var cleaningtasks = {
//   { task: "Make Bed" },
//   { task: "Collect dirty dishes and put them in one place" },
//   { task: "Place dirty clothes in a designated space" },
//   { task: "Empty trash and replace trash bag" },
//   { task: "Check freezer/fridge for moldy food" },
//   { task: "Wipe down surfaces" },
//   { task: "Clean toilet, and replenish toilet paper" },
//   { task: "Group items by where they go" },
// };

// Use API to get the quote of the day
// Display the quote of the day at the bottom of the screen

// Use API to get the kitten
// Display the kitten if certain criteria (dayCompleted == true) are met for the current day

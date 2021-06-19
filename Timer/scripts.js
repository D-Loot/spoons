// import numbers from "../../api.js";

// console.log(numbers.odd);

// ------------------------------------------

const dayValue = moment().format("DDDD"); // It would not let me commit because of the "moment" function
// const dayValue = 20;

// TODO: ADD THE SPOONS VALUE FROM THE FIRST PAGE TO:
// [DATE]-spoons

// When the "Completed" is selected, stop the timer,
// Save the new time by storing it to the local storage
// ??? then Display a button to go back to the main page ???

// When the "Start timer" is selected, start and display a timer
// create a function to display the time using the time interval function
const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", function () {
  startTimer();
});

function startTimer() {
  const timerElement = document.querySelector("#messageDisplay");
  let timer = 0;
  const timerCount = setInterval(function () {
    timerElement.textContent = `TIME: ${timer}`;

    document.querySelector("#endBtn").addEventListener("click", function () {
      // GET THE TASK NUMBER FROM LOCAL STORAGE
      const taskNum = localStorage.getItem("currentTask");
      // SET THE TASK NUMBER'S TIME TO THE CURRENT TIME,
      localStorage.setItem(`${dayValue}-task${taskNum}Time`, timer);
      localStorage.setItem(`${dayValue}-task${taskNum}Completed`, true);

      // DISPLAY THE TIME AND "COMPLETED" <--- HYPERLINK TO FIRST PAGE
      timerElement.textContent = `TIME: ${timer}\n`;
      const linkToMainPage = document.createElement("a");

      let x = 0;

      for (let i = 1; i < 4; i++) {
        console.log(localStorage.getItem(`${dayValue}-task${i}Completed`));
        if (localStorage.getItem(`${dayValue}-task${i}Completed`) === false) {
          x = 1;
        } else {
          console.log(localStorage.getItem(`${dayValue}-task${i}Completed`));
        }
      }
      if (x === 0) {
        linkToMainPage.href = "../Success/index.html";
      } else {
        linkToMainPage.href = "../RoutineTracker/index.html"; // TODO: verify that this link is going to the correct place
      }

      linkToMainPage.textContent = "COMPLETED";
      timerElement.append(linkToMainPage);

      // CLEAR THE INTERVAL
      clearInterval(timerCount);
    });
    timer++;
  }, 1000);
}

// GENERATE TODAY'S DATE
const dayValue = moment().format("DDDD");
// const dayValue = 171;

init();
function init() {
  loadTaskInformation();
}

function loadTaskInformation() {
  //  When the event is complete, change the event's button color on the main page
  for (let i = 1; i <= 4; i++) {
    // TODO: update the "3"
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem(`${dayValue}-task${i}Completed`) == "true") {
      const btnComplete = document.getElementById(`task${i}Btn`);
      btnComplete.removeAttribute("enabled", "");
      btnComplete.setAttribute("disabled", "");
      btnComplete.className = "button disabled";
      btnComplete.textContent = "Complete";
      btnComplete.removeAttribute("href", "");

      const taskSpoons = document.getElementById(`task${i}Spoons`);
      taskSpoons.removeAttribute("enabled", "");
      taskSpoons.setAttribute("disabled", "");
      taskSpoons.className = "numSpoons disabled";

      const taskSpoonsNum = localStorage.getItem(`task${i}Spoons`);
      taskSpoons.textContent = taskSpoonsNum;
    }
  }

  // WHEN THE PAGE IS LOADED, CHECK IF THE DATE HAS CHANGED, IF SO, ADD 1 TO THE DATE COUNTER LOCAL STORAGE. IF THE DATE HAS CHANGED, RESET ALL OF THE VALUES.

  // eslint-disable-next-line eqeqeq
  if (localStorage.getItem(`currentDay`) !== dayValue) {
    if (localStorage.getItem(`dayCounter`)) {
      let dayCounter = localStorage.getItem(`dayCounter`);
      dayCounter += 1;
      localStorage.setItem("dayCounter", dayCounter);

      // ADD THE CURRENT DAY TO THE EXISTING LIST OF DAYS THAT THE USER HAS USED THIS WEBSITE
      // eslint-disable-next-line prefer-const
      let storedDateRecord = JSON.parse(localStorage.getItem("dayRecord"));
      const newDate = { date: dayValue };
      storedDateRecord.push(newDate);
      localStorage.setItem("dayRecord", JSON.stringify(storedDateRecord));
    } else {
      const dayCounter = 1;
      localStorage.setItem("dayCounter", dayCounter);

      // REF: https://stackoverflow.com/questions/35963412/append-data-to-localstorage-object
      const dateList = [];
      const newDate = { date: dayValue };
      dateList.push(newDate);

      // Save the date to a "dayRecord" object so that the days that the user has been active can be recorded
      localStorage.setItem("dayRecord", JSON.stringify(dateList));
    }
    localStorage.setItem(`currentDay`, dayValue);

    localStorage.setItem(`${dayValue}-task1Time`, 0);
    localStorage.setItem(`${dayValue}-task1Completed`, false);
    localStorage.setItem(`${dayValue}-task1Spoons`, 1);

    localStorage.setItem(`${dayValue}-task2Time`, 0);
    localStorage.setItem(`${dayValue}-task2Completed`, false);
    localStorage.setItem(`${dayValue}-task2Spoons`, 1);

    localStorage.setItem(`${dayValue}-task3Time`, 0);
    localStorage.setItem(`${dayValue}-task3Completed`, false);
    localStorage.setItem(`${dayValue}-task3Spoons`, 1);

    localStorage.setItem(`${dayValue}-task4Time`, 0);
    localStorage.setItem(`${dayValue}-task4Completed`, false);
    localStorage.setItem(`${dayValue}-task4Spoons`, 1);
  }
  loadSpoonValues();
}

// WHEN THE BUTTON IS CLICKED TO START THE TIMER, SWITCH THE TASK NAME IN LOCAL STORAGE TO IDENTIFY THE CURRENT TASK
// LATER THE LOCAL STORAGE WILL READ THE TASK AND CHANGE VALUES IN THE LOCAL STORAGE BASED ON THE "CURRENT TASK"

document.querySelector("#task1Btn").addEventListener("click", function (event) {
  localStorage.setItem("currentTask", 1);
  saveSpoonVals();
  // remove the hyperlink from HTML and load it here after the above tasks are completed
  window.location.href = "./timer/index.html";
  event.preventDefault();
});

document.querySelector("#task2Btn").addEventListener("click", function () {
  localStorage.setItem("currentTask", 2);
  saveSpoonVals();
  // remove the hyperlink from HTML and load it here after the above tasks are completed
  location.href = "./timer/index.html";
});

document.querySelector("#task3Btn").addEventListener("click", function () {
  localStorage.setItem("currentTask", 3);
  saveSpoonVals();
  // remove the hyperlink from HTML and load it here after the above tasks are completed
  location.href = "./timer/index.html";
});

document.querySelector("#task4Btn").addEventListener("click", function () {
  localStorage.setItem("currentTask", 4);
  saveSpoonVals();
  // remove the hyperlink from HTML and load it here after the above tasks are completed
  location.href = "./timer/index.html";
});

function saveSpoonVals() {
  for (let i = 1; i <= 4; i++) {
    const number = document.querySelector(`#task${i}Spoons`).value;
    localStorage.setItem(`${dayValue}-task${i}Spoons`, number);
  }
}

function loadSpoonValues() {
  for (let i = 1; i <= 4; i++) {
    const spoonNum = document.querySelector(`#task${i}Spoons`);
    spoonNum.value = localStorage.getItem(`${dayValue}-task${i}Spoons`);
  }
}

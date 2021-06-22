// GET ITEMS FROM THE ARRAY WITHIN JSON ------------------------------

const timeValues = [];
timeValues[0] = 0;

const spoonValues = [];
spoonValues[0] = 0;

const taskCompletedNum = [];
taskCompletedNum[0] = 0;

const taskDescription = [
  "",
  "Eat Breakfast",
  "Get Dressed",
  "Brush Teeth",
  "Take Medication",
];

// TODO - verify

const dayRecord = JSON.parse(localStorage.getItem("dayRecord"));

getDayHistory();

function getDayHistory() {
  // CYCLE THROUGH EACH TASK NUMBER TO ADD THE TOTAL TIME FOR EACH TASK
  for (let i = 1; i <= 4; i++) {
    let totalTaskTime = 0;
    let totalTaskSpoon = 0;
    let totalTimesCompleted = 0;

    // CYCLE THROUGH EACH DAY AND ADD THAT TIME TO THE TOTAL TIME
    // REF: https://stackoverflow.com/questions/5223/length-of-a-javascript-object

    for (let x = 0; x < Object.keys(dayRecord).length; x++) {
      // https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
      const dayValue = dayRecord[Object.keys(dayRecord)[x]].date;
      // console.log(dayRecord[Object.keys(dayRecord)[x]].date);

      // IF THE TASK HAS BEEN COMPLETED,
      // ADD THE TIME TO THE TOTAL TASK TIME
      // ADD THE SPOON VALUE TO THE TOTAL SPOON VALUE
      // COUNT THE NUMBER OF TIMES THE TASK HAS BEEN COMPLETED
      // eslint-disable-next-line eqeqeq
      if (localStorage.getItem(`${dayValue}-task${i}Completed`) == "true") {
        const taskTime = localStorage.getItem(`${dayValue}-task${i}Time`);
        totalTaskTime += parseInt(taskTime, 10);

        const taskSpoon = localStorage.getItem(`${dayValue}-task${i}Spoons`);
        totalTaskSpoon += parseInt(taskSpoon, 10);

        totalTimesCompleted++;
      }
    }

    // ASSIGN THE TOTALS TO AN ARRAY TO BE READ LATER
    timeValues[i] = totalTaskTime;
    spoonValues[i] = totalTaskSpoon;

    taskCompletedNum[i] = totalTimesCompleted;
  }
  displayInfo();
}

function displayInfo() {
  // IF THERE IS AN EXISTING RESULTS SECTION, DELETE IT (MOSTLY USED IF THERE ARE MORE THAN ONE BUTTON, WEEKLY/CLEANING)
  if (document.querySelector(".resultsSection")) {
    document.querySelector(".resultsSection").remove();
  }

  const containerDiv = document.querySelector(".container");
  // CREATE A SECTION TO STORE THE RESULTS THAT CAN BE DELETED WHEN DIFFERENT BUTTONS ARE SELECTED (TO BE USED LATER)
  const resultsSection = document.createElement("section");
  resultsSection.className = "resultsSection";

  for (let i = 1; i <= 4; i++) {
    const T = timeValues[i];
    const CN = taskCompletedNum[i];
    const S = spoonValues[i];
    const dayNum = Object.keys(dayRecord).length;

    const R1 = T / CN;
    const R2 = (CN / dayNum) * 100;
    const R3 = S / CN;

    const breakLine = document.createElement("br");
    resultsSection.append(breakLine);

    const pTaskTitle = document.createElement("p");
    // TODO - check style class
    pTaskTitle.className = "is-4 resultsP";
    pTaskTitle.textContent = `${taskDescription[i]}: `;
    resultsSection.append(pTaskTitle);

    const pAverageSpoonResults = document.createElement("p");
    // TODO - check style class
    pAverageSpoonResults.className = "is-4 resultsP";
    pAverageSpoonResults.textContent = `Average Spoons:\t${R3.toFixed(
      2
    )} Spoons`;
    resultsSection.append(pAverageSpoonResults);

    const pAverageTimeResults = document.createElement("p");
    // TODO - check style class
    pAverageTimeResults.className = "is-4 resultsP";
    pAverageTimeResults.textContent = `Average Time:\t${R1.toFixed(2)} seconds`;
    resultsSection.append(pAverageTimeResults);

    const pAverageCompletionResults = document.createElement("p");
    // TODO - check style class
    pAverageCompletionResults.className = "is-4 resultsP";
    pAverageCompletionResults.textContent = `Completion %\t${R2.toFixed(2)} %`;
    resultsSection.append(pAverageCompletionResults);
  }
  containerDiv.append(resultsSection);
}

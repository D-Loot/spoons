import numbers from "../../api.js";

console.log(numbers.odd);

// ------------------------------------------
// LOCAL STORAGE OBJECT FORMAT:

// [DATE]-[ATTRIBUTE]-[SUBATTRIBUTE]: VALUE

// OR

// JSON

// YYYYMMDD {
//   spoons: #,
//   tasks[
//     1{
//     completed: true/false
//     time: # (seconds)
//       },
//     2{
//       completed: true/false
//       time: # (seconds)
//       },
//     3{
//       completed: true/false
//       time: # (seconds)
//       },
//     4{
//       completed: true/false
//       time: # (seconds)
//       },
//     5{
//       completed: true/false
//       time: # (seconds)
//       },
//     6{
//       completed: true/false
//       time: # (seconds)
//       }],
//   dayCompleted: true/false

// VALUES THAT WILL BE CONSISTENT:
// TOTAL_DAYS: ##
// TOTAL_SPOONS: ##
// TOTAL_WEEKLY_TASKS: ##

// for tasks 1-6
// TOTAL_TASK1_TIME: ##
// TOTAL_TASK1_COMPLETED: ##

// ------------------------------------------

// GENERATE TODAY'S DATE

// INITIALIZE THE JS AND SET THE "[DATE]-[ATTRIBUTE]" = 0 OR FALSE

// ADD THE SPOONS VALUE FROM THE FIRST PAGE TO:
// [DATE]-spoons

// for (i=0; i<6; i++)
// [DATE]-task[i]-completed
// [DATE]-task1-time

// Use API to get the quote of the day
// Display the quote of the day at the bottom of the screen

// Use API to get the kitten
// Display the kitten if certain criteria (dayCompleted == true) are met for the current day

// When the "Start timer" is selected, start and display a timer
// create a function to display the time using the time interval function

// When the "Completed" is selected, stop the timer,
// Save the new time by storing it to the local storage
// ??? then Display a button to go back to the main page ???
// ??? When the event is complete, change the event's color on the main page???

// When the "CHARTS" button is displayed, get the data from the local storage, calculate the answer and display the information

// If a button is clicked, then load calculate and display the correct data
// ??? Dynamic Elements ???


//daily task reference
var dailytasks [
{task: 'Move my body to the best of my ability'},
{task:'Eat Breakfast'},
{task:'Eat Lunch'},
{task:'Eat Dinner'},
{task:'Get Dressed'},
{task:'Wash My Face'},
{task:'Bathe'},
{task:'Brush Teeth'},
{task:'Use the Restroom'},
{task:'Take Medication'},
],
//weekly task reference
var weeklytasks [
{task:'Get groceries'},
{task:'Manage transportation'},
{task:'Pay Bills'},
{task:'Go Shopping'},
{task:'Reach Out to Others'},
{task:'Attend Events'},
]
//cleaning task reference
var cleaningtasks [
  {task:'Make Bed'},
  {task:'Collect dirty dishes and put them in one place'},
  {task:'Place dirty clothes in a designated space'},
  {task:'Empty trash and replace trash bag'},
  {task:'Check freezer/fridge for moldy food'},
  {task:'Wipe down surfaces'},
  {task:'Clean toilet, and replenish toilet paper'},
  {task:'Group items by where they go'},
]

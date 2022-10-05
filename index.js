
// TODO: Include packages needed for this application
const { default: inquirer } = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please describe your project.",
    name: "Introduction",
  }, {
    type: "input",
    message: "Provide a step-by-step guide to installing your project.",
    name: "Installation",
  }, {
    type: "input",
    message: "How will your project be used?",
    name: "Usage",
  }, {
    type: "input",
    message: "Please add credits to your work",
    name: "Credits",
  }, {
    type: "input",
    message: "Input your licensing.",
    name: "License",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

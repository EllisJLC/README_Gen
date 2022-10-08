const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    message: "What's the title of your project?",
    name: "title",
  }, {
    type: "input",
    message: "Please describe your project.",
    name: "introduction",
  }, {
    type: "input",
    message: "Provide a step-by-step guide to installing your project.",
    name: "installation",
  }, {
    type: "input",
    message: "How will your project be used?",
    name: "usage",
  }, {
    type: "input",
    message: "How would one use the program? Provide some steps.",
    name: "tests",
  }, {
    type: "input",
    message: "Do you have preview?",
    name: "image"
  }, {
    type: "input",
    message: "Please add credits to your work",
    name: "credits",
  }, {
    type: "input",
    message: "Input your licensing.",
    name: "license",
  }
];

function writeToFile(fileName, data) {
  let writing = require("./utils/writer");
  let text = writing(data);
  fs.writeFile(fileName, text, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Title saved!");
      }
    });
}

function init() {
  inquirer
  .prompt(questions)
  .then ((answers) => {
    writeToFile("README.md",answers)
  }).catch((error) => {
    console.log(error)
  })
}

// Function call to initialize app
init();

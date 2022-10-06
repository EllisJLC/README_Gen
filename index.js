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
  let {title, introduction, installation, usage, test, image, credits, license} = data;
  let i = 1;
  let imgText = "";
  if (image === "yes") {
    imgText = `## Images \n### Image of wireframe plan: \n\n
    ![Wireframe](./assets/images/wireframe.png)\n\n
    ### Image of working site:\n\n
    ![Program sample](./assets/images/preview.png)`;
  } else {
    imgText = "No images are available for this project.";
  }
  fs.writeFile(fileName, 
`# ${title}\n
\n## Introduction
\n${introduction}
\n## Table of Contents
${i, i++}. [Installation](#installation)
${i, i++}. [Usage](#usage)
${i, i++}. [Test](#test)
${i, i++}. [Images](#images)
${i, i++}. [Credits](#credits)
${i, i++}. [Licenses](#licenses)
\n## Installation 
\n${installation}
\n## Usage
\n${usage}
\n## Test
\n${test}
\n## Images
\n${imgText}
\n## Credits
\n${credits}
\n## Licenses
\n${license}`, (error) => {
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

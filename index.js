
const inquirer = require("inquirer")
const fs = require("fs");
const { log } = require("console");
const { default: Choices } = require("inquirer/lib/objects/choices");

function questions(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: "what is the title of your project?",
                name: "title"
            },
            {
                type: 'input',
                message: "describe your project.",
                name: "description"
            },
            {
                type: 'input',
                message: "how does a user install your project.",
                name: "install"
            },
            {
                type: 'input',
                message: "what info do the users need for usage concerning your project?",
                name: "usage"
            },
            {
                type: 'input',
                message: "what do the users need to know about contributing to your project?",
                name: "contribution"
            },
            {
                type: 'input',
                message: "are there test instructions for your project?",
                name: "test"
            },
            {
                type: 'list',
                message: "what license do you wish you use?",
                name: "license",
                choices: ["ISC",
                          "MIT",
                          "MS-PL",
                          "Apache-2.0",
                          "BSD-2-Clause",
                          "BSD-3-Clause",
                          "CC0-1.0",
                          "CDDL-1.1",
                          "EPL-1.0",
                          "EPL-2.0",
                          "LGPL-2.1-only",
                          "LGPL-2.1-or-later",
                          "LGPL-3.0-only",
                          "LGPL-3.0-or-later",
                          "MS-PL",
                          "UNLICENSED",                
                         ],
            }
        ])
        .then((answers) =>{
            console.log(answers);
        }
        )
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();

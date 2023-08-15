
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

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
                          "Apache 2.0",
                          "BSD 2--Clause",
                          "BSD 3--Clause",
                          "UNLICENSED",                
                         ],
            }
        ])
        .then((answers) =>{
        writeToFile(answers.title, generateMarkdown(answers))
        }
        )
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log('README has successfully been gererated!')
    )
}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();

const questionair = require("../index.js")
console.log(questionair)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('badge')
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('link');
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('section');
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  renderLicenseBadge(answers.license)
  renderLicenseLink(answers.license)
  renderLicenseSection(answers.license)
  return `# ${answers.title}

`;
}

module.exports = generateMarkdown;

const questionair = require("../index.js")
console.log(questionair)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license === null){
    return ""
   }
   else if(license === "UNLICENSED"){
    return ''
   } else{
    const badge = license.split(" ").join("20%")
    
    return badge
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === null){
    return ""
   }
   else if(license === "UNLICENSED"){
    return ''
   } else{
    const licenseLink = license.split(" ").join("-")
    return licenseLink
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  renderLicenseLink(answers.license)
  renderLicenseSection(answers.license)
  return `# ${answers.title}
  <a href ="https://opensource.org/licenses/${renderLicenseLink(answers.license)}">
  <img src="https://img.shields.io/badge/License-${renderLicenseBadge(answers.license)}" alt="license">
  <a/>
`;
}

module.exports = generateMarkdown;

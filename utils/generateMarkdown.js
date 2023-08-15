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
    const badge = license.split(" ").join("%20")
    
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
        if(license === 'ISC'){
         let licenseSection = 
         `Copyright (c)\n
          Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above\n
          copyright notice and this permission notice appear in all copies.\nTHE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL\n
          IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\n
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN \n
          AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR \n
          PERFORMANCE OF THIS SOFTWARE.
          `
         return licenseSection
         
        }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}
  ![Static Badge](https://img.shields.io/badge/License-${renderLicenseBadge(answers.license)}-blue)\n
  https://opensource.org/licenses/${renderLicenseLink(answers.license)}
  

`;
}

module.exports = generateMarkdown;

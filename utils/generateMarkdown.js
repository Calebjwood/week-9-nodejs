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
 
          if(license ==='ISC'){
            let licenseLink =`https://www.isc.org/licenses/`
            return licenseLink
          }else if
          (license ==='MIT'){
            let licenseLink =`https://mit-license.org/`
            return licenseLink
          }else if
          (license ==='Apache 2.0'){
            let licenseLink =`http://www.apache.org/licenses/LICENSE-2.0`
            return licenseLink
          }else if
          (license ==='BSD 2--Clause'){
            let licenseLink =`https://opensource.org/license/bsd-2-clause/`
            return licenseLink
          }else if
          (license ==='BSD 3--Clause'){
            let licenseLink =`https://opensource.org/license/bsd-3-clause/`
            return licenseLink
          }else{
            let licenseLink = ''
            return licenseLink
          }
          
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        if(license === 'ISC'){
         let licenseSection = 
         "Copyright (c)\n\nPermission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above\ncopyright notice and this permission notice appear in all copies.\nTHE SOFTWARE IS PROVIDED AS IS AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN\nAN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\nPERFORMANCE OF THIS SOFTWARE."
           return licenseSection
        } else if 
        (license === 'MIT'){
          let licenseSection = "Copyright (c)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation\nfiles (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,\nmerge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT\nNOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\nNO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nWHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
          return licenseSection
        }else if 
        (license === 'Apache 2.0'){
          let licenseSection = "Copyright (c)\n\nLicensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the\nLicense.\nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS\nIS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the\nspecific language governing permissions and limitations under the License."
          return licenseSection
        }else if 
        (license === 'BSD 2--Clause'){
          let licenseSection = "Copyright (c)\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND\nCONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES,\nINCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF\nMERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR\nCONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\nLOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,\nSTRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)\nARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF\nADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
          return licenseSection
        }else if 
        (license === 'BSD 3--Clause'){
          let licenseSection = "Copyright (c)\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND\nCONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES,\nINCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF\nMERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR\nCONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\nLOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,\nSTRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)\nARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF\nADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
          return licenseSection
        }else{
          let licenseSection = ""
          return licenseSection
        }
        

        
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}
  ![Static Badge](https://img.shields.io/badge/License-${renderLicenseBadge(answers.license)}-blue)\n
  ${renderLicenseLink(answers.license)}\n
  ${renderLicenseSection(answers.license)}

`;
}

module.exports = generateMarkdown;
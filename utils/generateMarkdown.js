// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  };
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0'
  };
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  }
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `This project is licensed under the [${license}]({${licenseLink}}) license. ${licenseBadge}`;
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseSection = renderLicenseSection(answers['license']);
  return `
## License
${licenseSection}

# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions or additional information, please contact [${answers.github}] (https:github.com/${answers.github}) or email at ${answers.email}.

`;
}

module.exports = generateMarkdown;

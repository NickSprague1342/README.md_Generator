// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// the below function is used to identify which license is used and denote it with the approprite badge. when run the application will iterate through the provided licenses to find the correct one, if no license is found the application will return no license.
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[MIT](https://img.shields.io/badge/License-MIT-green)';
  } else if (license === 'GNU') {
    return '[GNU](https://img.shields.io/badge/License-GNU-green)';
  } else if (license === 'BDS') {
    return '[BDS](https://img.shields.io/badge/License-BDS-green)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://img.shields.io/badge/License-Apache-2.0-green)';
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// the below function is used to identify which license is used and provide the link containing the licensing information. when run the application will iterate through the provided licenses to find the correct one, if no license is found the application will return no license.

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/license/mit)';
  }  else if (license === 'GNU') {
    return '[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else if (license === 'BDS') {
    return '[BSD](https://opensource.org/license/bsd-3-clause)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return 'The application is covered under the following license: '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

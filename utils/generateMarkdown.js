// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[MIT](https://img.shields.io/badge/License-MIT-green)';
  } if (license === 'GNU') {
    return '[GNU](https://img.shields.io/badge/License-GNU-green)';
  } if (license === 'BDS') {
    return '[BDS](https://img.shields.io/badge/License-BDS-green)';
  } if (license === 'Apache') {
    return '[Apache](https://img.shields.io/badge/License-Apache-green)';
  } if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://img.shields.io/badge/License-Apache-2.0-green)';
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// TODO: Include packages needed for this application
console.log('Testing node.js')

const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('/Users/nicholassprague/bootcamp/CHALLENGES/README.md_Generator/utils/index.js');
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title.'
    },

    {
        type: 'input',
        title: 'description',
        message: 'Please provide a project description.'
    },

    {
        type: 'input',
        title: 'contents',
        message: 'Please provide a table of contents.'
    },

    {
        type: 'input',
        title: 'install',
        message: 'Enter install instructions.',
        default: 'Clone repo onto your machine. Install node.js. Run npm install to install dependencies to machine.'
    },

    {
        type: 'input',
        title: 'badge',
        message: 'Does your project have any badges? Please provide badges here.'
    },

    {
        type: 'list',
        title: 'license',
        message: 'Please select from the list below the license your project is using.',
        choices: ['MIT', 'GNU', 'BDS', 'Apache']
    },
];

// TODO: Create a function to write README file

// USED https://developer.mozilla.org/en-US/docs/Web/API/FileSystem TO LEARN ABOUT HOW TO USE fs TO INTERACT WITH THE ROOT OF THE FILE SYSTEM
function writeToFile(fileName, data) {
    fs.writeReadMe(fileName, data, (error) =>
    console.log(error) || console.log('Your README.md file has been created.')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
console.log('Testing node.js')

const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('/Users/nicholassprague/bootcamp/CHALLENGES/README.md_Generator/utils/index.js')

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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

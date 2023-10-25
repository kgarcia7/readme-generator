// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:',
    },
    {
        type: 'list',
        name: 'tableOfContents',
        message: 'Add a Table of Contents? Y/N',
        choices: ['Y', 'N']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input', 
        name: 'contributing',
        message: 'Provide guidelines for contributing to the project:',
    },
    {
        type: 'input', 
        name: 'tests',
        message: 'Provide instructions for testing the project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['Apache 2.0', 'MIT', 'Mozilla Public License 2.0'],   
    },
    {
        type: 'input', 
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input', 
        name: 'email',
        message: 'Enter your email address:',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README.md has succsessfully been created');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();

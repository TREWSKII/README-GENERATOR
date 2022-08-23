

const inquirer = require('inquirer');
const fs = require('fs');
//node index.j
const util = require('util');

const generatorMarkdown = require('./utils/generateMarkdown');

// !: questions array

const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: "Title",
}, {
    type: 'input',
    message: 'Give a detialed description of your project:',
    name: "Description",
}, {
    type: 'input',
    message: 'Table of Contents:',
    name: "Table of Contents",
}, {
    type: 'input',
    message: 'Does anything need to be installed to ensure this runs?',
    name: "Installation",
}, {
    type: 'input',
    message: 'Give instructions as to how you should use?',
    name: "Usage",
}, {
    type: 'input',
    message: 'What liscence is being used?',
    name: "License",
}, {
    type: 'input',
    message: 'Who contributed to this project?',
    name: "Contributions",
}, {
    type: 'input',
    message: 'What commands are needed for this app?',
    name: "Test",
}, {
    type: 'input',
    message: 'Contact info for inquiries?',
    name: "Questions",
}, {
    type: 'input',
    message: 'Enter Github UserName:',
    name: "Github",
}, {
    type: 'input',
    message: 'Enter your Email:',
    name: "Email",
},
]

//!: write read me
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('completed')
        }
    })
}



// !: init program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README-DRAFT.md", generatorMarkdown(data));
        console.log(data)
    })
}


//!: calling init program
init();
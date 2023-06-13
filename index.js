const inquirer = require('inquirer');
const fs= require('fs');
const {Circle, Square, Triangle}= require("./lib/shapes");

inquirer.prompt([
    {
       type: 'input',
       name: 'text',
       message: 'Enter 3 letters for logo', 
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color or hexidecimal for shape color',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter color or hexidecimal for text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape?',
        choices:  ['Circle','Square','Triangle'],
    }
]) 
.then((answers)=> {
const {text, shapeColor, textColor, shape}= answers;
let createSVG;
switch(shape) {
    case "circle":
        createSVG = new Circle(text, shapeColor, textColor, shape).render();
}



fs("./examples/logo.svg", createSVG) 
      .then(() => console.log("Generated logo.svg"))
      .catch((err) => console.error(err));

});


const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = [];

const writeToFile = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name:',
        },
        {
            type: 'input',
            name: 'id',
            message: ({ name }) => `Please enter ${(name)}'s id number:`,
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Please enter ${(name)}'s email address:`,
        },
        {
            type: 'list',
            name: 'role',
            message: ({ name }) => `What is ${(name)}'s role?`,
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'office',
            message: ({ name }) => `Please enter Office Number for ${(name)}:`,
            when: ({ role }) => {
                if (role === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: ({ name }) => `Please enter GitHub username for ${(name)}:`,
            when: ({ role }) => {
                if (role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: ({ name }) => `What school did ${(name)} attend?`,
            when: ({ role }) => {
                if (role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
        .then(function ({ name, id, email, role, office, github, school }) {
            let employee;
            if (role === 'Manager') {
                employee = new Manager(name, id, email, office);
            } else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            } else {
                employee = new Intern(name, id, email, school)
            }
            employeeArr.push(employee)
        })
}

const init = () => {
    questions()
        .then((employeeArr) => writeToFile('index.html', generateHTML(employeeArr)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');
const generateHTML = require('./src/generateHTML');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = [];

const writeToFile = util.promisify(fs.writeFile);

const newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name:',
        },
        {
            type: 'number',
            name: 'id',
            message: ({ name }) => `Please enter ${(name)}'s id number:`,
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Please enter ${(name)}'s email address:`,
            validate: function (email) {
                if (email.includes('@')) { return true };
                return 'Please enter a valid email address';
            }
        },
        {
            type: 'list',
            name: 'role',
            message: ({ name }) => `What is ${(name)}'s role?`,
            choices: () => {
                if (employeeArr.some(employee => employee.role === 'Manager')) {
                    return ['Engineer', 'Intern']
                } else {
                    return ['Manager', 'Engineer', 'Intern']
                }
            }
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
        {
            type: 'confirm',
            name: 'add',
            message: 'Do you need to add another team member?',
        }
    ])
        .then(function ({ name, id, email, role, office, github, school, add }) {
            let employee;
            if (role === 'Manager') {
                employee = new Manager(name, id, email, office);
            } else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            } else {
                employee = new Intern(name, id, email, school)
            }
            employeeArr.push(employee)
            if (add) {
                return newEmployee(employeeArr);
            } else {
                return employeeArr
            }
        })
}

const init = () => {
    newEmployee()
        .then((employeeArr) => writeToFile('dist/index.html', generateHTML(employeeArr)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();
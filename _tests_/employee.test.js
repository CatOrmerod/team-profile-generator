const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const employee = new Employee('Cat', '1', 'cat@gmail.com', 'Manager');

test ('Can instantiate Employee instance', () => {
    expect(employee.name).toBe('Cat');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('cat@gmail.com');
    expect(employee.role).toBe('Manager');
});


// test ('Can set name via Constructor argument')

// test ('Can set id via Constructor argument')

// test ('Can set email via Constructor argument')

// test ('Can get name via getName()')

// test ('Can get id via getId()')

// test ('Can get email via getEmail()')

// test ('getRole() should return "Employee')

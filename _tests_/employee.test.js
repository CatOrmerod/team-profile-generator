const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
//const employee = new Employee('Cat', '1', 'cat@gmail.com', 'Manager');

describe('Employee', () => {
    it('should instantiate Employee instance', () => {
        let employee = new Employee('Cat', '1', 'cat@gmail.com', 'Manager');
        expect(employee.name).toBe('Cat');
        expect(employee.id).toBe('1');
        expect(employee.email).toBe('cat@gmail.com');
        expect(employee.role).toBe('Manager');
    })
    it('should set name via Constructor argument', () => {
        let name = 'Cat';
        let employee = new Employee(name);
        expect(employee.name).toBe(name)
    })
    it('should set id via Constructor argument', () => {
        let id = '1';
        let employee = new Employee('Cat', id);
        expect(employee.id).toBe(id)
    })
    it('should set email via Constructor argument', () => {
        let email = 'Cat@gmail.com';
        let employee = new Employee('Cat', '1', email);
        expect(employee.email).toBe(email)
    })
    it('should get name via getName()', () => {
        let name = 'Cat';
        let employee = new Employee(name);
        expect(employee.getName()).toBe(name)
    })
    it('should get id via getId()', () => {
        let id = '1';
        let employee = new Employee('Cat', id);
        expect(employee.getId()).toBe(id)
    })
    it('should get email via getEmail()', () => {
        let email = 'Cat@gmail.com';
        let employee = new Employee('Cat', '1', email);
        expect(employee.getEmail()).toBe(email)
    })
    it('getRole() should return "Employee"', () => {
        let role = 'Employee'
        let employee = new Employee('Cat', '1', 'cat@gmail.com', role);
        expect(employee.getRole()).toBe('Employee')
    })
})



// test ('Can get name via getName()')

// test ('Can get id via getId()')

// test ('Can get email via getEmail()')

// test ('getRole() should return "Employee')

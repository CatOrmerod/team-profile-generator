const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should set Office Number via constructor argument', () => {
        let office = '0424976625';
        let manager = new Manager('Cat', '1', 'Cat@gmail.com', office);
        expect(manager.office).toBe(office)
    })
    it('should get office via getOffice()', () => {
        let office = '0424976625';
        let manager = new Manager('Cat', '1', 'Cat@gmail.com', office);
        expect(manager.getOffice()).toBe(office)
    })
    it('getRole() should return "Manager"', () => {
        let manager = new Manager();
        expect(manager.getRole()).toBe('Manager')
    })
})
// test ('Can set Office Number via constructor argument')

// test ('getRole() should return "Manager')

// test ('Can get Office number via getOffice()')
const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should set school account via constructor argument', () => {
        let school = 'Kristin';
        let intern = new Intern('Cat', '1', 'Cat@gmail.com', school);
        expect(intern.school).toBe(school)
    })
    it('should get school via getSchool()', () => {
        let school = 'Kristin';
        let intern = new Intern('Cat', '1', 'Cat@gmail.com', school);
        expect(intern.getSchool()).toBe(school)
    })
    it('getRole() should return "Intern"', () => {
        let intern = new Intern();
        expect(intern.getRole()).toBe('Intern')
    })
})
// test ('Can set School via constructor')

// test ('getRole() should return "Intern')

// test ('Can get School via getSchool()')
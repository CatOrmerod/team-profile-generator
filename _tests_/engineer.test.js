const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should set Github account via constructor argument', () => {
        let github = 'CatOrmerod';
        let engineer = new Engineer('Cat', '1', 'Cat@gmail.com', github);
        expect(engineer.github).toBe(github)
    })
    it('should get github via getGithub()', () => {
        let github = 'CatOrmerod';
        let engineer = new Engineer('Cat', '1', 'Cat@gmail.com', github);
        expect(engineer.getGithub()).toBe(github)
    })
    it('getRole() should return "Engineer"', () => {
        let engineer = new Engineer();
        expect(engineer.getRole()).toBe('Engineer')
    })
})

// test ('Can set Github account via constructor')

// test ('getRole() should return "Engineer')

// test ('Can get Github username via getGithub()')
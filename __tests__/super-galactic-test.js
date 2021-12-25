//Import './../src/super-galactic.js';

describe('Person', () => {

  test('Should create a person with age as a parameter', () => {
    const newPerson = new Person(36);
    expect(newPerson.age).toEqual(36);
  });
});
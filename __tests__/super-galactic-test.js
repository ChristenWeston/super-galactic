import Person from './../src/super-galactic.js';

describe('Person', () => {

  test('Should create a person with age as a parameter', () => {
    const newPerson = new Person(36);
    expect(newPerson.earthAge).toEqual(36);
  });
});

describe('Person.prototype.mercuryAge', () => {

  test('Should return 150 if 36 is supplied as the earth age for the person', () => {
    const newPerson = new Person(36);
    expect(newPerson.mercuryAge()).toEqual(150);
  });
});

describe('Person.prototype.venusAge', () => {
  
  test('Should return 58 if 36 is supplied as the earth age for the person', () => {
    const newPerson = new Person(36);
    expect(newPerson.venusAge()).toEqual(58);
  });
});

describe('Person.prototype.marsAge', () => {

  test('Should return 19 if 36 is supplied as the earth age for the person', () => {
    const newPerson = new Person(36);
    expect(newPerson.marsAge()).toEqual(19);
  });
});

describe('Person.prototype.jupiterAge', () => {

  test('Should return 3 if 36 is supplied as the earth age for the person', () => {
    const newPerson = new Person(36);
    expect(newPerson.jupiterAge()).toEqual(3);
  });
});
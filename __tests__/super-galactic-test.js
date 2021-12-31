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

//Life expectancy female 81.2 male 76.2 both 78.7

describe('Person.prototype.yearsLeftToLive', () => {

  test('Should return 45.2 if 36 and female are supplied for the earth age and sex for the person', () => {
    const newPerson = new Person(36, "female");
    expect(newPerson.yearsLeftToLive()).toEqual(45.2);
  });
});
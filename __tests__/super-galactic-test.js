import Person from './../src/super-galactic.js';

describe('Person', () => {

  test('Should create a person with age as a parameter', () => {
    const newPerson = new Person(36);
    expect(newPerson.earthAge).toEqual(36);
  });

  test('Should create a person with age, sex, and pastLifeExpectancy as a parameter', () => {
    const newPerson = new Person(36, "female");
    expect(newPerson.earthAge).toEqual(36);
    expect(newPerson.sex).toEqual("female");
    expect(newPerson.pastLifeExpectancy).toEqual("");
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

describe('Person.prototype.yearsLeftToLive', () => {

  test('Should return 45.2 if 36 and female are supplied for the earth age and sex for the person', () => {
    const newPerson = new Person(36, "female");
    expect(newPerson.yearsLeftToLive()).toEqual(45.2);
    expect(newPerson.pastLifeExpectancy).toEqual(false);
  });

  test('Should return 40.2 if 36 and male are supplied for the earth age and sex for the person', () => {
    const newPerson = new Person(36, "male");
    expect(newPerson.yearsLeftToLive()).toEqual(40.2);
    expect(newPerson.pastLifeExpectancy).toEqual(false);
  });

  test('Should return 42.7 if 36 and "non-binary" are supplied for the earth age and sex for the person', () => {
    const newPerson = new Person(36, "non-binary");
    expect(newPerson.yearsLeftToLive()).toEqual(42.7);
    expect(newPerson.pastLifeExpectancy).toEqual(false);
  });

  test('Should return "10 years past life expectancy" if 91 and female is supplied as the earth age and sex for the person', () => {
    const newPerson = new Person(91, "female");
    expect(newPerson.yearsLeftToLive()).toEqual(10);
    expect(newPerson.pastLifeExpectancy).toEqual(true);
  });

  test('Should return "10 years past life expectancy" if 86 and male is supplied as the earth age and sex for the person', () => {
    const newPerson = new Person(86, "male");
    expect(newPerson.yearsLeftToLive()).toEqual(10);
    expect(newPerson.pastLifeExpectancy).toEqual(true);
  });

  test('Should return "10 years past life expectancy" if 88 and "non-binary" is supplied as the earth age and sex for the person', () => {
    const newPerson = new Person(88, "non-binary");
    expect(newPerson.yearsLeftToLive()).toEqual(10);
    expect(newPerson.pastLifeExpectancy).toEqual(true);
  });
});
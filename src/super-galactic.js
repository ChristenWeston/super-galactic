import { contains } from "jquery";

export default class Person {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
}

Person.prototype.mercuryAge = function() {
  let mercuryAge1 = Math.floor(parseInt(this.earthAge) / .24);
  return mercuryAge1;
};

Person.prototype.venusAge = function() {
  let venusAge1 = Math.floor(parseInt(this.earthAge) / .62);
  return venusAge1;
};

Person.prototype.marsAge = function() {
  let marsAge1 = Math.floor(parseInt(this.earthAge) / 1.88);
  return marsAge1;
};

Person.prototype.jupiterAge = function() {
  let jupiterAge1 = Math.floor(parseInt(this.earthAge) / 11.86);
  return jupiterAge1;
};
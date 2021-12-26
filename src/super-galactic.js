import { contains } from "jquery";

export default class Person {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
}

Person.prototype.mercuryAge = function() {
  let mercuryAge1 = parseInt(this.earthAge) / .24;
  return mercuryAge1;
}

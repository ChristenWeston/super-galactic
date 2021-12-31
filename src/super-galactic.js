import { contains } from "jquery";

export default class Person {
  constructor(earthAge, sex) {
    this.earthAge = earthAge;
    this.sex = sex;
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

//Life expectancy female 81.2 male 76.2 both 78.7
Person.prototype.yearsLeftToLive = function() {
  let yearsLeftToLive1;
  if (this.sex === "female") {
    yearsLeftToLive1 = 81.2 - (parseInt(this.earthAge));
    if (Math.sign(yearsLeftToLive1) === -1) {
     yearsLeftToLive1 = Math.floor(yearsLeftToLive1) * -1;
     return (yearsLeftToLive1 + " years past life expectancy");
    }
    else {
      return yearsLeftToLive1;
    }
  }

  else if (this.sex === "male") {
    yearsLeftToLive1 = 76.2 - (parseInt(this.earthAge));
    return yearsLeftToLive1;
  }

  else {
    yearsLeftToLive1 = 78.7 - (parseInt(this.earthAge));
    return yearsLeftToLive1;
  }
};
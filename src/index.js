import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './super-galactic.js';


$(document).ready(function() {
  $("form#galactic-form").submit(function(event) {
    event.preventDefault();
    let earthAge = parseInt($("#earth-age").val());
    let sex = $("select#sex").val();

    let newPerson = new Person(earthAge, sex);
    let mercuryAge = newPerson.mercuryAge();
    let venusAge = newPerson.venusAge();
    let marsAge = newPerson.marsAge();
    let jupiterAge = newPerson.jupiterAge();
    let yearsLeft = parseInt(newPerson.yearsLeftToLive());

    $(".mercury-age").html(mercuryAge);
    $(".venus-age").html(venusAge);
    $(".mars-age").html(marsAge);
    $(".jupiter-age").html(jupiterAge);
    $(".years-left").html(yearsLeft);
    $(".galactic-quiz").hide();
    $(".galactic-results").show();
  });
});
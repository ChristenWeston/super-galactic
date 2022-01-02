import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './super-galactic.js';

$(document).ready(function() {
  $("form#galactic-form").submit(function(event) {
    event.preventDefault();
    let earthAge = $("select#earth-age").val();
    let sex = $("select#sex").val();

    let newPerson = new Person(earthAge, sex);

    $(".galactic-quiz").hide();
    $(".galactic-results").show();
  })
})
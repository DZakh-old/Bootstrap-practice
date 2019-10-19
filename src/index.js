import "./stylesheets/main.scss";

import "@babel/polyfill";
import $ from "jquery";

import 'bootstrap';
$('.carousel').carousel({
  interval: 5000,
  touch: false
})


/* === Helpers === */
// import {log} from "./js/helpers"

/* === Functions === */
import "./js/functions/real-vh-height";
import "./js/functions/burger-menu";
import "./js/functions/smooth-scroll-to";

/* === Packedges === */
/* Lazysizes */
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

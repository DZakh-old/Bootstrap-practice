import "./stylesheets/main.scss";

import "@babel/polyfill";

import 'bootstrap';


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

/* Swiper */
import Swiper from 'swiper';
var mySwiper = new Swiper('.swiper-container', { /* ... */ });
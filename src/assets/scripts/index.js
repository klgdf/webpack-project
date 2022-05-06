
import helpers from './view';
import '../styles/main.css';
import '../styles/style.sass';
import unknownPng from '../img/unknown.png';

const { createImg, createDiv } = helpers;


const wrapper = document.getElementById('wrapper');

createImg(unknownPng, wrapper);
createDiv(wrapper);
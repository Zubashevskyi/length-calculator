'use strict';

const input = document.querySelector('#input');
const output = document.querySelector('#output');

const dad = document.querySelector('.dad');

const radios = document.querySelectorAll('.radio');



function removeChecked() {
   radios.forEach(radio => {
      radio.removeAttribute('checked');
   });
}

function addedChecked(i = 0) {
   radios[i].setAttribute('checked', '');
}

function checkChecked() {
   for (let radio of radios) {
      if (radio.hasAttribute('checked')) {
         return radio.getAttribute('id');
      }
   }
}


dad.addEventListener('click', (event) => {
   const target = event.target;

   if (target && target.classList.contains('radio')) {
      radios.forEach((radio, i) => {
         if (target == radio) {
            removeChecked();
            addedChecked(i);
         }
      });
   }
});






input.addEventListener('input', () => {
   const request = new XMLHttpRequest();

   request.open('GET', 'js/current.json');
   request.setRequestHeader('Content-type', 'application/json');
   request.send();


   request.addEventListener('load', () => {
      if (request.status === 200) {
         const data = JSON.parse(request.response);

         let divider = (`${data.current[checkChecked()]}`);

         output.value = (input.value / divider).toFixed(4);
      }
   });
});



















'use strict';

const img = document.querySelector('#img');
const modal = document.querySelector('#img-modal');

img.addEventListener('click', function() {
    modal.style.display = 'block';
})

modal.addEventListener('click', function() {
    modal.style.display = 'none';
})
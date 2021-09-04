'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal =  document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
const openModal = function(){ 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// select button and open the modal
for(let i = 0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}

// close button of modal
btnsCloseModal.addEventListener('click', closeModal)

// click anywhere
overlay.addEventListener('click',closeModal)
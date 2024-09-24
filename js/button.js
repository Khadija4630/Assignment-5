// function showSectionById (id){
//     // hide all the sections
//     document.getElementById('donation-section').classList.add('hidden');
//     document.getElementById('transaction-section').classList.add('hidden');
//     // show the section with the provide id as parameter

//     document.getElementById(id).classList.remove('hidden');


const modal =document.getElementById("modal");

const button = document.getElementById("btn");

const btnClose = document.getElementById("btn-close");

button.addEventListener('click',function(){
   modal.showModal();
});

btnClose.addEventListener('click',function(){
   modal.close();
});



function getInputFieldValueById(){
    console.log('will get');
}



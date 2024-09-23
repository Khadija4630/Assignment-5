const modal =document.getElementById("modal");

const button = document.getElementById("btn");

const btnClose = document.getElementById("btn-close");

button.addEventListener('click',function(){
   modal.showModal();
});

btnClose.addEventListener('click',function(){
   modal.close();
});



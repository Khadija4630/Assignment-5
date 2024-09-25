// Common functions


const modal =document.getElementById('modal');
const button1 = document.getElementById('btn-noakhali');
const button2 = document.getElementById('btn-feni');
const button3 = document.getElementById('btn-quota');

const btnClose = document.getElementById('btn-close');

button1.addEventListener('click',function(){
   modal.showModal();

});
button2.addEventListener('click',function(){
   modal.showModal();
});
button3.addEventListener('click',function(){
   modal.showModal();
});

btnClose.addEventListener('click',function(){
   modal.close();
});



function getInputFieldValueById(id){
    const inputValue= document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getTextFieldValueById(id){
    const amountValue = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amountValue);
    return amountNumber;
};


function toggleActiveButton(id) {
   document.getElementById('show-donation').classList.remove('focus');
   document.getElementById('show-history').classList.remove('focus');
   document.getElementById(id).classList.add('focus');
};

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
    
};







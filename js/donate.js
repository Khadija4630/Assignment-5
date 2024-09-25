// noakhali amount
document.getElementById('btn-noakhali')
.addEventListener('click',function(){
    const addMoney = getInputFieldValueById('noakhali-input');
    const balan = getTextFieldValueById('account-balance');

   

    if (isNaN (addMoney)|| addMoney > balan){
        alert('Invalid input');
        return;
    }
 
    if (addMoney > 0) {
       
       const balance = getTextFieldValueById('noakhali-amount');
       const newBalance = balance + addMoney;

       document.getElementById('noakhali-amount').innerText = newBalance;
       
       const history =document.createElement('div');
       const hist =document.createElement('p');
       hist.innerText=`${addMoney} Taka is Donated for famine-2024 at Noakhali,Bangladesh`
       history.innerText =`Date: ${new Date().toLocaleString()} GMT +600 (Bangladesh Standard Time)`;
       document.getElementById('title-transaction1').appendChild(hist);
       document.getElementById('transaction-container1').appendChild(history);

       const newCash =balan - addMoney;
       document.getElementById('account-balance').innerText =newCash;

       document.getElementById("noakhali-input").value="";
    }
    else{
        alert('Invalid Input');
    }


});

// feni amount
document.getElementById('btn-feni')
.addEventListener('click',function(){
    const addMoney = getInputFieldValueById('feni-input');
    const balan = getTextFieldValueById('account-balance');

   

    if (isNaN (addMoney) || addMoney > balan){
        alert('Invalid Input');
        return;
    }

    if(addMoney > 0 ){
       const balance = getTextFieldValueById('feni-amount');


       const newBalance = balance + addMoney;

       document.getElementById('feni-amount').innerText = newBalance;


       const history =document.createElement('div');
       const hist =document.createElement('p');
       hist.innerText=`${addMoney} Taka is Donated for Flood Relief in Feni ,Bangladesh`
       history.innerText =`Date: ${new Date().toLocaleString()} GMT +600 (Bangladesh Standard Time)`;
       document.getElementById('title-transaction2').appendChild(hist);
       document.getElementById('transaction-container2').appendChild(history);

       const newCash= balan - addMoney;
       document.getElementById('account-balance').innerText =newCash;

       document.getElementById("feni-input").value="";
    }
    else{
        alert('Invalid Input');
    }
});


// quota amount
document.getElementById('btn-quota')
.addEventListener('click',function(){
    const addMoney = getInputFieldValueById('quota-input');
    const balan = getTextFieldValueById('account-balance');

   

    if (isNaN (addMoney) || addMoney > balan){
        alert('Invalid Input');
        return;
    }

    if(addMoney > 0 ){
       const balance = getTextFieldValueById('quota-amount');


       const newBalance = balance + addMoney;

       document.getElementById('quota-amount').innerText = newBalance;
       const history =document.createElement('div');
       const hist =document.createElement('p');
       hist.innerText=`${addMoney} Taka is Donated for Aid Injured in the Quota Movement,Bangladesh`
       history.innerText =`Date: ${new Date().toLocaleString()} GMT +600 (Bangladesh Standard Time)`;
       document.getElementById('title-transaction3').appendChild(hist);
       document.getElementById('transaction-container3').appendChild(history);


       const newCash = balan - addMoney;
       document.getElementById('account-balance').innerText =newCash;

       document.getElementById("quota-input").value="";

    }
    else{
        alert('Invalid Input');
    }
});





// Transaction-history

document.getElementById('show-donation')
.addEventListener('click' ,function(){

    toggleActiveButton('show-donation');
    

});

document.getElementById('show-donation')
.addEventListener('click', function() {

    showSectionById('donation-section');
    
});

document.getElementById('show-history')
.addEventListener('click', function(){

    toggleActiveButton('show-history');
    

});


document.getElementById('show-history')
.addEventListener('click', function() {
    showSectionById('transaction-section');
});




// const donationButton = document.getElementById('show-donation-option');
// const historyButton = document.getElementById('show-transaction-history');


document.getElementById('btn-noakhali')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('noakhali-input').value;
    const addMoneyAmount = parseFloat(addMoney);
    const balance =document.getElementById('noakhali-amount').innerText;
    
    console.log(addMoney);
    if(addMoney > 0 || balance < addMoney){
        const balanceAmount =parseFloat(balance);
        const newBalance =balanceAmount + addMoneyAmount;

        document.getElementById('noakhali-amount').innerText =newBalance;
    }
    else{
        alert('Invalid Input');
    }
});
// document.getElementById('btn')
// .addEventListener('click', function(event){
//     event.preventDefault();

//     const addMoney = getInputFieldValueById('donation-noakhali');


//        if(addMoney>0){

      
//         const balance =getTextFieldValueById('account-balance');
//         const newBalance= balance +addMoney;
//         console.log("i know");
//         document.getElementById('account-balance').innerText =newBalance;
        
//         const p=document.createElement('p');
//         p.innerText= ` Added: ${addMoney} Tk . New Balance: ${newBalance} `;
//         console.log('p');


//         // should be common function

//         document.getElementById('transaction-container').appendChild(p);
//     }


//     else{
//         alert('failed to add money');
//     }
// });


// // Transaction-history

// document.getElementById('show-donation-option')
// .addEventListener('click' ,function(){

//     showSectionById('donation-section');
//     console.log("i know");

// });

// document.getElementById('show-transaction-history')
// .addEventListener('click', function(){
//     showSectionById('transaction-section');
//     console.log("i know");
// });



// function showSectionById (id){
//     // hide all the sections
//     document.getElementById('donation-section').classList.add('hidden');
//     document.getElementById('transaction-section').classList.add('hidden');
//     // show the section with the provide id as parameter

//     document.getElementById(id).classList.remove('hidden');
    

// };








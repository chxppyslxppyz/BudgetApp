class UI {
    //? b = BUDGET 
    //? e = EXPENSE  
    //? a = AMOUNT 
    
    constructor() {
      this.bFeedback = document.querySelector(".budget-feedback");
      this.eFeedback = document.querySelector(".expense-feedback");
      this.bForm = document.getElementById("budget-form");
      this.bInput = document.getElementById("budget-input");
      this.bAmount = document.getElementById("budget-amount");
      this.eAmount = document.getElementById("expense-amount");
      this.balance = document.getElementById("balance");
      this.bAmount = document.getElementById("balance-amount");
      this.eForm = document.getElementById("expense-form");
      this.eInput = document.getElementById("expense-input");
      this.aInput = document.getElementById("amount-input");
      this.eList = document.getElementById("expense-list");
      this.itemList = [];
      this.itemID = 0;
    }
// sub budget method
submitBudForm() { 
const value = this.budgetInput.value; 
if(value ==='' || value<0){
this.bFeedback.classList.add("showItem");
this.bFeedback.innerHTML = `<p> 
⛔ NOTE: Do not insert a negative/empty property :)
</p>`; 
this.bAmount.textContent = value; 
this.bInput.value = ''; 
this.sBalance(); 
}
    }
// sBalance part 
sBalance(){
const expense = this.tExpense(); 
const total = parseInt = parseInt(this.bAmount.textContent) - expense; 
this.bAmount.textContent = total; 
if(total < 0){
    this.balance.classList.remove('showGreen', 'showBlack');
    this.balance.classList.add('showRed');
}
else if(total > 0){
    this.balance.classList.remove('showRed', 'showBlack');
    this.balance.classList.add('showGreen');
}
else if(total === 0){
    this.balance.classList.remove('showRed', 'showGreen');
    this.balance.classList.add('showBlack');
}
}

// SUBMIT EXPENSE FORM 
submitExpenseForm() { 
    const eValue = this.expenseInput.value; 
    const aValue = this.accountInput.value; 
    if(eValue === '' || aValue === '0' || aValue < 0){
        this.eFeedback.classList.add("sItem");
        this.eFeedback.innerHTML = `<p> 
        ⛔ NOTE: Do not insert a negative/empty property :) 
        </p>`;  
        const self = this; 
    }
}

// tExpense part
tExpense(){
    let total = 10000; 
    return total; 
}
}


function eventListeners(){
const bForm = document.getElementById('budget-form')
const eForm = document.getElementById('expense-form'); 
const eList = document.getElementById('expense-list'); 
}

// UI Class - New Instance 
const ui = new UI()

// budget form submit
bForm.addEventListener('submit', function(event){

}); 

// expense form submit 
eForm.addEventListener('submit', function(event){
    event.preventDefault(); 
ui.submitExpenseForm();
}); 

// expense click 
eList.addEventListener('click!', function() {});
document.addEventListener('DOMContentLoaded', function(){
 
})


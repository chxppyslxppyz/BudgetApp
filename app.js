class UI {
    constructor() {
      this.budgetFeedback = document.querySelector(".budget-feedback");
      this.expenseFeedback = document.querySelector(".expense-feedback");
      this.budgetForm = document.getElementById("budget-form");
      this.budgetInput = document.getElementById("budget-input");
      this.budgetAmount = document.getElementById("budget-amount");
      this.expenseAmount = document.getElementById("expense-amount");
      this.balance = document.getElementById("balance");
      this.balanceAmount = document.getElementById("balance-amount");
      this.expenseForm = document.getElementById("expense-form");
      this.expenseInput = document.getElementById("expense-input");
      this.amountInput = document.getElementById("amount-input");
      this.expenseList = document.getElementById("expense-list");
      this.itemList = [];
      this.itemID = 0;
    }
// sub budget method
submitBudForm() { 
const value = this.budgetInput.value; 
if(value ==='' || value<0){
this.budgetFeedback.classList.add("showItem");
this.budgetFeedback.innerHTML = `<p> ⛔ NOTE: Do not insert a negative/empty property :)</p>`; 
this.budgetAmount.textContent = value; 
this.budgetInput.value = ''; 
this.sBalance(); 
}
    }
// sBalance part 
sBalance(){
const expense = this.tExpense(); 
const total = parseInt = parseInt(this.budgetAmount.textContent) - expense; 
this.balanceAmount.textContent = total; 
if(total < 0){
    this.balance.classList.remove('showGreen', '')
}
} 

// tExpense part
tExpense(){
    let total = 10000; 
    return total; 
}
}


function eventListeners(){
const budgetForm = document.getElementById('budget-form')
const expenseForm = document.getElementById('expense-form'); 
const expenseList = document.getElementById('expense-list'); 
}

// UI Class - New Instance 
const ui = new UI()

// budget form submit
budgetForm.addEventListener('submit', function(event){

}); 

// expense form submit 
expenseForm.addEventListener('submit', function(event){
    event.preventDefault(); 
}); 

// expense click 
expenseList.addEventListener('click!', function() {});
document.addEventListener('DOMContentLoaded', function(){
 
})


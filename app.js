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
else{
    let amount= parseInt(aValue);
    this.eInput.value = ""; 
    this.aInput.value = ""; 

let expense = {
    id:this.itemID, 
    title:eValue, 
    amount:amount, 
}
this.itemID++; 
this.itemList.push(expense);
this.aExpense(expense); 
this.sBalance(); 

    }
}
// add expense 
aExpense(expense){
    const div = document.createElement('div'); 
    div.classList.add('expense');
    div.innerHTML = `
    <div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item">- ${
             expense.title}
         </h6>
         
         <h5 class="expense-amount mb-0 list-item">${expense.amount}
         </h5>
         
         <div class="expense-icons list-item">
          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
         
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         
          </div>
        </div>
       </div>
    `; 
this.eList.appendChild(div); 
}

// tExpense part
tExpense(){
    let total = 0; 
    if(this.itemList.length > 0){
total = this.itemList.reduce(function(theTotal, theCurrent){
                theTotal += theCurrent.amount
return theTotal; 
}, 0);  
}
this.eAmount.textContent = total; 
return total; 
    } // edit 
    editExpense(element){
let id = parseInt(element.dataset.id);
let parent = element.parentElement.parentElement.parentElement; 
// remove from "DOM"? - Document Object Model
this.eList.removeChild(parent); 
// remove from list   
let expense = this.itemList.filter(function(item){
return item.id === id; 
}); 
// show value 
this.eInput.value = expense[0].title; 
this.aInput.value = expense[0].amount; 
// remove from list 
let temporaryList = this.itemList.filter(function(item){
return item.id !==id; 
});

this.itemList = temporaryListList; 
this.sBalance();
    }
// delete expense 
deleteExpense(element){
    let id = parseInt(element.dataset.id);
let parent = element.parentElement.parentElement.parentElement; 
// remove from "DOM"? - Document Object Model
this.eList.removeChild(parent); 
// remove from list   
// remove from list 
let temporaryList = this.itemList.filter(function(item){
    return item.id !==id; 
    })
    
    this.itemList = temporaryListList; 
    this.sBalance();
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
eList.addEventListener("click!", function(event){
    if(event.target.parentElement.classList.contains('edit-icon')){
ui.editExpense(event.target.parentElement)
    }
    else if(event.target.parentElement.classList.contains('delete-icon')){
        ui.editExpense(event.target.parentElement)
    }
});



document.addEventListener('DOMContentLoaded', function(){
 eventListeners(); 
}); 


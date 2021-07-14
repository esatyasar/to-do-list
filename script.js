

///////////////////priorityTasks/////////////////////
let prioritybtnAdd = document.getElementById("priority-btn-add");
let priorityTasks = document.querySelector(".priorityTasks");
let userInput = document.getElementById("priority");
   
    
const priorityAddTask = (e) => {
    e.preventDefault();
    const newli = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    /* btn.classList.add("deleteIcon");
    newli.classList.add("priority-styling"); */
    newli.innerHTML= userInput.value;
    newli.appendChild(btn);
    priorityTasks.appendChild(newli);
    userInput.value = "";
    
    btn.addEventListener("click", function(){
        const parent = this.parentNode;
        parent.remove();
    })
    
}
prioritybtnAdd.addEventListener("click", priorityAddTask);

var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

///////////////////////appointment///////////////////////////////
let appointmentbtnAdd = document.getElementById("appointment-btn-add");
let appointmentTasks = document.querySelector(".appointmentTasks");
let userInput2 = document.getElementById("appointment");
   
    
const appointmentAddTask = (e) => {
    e.preventDefault();
    const newli2 = document.createElement("li");
    const btn2 = document.createElement("button");

    btn2.innerHTML = '<i class="fas fa-trash-alt"></i>';
    btn2.classList.add("deleteIcon2");
    newli2.classList.add("appointment-styling");
    newli2.innerHTML= userInput2.value;
    newli2.appendChild(btn2);
    appointmentTasks.appendChild(newli2);
    userInput2.value = "";
    
    btn2.addEventListener("click", function(){
        const parent = this.parentNode;
        parent.remove();
    })
}
appointmentbtnAdd.addEventListener("click", appointmentAddTask);

var list = document.querySelector('.appointmentTasks');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);



///////////////reminder/////////////
let reminderbtnAdd = document.getElementById("reminder-btn-add");
let reminderTasks = document.querySelector(".reminderTasks");
let userInput3 = document.getElementById("reminder");
   
    
const reminderAddTask = (e) => {
    e.preventDefault();
    const newli3 = document.createElement("li");
    const btn3 = document.createElement("button");

    btn3.innerHTML = '<i class="fas fa-trash-alt"></i>';
    btn3.classList.add("deleteIcon3");
    newli3.classList.add("reminder-styling");
    newli3.innerHTML= userInput3.value;
    newli3.appendChild(btn3);
    reminderTasks.appendChild(newli3);
    userInput3.value = "";
    
    btn3.addEventListener("click", function(){
        const parent = this.parentNode;
        parent.remove();
    })
   
}
reminderbtnAdd.addEventListener("click", reminderAddTask);

var list = document.querySelector('.reminderTasks');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
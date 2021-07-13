let prioritybtnAdd = document.getElementById("priority-btn-add");
let priorityTasks = document.querySelector(".priorityTasks");
let userInput = document.getElementById("priority");
   
    
const priorityAddTask = (e) => {
    e.preventDefault();
    const newli = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    btn.classList.add("deleteIcon");
    newli.classList.add("priority-styling");
    newli.innerHTML= userInput.value;
    newli.appendChild(btn);
    priorityTasks.appendChild(newli);
    userInput = "";
    
    btn.addEventListener("click", function(){
        const parent = this.parentNode;
        parent.remove();
    })
}
prioritybtnAdd.addEventListener("click", priorityAddTask);


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
    userInput2 = "";
    
    btn2.addEventListener("click", function(){
        const parent = this.parentNode;
        parent.remove();
    })
}
appointmentbtnAdd.addEventListener("click", appointmentAddTask);

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
    userInput3 = "";
    
    btn3.addEventListener("click", function(){
        const parent = this.parentNode;
        parent.remove();
    })
}
reminderbtnAdd.addEventListener("click", reminderAddTask);



    /* btnAdd.addEventListener("click", function(){
    var paragragh = document.createElement("p");
    paragragh.classList.add("priority-styling");
    paragragh.innerHTML = userInput.value;
    priorityTasks.appendChild(paragragh);
    userInput.value = ""; */
    
    
    /* var deleteIcon = document.createElement("button");
    deleteIcon.classList("deleteIcon");
    paragragh.appendChild(deleteIcon);
    deleteIcon.innerHTML = " <img id = "deleteTasks" src = "./assets/delete.png" alt= "deleteimage">"
    var deleteBtn = document.querySelector("#deleteTasks");
    deleteBtn.addEventListener("click", function(){
        paragragh.removeChild(deleteIcon);   
    });
     */

/*     document.querySelector(".priorityTasks").innerHTML += 
    `   
        
        <button class ="deleteIcon">
        <img id="deleteIcon" src="./assets/delete.png" alt ="deleteIcon">
        </button>
        
    `;
    var deleteBtn = document.querySelectorAll(".deleteIcon");
    deleteBtn.addEventListener("click", function(){
        for(var i = 0; i < deleteBtn.lenght; i++ ){
            deleteBtn[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    });
}); */
/* 
const addTask = (e) => {
    e.preventDefault();
    const newList = document.createElement("li");
    const delet = document.createElement("button");
    delet.innerHTML = '<i class="fas fa-trash-alt"></i>';
//     < <li>
//     Task 1
//     <button><i class="fas fa-trash-alt"></i></button>
//      </li> 
    if (input.value !== ""){
        newList.textContent = input.value;
        newList.appendChild(delet);
        todolist.appendChild(newList);
        input.value = "";
    }else{
        alert("Please Enter a Task");
    }
    delet.addEventListener("click",function(){
        const del = confirm("Delete this task ! Are you Sure")
        if (del == true) {
            const parent = this.parentNode;
            parent.remove();
        }
    })
 };
 btn.addEventListener("click", addTask); */
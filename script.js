let btnAdd = document.getElementById("priority-btn-add");
let priorityTasks = document.querySelector(".priorityTasks");
let userInput = document.getElementById("priority");


btnAdd.addEventListener("click", function(){
    var paragragh = document.createElement("p");
    paragragh.classList.add("styling");
    paragragh.innerHTML = userInput.value;
    priorityTasks.appendChild(paragragh);
    userInput.value = "";
    document.querySelector(".priorityTasks").innerHTML += 
    `
        <button class ="deleteIcon">
        <img id="deleteIcon" src="./assets/delete.png" alt ="deleteIcon">
        </button>
    
    `
    /* var forDelete = document.createElement("img");
    forDelete.classList.add("delete");
    forDelete.setAttribute("src","./assets/delete.png"); */

});
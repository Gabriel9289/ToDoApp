const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
let todo = JSON.parse(localStorage.getItem("todo")) || [];

function updateDisplay() {
        list.innerHTML = "";
    
        todo.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
    
        deleteBtn.addEventListener("click", () => {
            todo.splice(index, 1);
            localStorage.setItem("todo", JSON.stringify(todo));
            updateDisplay();
        });
    
        li.appendChild(deleteBtn);
        list.appendChild(li);
        });
    }

addBtn.addEventListener("click",()=>{
    const value = input.value.trim();

    if (value !==""){
        todo.push(value)
        localStorage.setItem("todo",JSON.stringify(todo));
        updateDisplay();
        input.value = "";
    }

})

updateDisplay();



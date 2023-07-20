    function addTask(){
    const inputField = document.getElementById('input-field')
    let textToPrint = inputField.value
    const taskDiv = document.getElementById('task-div')
    
    if(textToPrint == ""){

    }
    else{
    taskDiv.innerHTML +=
     `<div class="task-item">
        <div class="task-item-child">
            <textarea class="task-text" id="task-text">${textToPrint}</textarea>
            <div class="icons">
                <i class="fas fa-edit edit-icon "  onclick="editItem(this)"></i>
                <i class="fas fa-trash trash-icon " onclick="deleteItem(this)"></i>
            </div>
        </div>
        <button class="done-btn" onclick="markAsDone(this)">Mark as done</button>
    </div>
    `
    inputField.value = ""
    }
}

function deleteItem(element) {
    const todoItem = ((element.parentNode).parentNode).parentNode;
    todoItem.parentNode.removeChild(todoItem);
  }

function editItem(element){
    const editItemParent = element.parentNode.parentNode
    let newText = prompt("Update Task: ")
    if(newText == ''){
        alert('Task must not be empty');
        editItem(element);
    } else {
    let toEditItem = editItemParent.querySelector('.task-text')
    toEditItem.innerText = newText
    }
}

function markAsDone(element){
    element.innerText = "Task Done!"
    element.style.backgroundColor = "rgb(0, 132, 15)"
}
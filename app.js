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
            <span class="task-text" id="task-text">${textToPrint}</span>
            <div class="icons">
                <i class="fas fa-edit edit-icon "  onclick="editItem(this)"></i>
                <i class="fas fa-trash trash-icon " onclick="deleteItem(this)"></i>
            </div>
        </div>
    </div>`
    inputField.value = ""
    }
}

function deleteItem(element) {
    const todoItem = ((element.parentNode).parentNode).parentNode;
    todoItem.parentNode.removeChild(todoItem);
  }

function editItem(element){
    const toEditItem = document.getElementById('task-text')
    let newText = prompt("Write Task to Change:")
    toEditItem.innerText = newText
    // console.log(newText)
}
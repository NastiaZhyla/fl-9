let rootNode = document.getElementById('root');

let addButton = document.getElementById('add');
let inputTask = document.getElementById('new_task');
let ListOfTasks = document.createElement('ul');
let notification = document.getElementById('notification');
let itemLimit = 10;
let items = 0;

function createNewEl(task) {
    let listItem = document.createElement('li');
    listItem.draggable = true;
    let checkbox = document.createElement('button');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    checkbox.onclick = finishTask;

    let label = document.createElement('label');
    label.innerText = task;
    label.classList.add('item-text');

    let deleteButton = document.createElement('button');
    deleteButton.className = 'material-icons delete';
    deleteButton.innerHTML = "<i class='material-icons'>delete</i>"
    deleteButton.classList.add('right-button');
    deleteButton.onclick = deleteTask;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    items++;
    if(items === itemLimit){
        disableInputAndButton();
    }
    
    return listItem;

}

function disableInputAndButton(){
    addButton.disabled = true;
    inputTask.disabled = true;
    notification.hidden = false;
}

function enableInputAndButton(){
    addButton.disabled = false;
    inputTask.disabled = false;
    notification.hidden = true;
}

function addTask() {
    if (inputTask.value) {
        let listItem = createNewEl(inputTask.value);
        ListOfTasks.appendChild(listItem);
        inputTask.value = '';
    }
}
addButton.onclick = addTask;

function finishTask() {
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    if(!checkbox.classList.contains('checked')){
        checkbox.classList.add('checked');
        checkbox.innerHTML = '<i class="material-icons">check_box</i>';
    }

}

function deleteTask() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    if(items === itemLimit){
        enableInputAndButton();
    }
    items--;
}

rootNode.appendChild(ListOfTasks);
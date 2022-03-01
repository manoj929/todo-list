import 'bootstrap/dist/css/bootstrap.min.css'


const text = document.getElementById('text');
const addTaskButton = document.getElementById('add-task-btn');
const saveToDoButton = document.getElementById('save-todo-btn');
const listBox = document.getElementById('listBox');
const saveInd = document.getElementById('saveIndex');

let todoArray = [];

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    let todo = localStorage.getItem('todo');
    if(todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }

    todoArray.push(text.value);
    text.value = '';
    localStorage.setItem('todo', JSON.stringify(todoArray));
    displayTodo();
});

function displayTodo() {
    let todo = localStorage.getItem('todo');
    if(todo === null) {
        todoArray = []
    } else {
        todoArray = JSON.parse(todo);
    }

    let htmlCode = '';
    todoArray.forEach((list, ind) => {
        htmlCode += `
        <li class="list-group-item d-flex justify-content-between align-items-center">${list}
        <span>
        <button value='${ind}' class='btn btn-primary edit'>edit</button>
        <button  class='btn btn-danger delete'>delete</button>
        </span>
        </li>
        `
    });
    listBox.innerHTML = htmlCode;
}

listBox.addEventListener('click', function(e) {
    console.log(e.target);
    // edit(e.target)
    // if(e.target.classList.contains('edit')){
        edit(e.target)
        console.log(e.target.value)
    // }
    deleteTodo(e.target)
})

function deleteTodo(target) {
    if(target.classList.contains('delete')){
        target.id
        let todo = localStorage.getItem('todo');
    todoArray = JSON.parse(todo);
    todoArray.splice(target.parentElement.parentElement, 1);
    localStorage.setItem('todo', JSON.stringify(todoArray));
    displayTodo();
    }
    
}

function edit(target) {
    if(target.classList.contains('edit')){
        saveInd.value = target.value;
    let todo = localStorage.getItem('todo');
    todoArray = JSON.parse(todo);
    text.value = todoArray[target.value];
    addTaskButton.style.display = 'none';
    saveToDoButton.style.display = 'block';
    }
}

saveToDoButton.addEventListener('click', (e) => {
    e.preventDefault();
    let todo = localStorage.getItem('todo');
    todoArray =JSON.parse(todo)
    let id = saveInd.value;
    todoArray[id] = text.value;
    addTaskButton.style.display = 'block'
    saveToDoButton.style.display = 'none';
    text.value = '';
    localStorage.setItem('todo', JSON.stringify(todoArray));
    displayTodo();
})
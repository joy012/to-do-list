document.getElementById('toDoForm').addEventListener('submit', storeToDo);


function storeToDo(event){
    const toDoText = document.getElementById('inputVal').value;
    const id = Math.round(Math.random() * 100);
    const checkedStatus = 'false';

    const toDo = {toDoText, id, checkedStatus};
    let toDos = [];
    if(localStorage.getItem('toDos')){
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    toDos.push(toDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));

    document.getElementById('toDoForm').reset();
    showToDo();
    event.preventDefault(); //it will cancel the default action of the event. it means, it prevent the form to submit when submit button is clicked. it canceled the submit event
    
}

// const checkboxChecked = id => {
//     const toDos = JSON.parse(localStorage.getItem('toDos'));
//     const currentBox = toDos.find(toDo => toDo.id === id);
//     currentBox.checkedStatus = 'true';
//     localStorage.setItem('toDos', JSON.stringify(toDos));
//     showToDo();
// }
const deleteToDo = (id) => {
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    const remainingToDo = toDos.filter(toDo => toDo.id !== id);
    localStorage.setItem('toDos', JSON.stringify(remainingToDo));
    showToDo();
}

const showToDo = () => {
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    const toDoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';

    for (let i = 0; i < toDos.length; i++) {
        const {toDoText, checkedStatus, id} = toDos[i];
        toDoList.innerHTML += 
        `<div id='single-toDo' class="p-3 my-3 col-md-9 mx-auto d-flex justify-content-between">
            <div class="form-check form-check-inline">
                <input class="form-check-input mx-2" id="${id}" type="checkbox" id="inlineCheckbox1">
                <label class="form-check-label" for="inlineCheckbox1"><h4 class=" text-white">${toDoText}</h4></label>
            </div>
            <button onclick="deleteToDo(${id})" class="btn btn-danger rounded-pill">✖</button>
        </div>`; 
    }
}






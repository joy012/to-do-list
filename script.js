document.getElementById('toDoForm').addEventListener('submit', storeToDo);


function storeToDo(event){
    const toDoText = document.getElementById('inputVal').value;
    const id = Math.round(Math.random() * 100);
    const status = 'pending';

    const toDo = {toDoText, id, status};
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
        toDoList.innerHTML += 
        `<div id='single-toDo' class="p-4 my-3 col-sm-9 mx-auto d-flex justify-content-between align-items-center">
            <div class="form-check form-check-inline">
                <input class="form-check-input mx-3" type="checkbox" id="inlineCheckbox1">
                <label class="form-check-label" for="inlineCheckbox1"><h4 class=" text-white">${toDos[i].toDoText}</h4></label>
            </div>
            <button onclick="deleteToDo(${toDos[i].id})" class="btn btn-danger rounded-pill">✖</button>
        </div>`; 
    }
}






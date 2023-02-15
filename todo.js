const formAdd = document.querySelector('.add'),
         list = document.querySelector('.todos');


    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = formAdd.add.value.trim(); 

        if(todo.length != 0){
            generateTemplate(todo);
            formAdd.reset();
        } else {
             alart('please input task');
        }
    });

    const generateTemplate = (todo) => {
            let html = `<li class='list-group-item d-flex justify-content-between
            align-items-center'>
             <span>${todo}</span>
             <i class="fa fa-trash-o delete"></i>
            </li>`;
            list.innerHTML += html;      
    }

        //  to make the delete functional
     list.addEventListener('click', (e) => {
        if(e.target.classlist.contains('delete')) {
            e.target.parentElement.remove();
        }
    })
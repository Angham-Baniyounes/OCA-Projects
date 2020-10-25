let input = document.querySelector('#input');
let addButton = document.querySelector('#addButton');
let container = document.querySelector('#container');
var count=0;

    class item {
        constructor(itemName){
            this.create(itemName);
        }

    create(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.classList.add('item-input');
        input.type = "text";
        input.name=count;
        count++;

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        input.style.display="flex";
        input.style.width="100%";
        // input.style.padding="10px";
        // input.style.flexWrap="nowrap";
        // input.style.flexDirection="row"
        // itemBox.style.borderBottom= "3px solid whitesmoke";
        // input.style.margin="auto";

        // itemBox.id="inputtask"+count;
        let editButton = document.createElement('button');
        editButton.innerHTML = "Edit";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove";
        removeButton.classList.add('removeButton');


        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));
        removeButton.addEventListener('click',() => this.remove(itemBox ,input.name));
        // removeButton.addEventListener('click',() => local_remove());

        localStorage.setItem(input.name,input.value);
        const task1 = localStorage.getItem('task');

        // localStorage.removeItem(input.name);


    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item , input){
        container.removeChild(item);
        localStorage.removeItem(input);

    }
}
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}
addButton.addEventListener('click',check);
// window.addEventListener('keydown', (e) => {
//     if(e.which == 13){
//         check();
//     }
// })

function clearAll(){
    localStorage.clear();
    var a =document.getElementsByClassName("item");
    // container.removeChild(container.childNodes);
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
    count =0;
    
}
//////////////////////////////////
// class task{
//     constructor(title,edide, remove){
//         this=title;

//     }

// }

// function create(){
//     tasknew = new task()
// }
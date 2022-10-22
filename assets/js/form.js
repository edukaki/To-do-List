import { ToDoItem, toDoListArr, toDoList, toDoCount } from "./main.js";

const toDoForm = document.querySelector('[data-form="to-do__form"]');

toDoForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const newToDo = new ToDoItem(toDoForm.toDoInput.value);
    toDoListArr.push(newToDo);
    createNewItem(newToDo);
    toDoForm.reset();
    toDoCount(toDoListArr);
})

function createNewItem(element){
    const newLi = document.createElement("li");
    newLi.classList.add("list__item");
    let isChecked = "";
    
    if (element.checked==true){isChecked = "checked"};

    newLi.classList.add("c-to-do__container","c-to-do__container--spaceBetween");
    newLi.setAttribute("data-listid",element.id);
    toDoList.insertBefore(newLi,document.querySelector('[data-countli]'));
    newLi.innerHTML = `
            <label class="c-checkbox__container">
                <input type="checkbox" class="checkbox--hide" data-checkid=${element.id} ${isChecked}>
                <span class="checkmark"></span>
            </label>
            <p class="c-to-do__text">${element.text}</p>
            <button class="button--bgTransparent" name="btn_add"><img src="./assets/images/icon-cross.svg" alt="Cross Icon" data-crossid=${element.id}></button>
            `;

    if(newLi.querySelector("[data-checkid]").checked===true){
        newLi.querySelector("p").classList.add("line-through");
    }
}
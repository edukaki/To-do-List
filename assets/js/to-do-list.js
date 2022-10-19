import { ToDoItem, toDoListArr, toDoList } from "./main.js";

const toDoForm = document.querySelector('[data-form="to-do__form"]');

toDoForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const newToDo = new ToDoItem(toDoForm.toDoInput.value);
    toDoListArr.push(newToDo)
    createNewItem(newToDo);
    console.log(toDoListArr);

})

function createNewItem(element){
    const newLi = document.createElement("li");
    newLi.classList.add("c-to-do__container","c-to-do__container--spaceBetween");
    newLi.setAttribute("data-listid",element.id)
    toDoList.appendChild(newLi);
    newLi.innerHTML = `
            <label class="c-checkbox__container">
                <input type="checkbox" class="checkbox--hide">
                <span class="checkmark"></span>
            </label>
            <p class="c-to-do__text">${element.text}</p>
            <button class="button--bgTransparent" name="btn_add"><img src="./assets/images/icon-cross.svg" alt="Cross Icon" data-crossid=${element.id}></button>
            `;
}
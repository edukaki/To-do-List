export const toDoList = document.querySelector('[data-list="body"]');
export const toDoListArr = [];
export class ToDoItem {
    id = 0;
    checked = false;
    text = "";

    constructor(text){
        this.text = text;
        this.id++;
    }
}
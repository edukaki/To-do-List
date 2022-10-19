export const toDoList = document.querySelector('[data-list="body"]');
export const toDoListArr = [];
export class ToDoItem {
    id;
    checked = false;
    text = "";

    constructor(text){
        this.text = text;
        console.log(toDoListArr.length)
        toDoListArr.length===0 ? this.id = 1 : this.id = toDoListArr.length+1;
    }
}


window.addEventListener("click",event => {
    const btnCross = document.querySelectorAll('[data-crossid]');
    const target = event.target;
    
    btnCross.forEach(btnCross => {
        if(btnCross == target){
            toDoListArr.splice(toDoListArr.findIndex(element => element.id == btnCross.dataset.crossid),1)
            console.log(btnCross)
            return deleteItem((btnCross.parentNode).parentNode);
        }
    })

})

function deleteItem(element){
    return element.remove();
}
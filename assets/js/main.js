export const toDoList = document.querySelector('[data-list="body"]');
export const toDoListArr = [];
export class ToDoItem {
    id;
    checked = false;
    text = "";

    constructor(text){
        this.text = text;
        toDoListArr.length===0 ? this.id = 1 : this.id = toDoListArr.length+1;
    }
}


window.addEventListener("click",event => {
    const btnCross = document.querySelectorAll('[data-crossid]');
    const target = event.target;
    
    btnCross.forEach(btnCross => {
        if(btnCross == target){
            return deleteItem((btnCross.parentNode).parentNode,toDoListArr.findIndex(element => element.id == btnCross.dataset.crossid));
        }
    })
    
})

function deleteItem(element,arrIndex){
    toDoListArr.splice(arrIndex,1)
    console.log(toDoListArr)
    return element.remove();
}

function overlineItem(element){

}
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
    const checkBox = document.querySelectorAll('[data-checkid]');
    const target = event.target;
    
    btnCross.forEach(btnCross => {
        if(btnCross == target){
            return deleteItem((btnCross.parentNode).parentNode,getIdFromArr(btnCross.dataset.crossid));
        }
    })
    
    checkBox.forEach(checkBox => {
        const text = checkBox.parentNode.nextSibling.nextSibling;
        if(checkBox == target){
            return lineThroughItem(checkBox,getIdFromArr(checkBox.dataset.checkid),text);
        }
    })

    filter();

    toDoCount(toDoListArr);
})

toDoCount(toDoListArr);

function getIdFromArr (data){
    return toDoListArr.findIndex(element => element.id == data);
}

function deleteItem(element,arrIndex){
    toDoListArr.splice(arrIndex,1)
    return element.remove();
}

function lineThroughItem(checkBox, checkBoxId, element){
    if(checkBox.checked == true) {
        element.classList.add("line-through");
        toDoListArr[checkBoxId].checked = true;
    }else{
        element.classList.remove("line-through")
        toDoListArr[checkBoxId].checked = false;
    }
}

export function toDoCount (Arr){
    let countArr = 0;
    const count = document.querySelectorAll("[data-count]");

    toDoListArr.forEach((element) => {
        if(element.checked == false){
            return countArr++
        }
    })
    count.forEach(element => element.innerHTML=`${countArr} items left`);
}
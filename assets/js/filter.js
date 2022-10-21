const btnAll = document.querySelector('[data-filter="all"]');
const btnActive = document.querySelector('[data-filter="active"]');
const btnCompleted = document.querySelector('[data-filter="completed"]');
const btnClearCompleted = document.querySelector('[data-filter="clear"]');


function filter(){
    var listElement = document.querySelectorAll('[data-listid]');
    var checkedElement = document.querySelectorAll('[data-checkid]');
    
    btnAll.addEventListener("click", () => {
        listElement.forEach(element =>{
            showElement(element)
        })
    })

    btnActive.addEventListener("click", () => {
        listElement.forEach(element => {
            showElement(element);
        })
        
        checkedElement.forEach(checkedElement => {
            if(checkedElement.checked){hideElement(checkedElement.parentNode.parentNode)}
        })
    }) 
    
    btnCompleted.addEventListener("click", () => {
        listElement.forEach(element => {
            showElement(element);
        })
        
        checkedElement.forEach(checkedElement => {
            if(!checkedElement.checked){hideElement(checkedElement.parentNode.parentNode)}
        })
    })

    btnClearCompleted.addEventListener("click", () => {
        checkedElement.forEach(checkedElement => {
            if(checkedElement.checked){
                checkedElement.parentNode.parentNode.remove();
            }
        })
    })
} 


function hideElement(element){
    element.style.display = "none";
}

function showElement(element){
    element.style.display = "flex";
}
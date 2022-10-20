const btnAll = document.querySelector('[data-filter="all"]');
const btnActive = document.querySelector('[data-filter="active"]');
const btnCompleted = document.querySelector('[data-filter="completed"]');


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
} 


function hideElement(element){
    element.style.webkitTransitionDuration = "1s";
    element.style.mozTransitionDuration = "1s";
    element.style.oTransitionDuration = "1s";
    element.style.transitionDuration = "1s";
    element.style.opacity = "0";
    
    element.addEventListener('webkitTransitionEnd', function () {
        element.style.display = "none";
    }, false);
    element.addEventListener('mozTransitionEnd', function () {
        element.style.display = "none";
    }, false);
    element.addEventListener('oTransitionEnd', function () {
        element.style.display = "none";
    }, false);
    element.addEventListener('transitionend', function () {
        element.style.display = "none";
    }, false);
}

function showElement(element){
    element.style.webkitTransitionDuration = "1s";
    element.style.mozTransitionDuration = "1s";
    element.style.oTransitionDuration = "1s";
    element.style.transitionDuration = "1s";
    element.style.opacity = "1";
    
    element.addEventListener('webkitTransitionEnd', function () {
        element.style.display = "flex";
    }, false);
    element.addEventListener('mozTransitionEnd', function () {
        element.style.display = "flex";
    }, false);
    element.addEventListener('oTransitionEnd', function () {
        element.style.display = "flex";
    }, false);
    element.addEventListener('transitionend', function () {
        element.style.display = "flex";
    }, false);
    element.style.display = "flex";

    console.log(element)
}
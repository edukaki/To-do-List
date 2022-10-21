const iconTheme = document.querySelector(".theme");

iconTheme.addEventListener("click", () => {
    return toggleTheme();
})



function toggleTheme(){
    const body = document.body;
    
    body.classList.toggle("body--dark-mode");
    iconTheme.classList.toggle("-th-sun");
}
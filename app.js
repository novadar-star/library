const showBtn = document.querySelector("#addnewBook");
showBtn.addEventListener("click", ()=>{
    dialog.showModal();
});

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", ()=>{
    dialog.close();
})

const form = document.querySelector("form");

//add submit event to form
form.addEventListener("submit", (e)=>{
e.preventDefault() //prevents page refresh when submitting
const fd = new FormData(form);
console.log(fd);

//to access the data use for loop to iterate
for(item of fd){
    console.log(item);
}

})


const myLib = [];


function Book(){

}

function addBooktoLib(){
    //create book and store new book object to an array
    // book objects should have a unique id,
let book = {
    title
}
    
}
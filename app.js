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

})




function Book(title, author, numofPages, file, read, notes){
this.title = title;
this.author = author;
this.numofPages = numofPages;
this.file = file;
this.read = read;
this.notes = notes;
}

function addBooktoLib(){
    //create book and store new book object to an array
 const myLib = [];
 
    // book objects should have a unique id,

}
let book = {
    
}

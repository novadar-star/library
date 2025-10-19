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
const submit = document.querySelector(".addbookBtn");
submit.addEventListener("submit", (e)=>{
e.preventDefault() //prevents page refresh when submitting

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = document.querySelector("#numofPages").value;
const file  = document.querySelector("#file").value; //figure how to extract file
//const read = document.querySelector('input[name=read]:checked').value;
const notes = document.querySelector("#notes").value;

const newdisplay = new Book(title);
add.addbook(newdisplay);
addtoHTML();
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
 this.book = [];
 this.addbook = function(book){
    this.book.push(book);
 }
     // book objects should have a unique id,
}
//book object
const book = new Book();
//addbooktoLib object
const add = new addBooktoLib();
//book is empty make sure to add title
add.addbook();
console.log(book);
function addtoHTML(){
    for(let i = 0; i<book.addbook.length; i++){
        const title = document.createElement("h1");
        article.appendChild(title);
    }
}

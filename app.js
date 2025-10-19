const showBtn = document.querySelector("#addnewBook");
showBtn.addEventListener("click", ()=>{
    dialog.showModal();
});

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", ()=>{
    dialog.close();
})


const myLibrary = [];
//Get user input from form

const submit = document.querySelector(".addbookBtn");
submit.addEventListener("click", (e)=>{
e.preventDefault() //prevents page refresh when submitting

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = document.querySelector("#numofPages").value;
const file  = document.querySelector("#file").value; 
const read = document.querySelector('input[name=read]:checked').value; //add catch error
const notes = document.querySelector("#notes").value;
const id = crypto.randomUUID().toString();
const bookInfo = new Book(title, author, pages, file, read, notes,id);

//console.log(bookInfo);

//Add created book to library


myLibrary.push(bookInfo); //push book objects to main lib
//console.log(myLibrary); 

for(var index in myLibrary){
    console.log(myLibrary[index]);
}

})

function Book(title, author, numofPages, file, read, notes,id){
this.title = title;
this.author = author;
this.numofPages = numofPages;
this.file = file;
this.read = read;
this.notes = notes;
this.id = id;
}

//Iterate through library and show all books from it

/*
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

const newdisplay = new Book(title, author, pages, file, read, notes);
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

this.info = function(){
        console.log("The " + this.title + " by " + this.author + ", " + this.numofPages+  " pages " + this.read + "notes: " + this.notes);
    }
}
/* test
const littleLife = new Book("My Little Life", "Anya", 330,"./plus.svg", "has read");
littleLife.info();


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
add.addbook(book);

console.log(book);




function addtoHTML(){
    for(var items in book){
        const title = document.createElement("h1");
        article.appendChild(title);
    }
}
*/
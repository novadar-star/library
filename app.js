const showBtn = document.querySelector("#addnewBook");
showBtn.addEventListener("click", ()=>{
    dialog.showModal();
   
});

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dialog.close();
})


const myLibrary = [];
//Get user input from form

const submit = document.querySelector(".addbookBtn");
submit.addEventListener("click", (e)=>{
e.preventDefault() //prevents page refresh when submitting

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const numofPages = document.querySelector("#numofPages").value;    
//const file  = document.querySelector("#file").value; 
const read = document.querySelector('input[name="read"]:checked').getAttribute('id');; 
const notes = document.querySelector("#notes").value;
//const id = crypto.randomUUID().toString();
const bookInfo = new Book(title, author, numofPages, read, notes);

console.log(bookInfo);

//Add created book to library


myLibrary.push(bookInfo); //push book objects to main lib
//console.log(myLibrary); 
//, a.author, a.numofPages, a.file, a.read, a.notes, a.id)
//accessed it but need to loop
//returns all value? but kasama ung key
//let info = myLibrary.map(a => ({title: a.title, author: a.author, pages:a.numofPages, 
    //file: a.file, read: a.read, notes: a.notes, id: a.id}))
    const maincontent = document.getElementsByClassName("main-content")[0];
    console.log(maincontent);
    /*FIGURE OUT HOW TO PRINT OBJECT EACH; NOT STACK*/
    myLibrary.forEach((details, index)=>{
        let itemHR = document.createElement("HR")
        let itemp = document.createElement("p");
        let itempText= document.createTextNode(`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.title}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.author}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.numofPages}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.read}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.notes}`)
        maincontent.appendChild(itemp);
         maincontent.appendChild(itempText);
        maincontent.appendChild(itemHR);
        //console.log(details.title);
    })



})

function Book(title, author, numofPages, read, notes){
this.title = title;
this.author = author;
this.numofPages = numofPages;
this.read = read;
this.notes = notes;

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
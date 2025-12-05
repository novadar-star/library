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
        let itemHR = document.createElement("HR") //create horizontal line
        let itemp = document.createElement("p");  
        const btnremove = document.createElement("button");
        btnremove.textContent = "Remove";
        btnremove.style.background = "#FF474D";
        btnremove.style.padding = "0.5em";
        btnremove.style.color = "white";
        btnremove.style.margin = "0.2em";
         btnremove.style.borderRadius = "0.3em";

        let itempText= document.createTextNode(`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.title}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.author}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.numofPages}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.read}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            ${details.notes}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`)
        maincontent.appendChild(itemp);
        maincontent.appendChild(itempText);
          maincontent.appendChild(btnremove);
        maincontent.appendChild(itemHR);
      
     
    })

//figure out how to print that doesnt accumulate

})

function Book(title, author, numofPages, read, notes){
this.title = title;
this.author = author;
this.numofPages = numofPages;
this.read = read;
this.notes = notes;

}

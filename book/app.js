// array of books object.
let library = [];

// dom elements
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const submit = document.querySelector('#submit');
const main = document.querySelector('#main');
const addBook = document.querySelector('#addBook');
const inputBook = document.querySelector('#inputBook');
let indexNo;
let bookcount = 0; 
// constructor to create book object
function Book(title, author, pages, read){
    this.title =title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// prototype funcion for the book
Book.prototype.info = function (){
    return (`${this.title} by ${this.author} , ${this.pages} pages, ${this.read} read yet.`);
}

//funtion to add book object in library array
const addToTheLibrary =  function(title, author, pages, read){  
    const book = new Book(title, author, pages, read);
    library.push(book);
 
 }

// function to get values from the input
const getValues = function(){
    main.textContent = ''; 
    inputBook.classList.toggle('hidden');
    addToTheLibrary(title.value, author.value, pages.value, read.value);
    displayBook(library);
    title.value = '';
    author.value = '';
    pages.value = '';
    // read.value = '';
    // console.log(bookcount);
}
// submitting the values

submit.addEventListener('click', getValues);
// creating the card element for book 

const createCard = function(titleVal, authorval, pagesVal, readVal, indexNo){

    //creatting elements of the carc
    const div = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const deleteBtn = document.createElement('button');

    //adding class to the card elements
    div.classList.add('card');
    title.classList.add('list');
    author.classList.add('list');
    pages.classList.add('list');
    read.classList.add('list');
    deleteBtn.classList.add('deletebtn');
    // deleteBtn.setAttribute('id', `card${bookcount}`);
    deleteBtn.dataset.indexNumber = bookcount;

    //Adding text node
    title.textContent = 'Title: '+titleVal;
    author.textContent = 'Author: '+authorval;
    pages.textContent='Pages: '+pagesVal;
    read.textContent = 'Read: '+readVal;
    deleteBtn.textContent = 'delete' ;
    deleteBtn.dataset.indexNumber = indexNo;
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(deleteBtn);
    main.appendChild(div);

}
//displaying the library content

const displayBook = function(library){
    library.forEach(element => {
        createCard(element.title, element.author, element.pages, element.read, library.indexOf(element));
        const delbtn = document.querySelectorAll('.deletebtn');
        
        delbtn.forEach(btn => {
            btn.addEventListener('click', (e)=>{
               removefromLibrary(e);
            });
        });
        
    });      
}

addBook.addEventListener('click', () =>{
    inputBook.classList.toggle('hidden');
})
 
const removefromLibrary =  function(indexNo){ 
    library.splice(indexNo, 1);
    console.log(library);
}


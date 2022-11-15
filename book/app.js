// initialization Array of book objects.
let library = [];
// DOM MANUPULATION
// dom elements
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const submit = document.querySelector('#submit');
const main = document.querySelector('#main');
const addBook = document.querySelector('#addBook');
const inputBook = document.querySelector('#inputBook');
const closebtn = document.querySelector('#close');
// hiding input form through close button
 closebtn.addEventListener('click', ()=>{
    inputBook.classList.toggle('hidden');
 });

//Bringing input box and hiding input box[ADDING BOOKS]
const addBookstolibrary= function(){
addBook.addEventListener('click', () =>{
    inputBook.classList.toggle('hidden');
});
submitValue();
}
// function to extract data from form element and putting in object and pushing to library
const submitValue = function(){ 
   
    submit.addEventListener('click', ()=>{
        addToTheLibrary(title.value, author.value, pages.value, read.value);
        inputBook.classList.toggle('hidden');
        getValues();
    });
}

//displaying the library content

const displayBook = function(library){
    main.textContent = ''; 
    library.forEach(element => {
       let index =library.indexOf(element);
        createCard(element.title, element.author, element.pages, element.read, index);
    });   
}
//Getting index value to deletebook



const getIndex = function(){
    const btns =document.querySelectorAll('.deletebtn');
    let index;
    btns.forEach(btn =>{
        btn.addEventListener('click', ()=>{
           index=btn.dataset.indexNumber;
           removeBook(index);
          getValues();

        });
        
    })
    
}

// Editing read value
const readStatus= function(){
    const readEdit = document.querySelectorAll('.readStatus');
    readEdit.forEach(read =>{
        read.addEventListener('click', ()=>{
            let indexNo = read.dataset.indexNumber;
            if(read.textContent == 'Not Read'){
                read.textContent = 'Read';
                library[indexNo].read = 'Read';
            }
            
        })
    });
}



// creating the card element for book 

const createCard = function(titleVal, authorval, pagesVal, readVal, indexNo){

    //creatting elements of the cad
    const div = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('button');
    const deleteBtn = document.createElement('button');

    //adding class to the card elements
    div.classList.add('card');
    title.classList.add('list');
    author.classList.add('list');
    pages.classList.add('list');
    read.classList.add('cardBtn', 'readStatus');
    deleteBtn.classList.add('cardBtn','deletebtn');
    

    //Adding text node
    title.textContent = 'Title: '+titleVal;
    author.textContent = 'Author: '+authorval;
    pages.textContent='Pages: '+pagesVal;
    read.textContent = readVal;
    deleteBtn.textContent = 'delete' ;
    deleteBtn.dataset.indexNumber = indexNo;
   read.dataset.indexNumber = indexNo;
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(deleteBtn);
    main.appendChild(div);

}


// DATA I/O AND MANUPULATION

// define Book object

// constructor to create book object
function Book(title, author, pages, read){
    this.title =title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//funtion to add book object in library array
const addToTheLibrary =  function(title, author, pages, read){  
    const book = new Book(title, author, pages, read);//calls constructor to create book object
    library.push(book);
 
 }

//  removing book from array
const removeBook = function(index){
        library.splice(index, 1);
    
}


// function to get values from the input
const getValues = function(){
    
    displayBook(library);
    readStatus();
    getIndex();
    title.value = '';
    author.value = '';
    pages.value = ''; 
}


addBookstolibrary();



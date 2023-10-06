const body = document.querySelector('body');
const container = document.querySelector('.container');
const book_info = document.querySelector(".book-info");
const booksDisplayer = document.querySelector(".books-displayer");
const removeButton = document.querySelector(".fa-xmark");//needs to be inside an event trigger
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');
var openModalButton = document.querySelector('.open-modal-button');







book_info.addEventListener('submit', function(event){
    event.preventDefault();
    var bookTitle = document.querySelector('#book-detail-1').value;
    var bookAuthor = document.querySelector('#book-detail-2').value;
    var bookPages = document.querySelector('#book-detail-3').value;
    var bookUrl = document.querySelector('#book-detail-4').value;
    var bookLanguage = document.querySelector('#book-detail-5').value;
    // var bookIsRead = document.querySelector('#book-detail-6').value;
    

    const thisBook = new Book(bookTitle, bookAuthor, bookPages, bookUrl, bookLanguage);
    addToDisplay(thisBook);

    document.querySelector('#book-detail-1').value="";
    document.querySelector('#book-detail-2').value="";
    document.querySelector('#book-detail-3').value="";
    document.querySelector('#book-detail-4').value="";
    document.querySelector('#book-detail-5').value="";
    // document.querySelector('#book-detail-6').checked = false;

})

closeModalButton.addEventListener('click', ()=>{
    modal.close();
})


openModalButton.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.showModal();
})



// function Book(title, author, pages, read, url=null, language='English'){
//     const this_book = Object.create(Book.prototype);
//     this_book.title = title;
//     this_book.author = author;
//     this_book.pages = pages;
//     // this_book.read = read; 
//     this_book.url = url;
//     this_book.language = language;
    
//     return this_book;
// }

class Book{
    constructor(title, author, pages, read, url=null, language='English'){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.url = url;
        this.language = language;
    }
}
removeButton.addEventListener('click', function(event){
    event.preventDefault();
    let removebtn = event.target;
    let book = removebtn.parentNode;
    booksDisplayer.removeChild(book);
    
})

document.onload = function(){
    removeButton.addEventListener('click', function(event){
    event.preventDefault();
    let removebtn = event.target;
    let book = removebtn.parentNode;
    booksDisplayer.removeChild(book);
    
})
}




function addToDisplay(book){
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');

    const insideContainer = document.createElement('div');
    insideContainer.classList.add('individual-book-title');

    let removeButton = document.createElement('i');
    removeButton.classList.add('fa-solid');
    removeButton.classList.add('fa-xmark');
    
    removeButton.addEventListener('click', function(event){
    event.preventDefault();
    let removebtn = event.target;
    let book = removebtn.parentNode;
    booksDisplayer.removeChild(book);
    
})
    bookContainer.appendChild(removeButton);

    const title = document.createElement('h5');
    title.textContent = book.title;

    insideContainer.appendChild(title);
    bookContainer.appendChild(insideContainer);

    let openModalContainer = document.createElement('div');
    openModalContainer.classList.add('open-modal');
    let openBtn = document.createElement('button');
    openBtn.textContent = 'view';
    openBtn.classList.add('open-modal-button');
    openModalContainer.appendChild(openBtn);
    bookContainer.appendChild(openModalContainer);

    openBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        dialogContainer.showModal();
    })

    const dialogContainer = document.createElement('dialog');
    const modalBookTitle = document.createElement('p');
    const modalBookAuthor = document.createElement('p');
    const modalBookPages = document.createElement('p');
    const modalBookLanguage = document.createElement('p');
    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'close';
    closeBtn.classList.add('close-modal');
    
    closeBtn.addEventListener('click', ()=>{
        dialogContainer.close();
    })


    dialogContainer.classList.add('modal');
    modalBookTitle.textContent = `Title: ${book.title}`;
    modalBookAuthor.textContent = `Author: ${book.author}`;
    modalBookPages.textContent = `Total pages: ${book.pages}.`;
    modalBookLanguage.textContent = `Its Written in ${book.language} language`;
    dialogContainer.append(modalBookTitle, modalBookAuthor, modalBookPages, modalBookLanguage, closeBtn);

    let readSwitch = document.createElement('label');
    readSwitch.classList.add('switch');
    readSwitch.innerHTML = '<input type="checkbox"/><span class="slider"></span>';
    bookContainer.appendChild(readSwitch);

   
    booksDisplayer.appendChild(bookContainer);
    booksDisplayer.appendChild(dialogContainer);
    
    // bookContainer.addEventListener('click', event=>{
    //     // event.stopPropagation();
    //     // event.preventDefault();
    //     modal.showModal();
    // })
}












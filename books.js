const myLibrary = [];


// Constructor Book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


Book.prototype.toggleRead = function() {
    this.read = !this.read
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

// Funcion añadir a libreria
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}




function render() {
    let libraryEl = document.querySelector("#library")
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class","book-card")
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class="title"><strong>${book.title}</strong></h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
                <p class="pages">${book.pages} pages</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggleRead-btn" onclick="toggleRead(${i})">
                ${book.read ? "Read" : "No read yet"}
                </button>
            </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}


// Abre el form
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "";
})


// Botón submit del formulario
document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    render()
})


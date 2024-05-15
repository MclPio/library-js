const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read

  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, read: ${read}`)
  }

  this.toggleRead = () => {
    this.read = !this.read
  }  
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

test = new Book('hobbit', 'jrr', 550, false);
test2 = new Book('book2', 'jo mo', 120, true);

addBookToLibrary(test);
addBookToLibrary(test2);

// Create table
const table = document.createElement("table");
const body = document.getElementById("body");
body.appendChild(table);

function addTableHeader() {
  // Create the row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // Add the row data
  for (let i = 0; i < arguments.length; i++) {
    const th = document.createElement("th");
    const data = document.createTextNode(arguments[i]);
    th.appendChild(data)
    tr.appendChild(th);
  }
}

function addTableData() {
  // Create the row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // Add the row data
  for (let i = 0; i < arguments.length; i++) {
    // filter button out of insertion
    if (arguments[i] instanceof HTMLElement) {
      tr.appendChild(arguments[i])
      continue
    }
    const td = document.createElement("td");
    const data = document.createTextNode(arguments[i]);
    td.appendChild(data)
    tr.appendChild(td);
  }
}

addTableHeader("Title", "Author", "Pages", "Read");

// gets all books to display on html table
function libraryToTable() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const read = book.read;

    // make a delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-id", i);
    deleteButton.className = "deleteBook";
    deleteButton.innerText = "Delete";
    
    // insert delete button into dom
    addTableData(title, author, pages, read, deleteButton);
  }
}

// clears table
function clearTable() {
  table.innerHTML = '';
}

// refresh table
function refreshTable() {
  clearTable();
  addTableHeader("Title", "Author", "Pages", "Read");
  libraryToTable();
  attachDeleteEventListeners();
}

libraryToTable();
// dialog
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// form inputs
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("read");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addedBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
  addBookToLibrary(addedBook);
  refreshTable();
  favDialog.close();
});

// click event for delete button
function attachDeleteEventListeners() {
  let deleteButtons = document.querySelectorAll('.deleteBook')

  for (i of deleteButtons) {
    i.addEventListener('click', function() {
      myLibrary.splice(this.dataset.id, 1);
      refreshTable();
    })
  }
}

attachDeleteEventListeners();
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read

  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, read: ${read}`)
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
    const td = document.createElement("td");
    const data = document.createTextNode(arguments[i]);
    td.appendChild(data)
    tr.appendChild(td);
  }
}

addTableHeader("Title", "Author", "Pages", "Read");

function libraryToTable() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const read = book.read;

    addTableData(title, author, pages, read)
  }
}

libraryToTable();
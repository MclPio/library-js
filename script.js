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

// inserts data to table. first 4 arguments are data, next 2 arguments are html objects
// addTableData(string, string, number, boolean, htmlObject, htmlObject)
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

    // make a read button
    const readButton = document.createElement("button");
    readButton.setAttribute("data-id", i);
    readButton.className = "readBook";
    readButton.innerText = "Read?"
    
    // insert delete button into dom
    addTableData(title, author, pages, read, deleteButton, readButton);
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
  attachReadEventListeners();
}

// click event for delete button
function attachDeleteEventListeners() {
  let deleteButtons = document.querySelectorAll('.deleteBook');

  for (i of deleteButtons) {
    i.addEventListener('click', function() {
      myLibrary.splice(this.dataset.id, 1);
      refreshTable();
    })
  }
}

// click event for read? button
function attachReadEventListeners() {
  let readButtons = document.querySelectorAll('.readBook');

  for (i of readButtons) {
    i.addEventListener('click', function() {
      myLibrary[this.dataset.id].toggleRead();
      refreshTable();
    })
  }
}

refreshTable();
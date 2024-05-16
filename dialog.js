// dialog
const showButton = document.getElementById("showDialog");
showButton.className = "button"
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

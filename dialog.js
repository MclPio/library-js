// dialog
const showButton = document.getElementById("showDialog");
showButton.className = "button";
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const cancelBtn = favDialog.querySelector("#cancelBtn");

// form inputs
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("read");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

cancelBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (formValid()) {
    addedBook = new Book(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputRead.checked
    );
    addBookToLibrary(addedBook);
    refreshTable();
    favDialog.close();
  }
});

function formValid() {
  if (inputTitle.validity.valueMissing) {
    inputTitle.setCustomValidity("I am expecting a title");
    inputTitle.reportValidity();
  } else if (inputAuthor.validity.valueMissing) {
    inputAuthor.setCustomValidity("I am expecting an author");
    inputAuthor.reportValidity();
  } else if (inputPages.validity.valueMissing) {
    inputPages.setCustomValidity("I am expecting page number");
    inputPages.reportValidity();
  } else {
    return true;
  }
  return false;
}

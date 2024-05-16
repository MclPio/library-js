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

// function to add on click event for each entry that calls toggleRead()

function addBookToLibrary(book) {
  myLibrary.push(book)
}

// test entries
test = new Book('hobbit', 'jrr', 550, false);
test2 = new Book('book2', 'jo mo', 120, true);

addBookToLibrary(test);
addBookToLibrary(test2);

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  info () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`)
  }

  toggleRead() {
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

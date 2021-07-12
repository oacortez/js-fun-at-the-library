class Librarian {
  constructor(personName, library) {
    this.name = personName;
    this.library = library
  }
  greetPatron(name, morning) {
    if(morning) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }
  findBook(book) {
    for(var i = 0; i < this.library.shelves.fantasy.length; i++) {
        if(this.library.shelves.fantasy[i].title === book) {
          this.library.shelves.fantasy.splice(i, 1);
          return `Yes, we have ${book}`;
        }
      }
      return `Sorry, we do not have ${book}`;
    }
    calculateLateFee(days) {
      return Math.ceil(days * 0.25)
    }
  }

module.exports = Librarian;

function createLibrary(name) {
  var newLibrary = {
    name : name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return newLibrary
}


function addBook(libraryName, bookName) {
  libraryName.shelves[bookName.genre].push(bookName);
}


function checkoutBook(library, bookName, genre) {
  // maybe create a for loop to get in the object of the property shelves and take out book from
  //  its genre. inside the for loop will create a something that has interpolatiom
  // saying that it took that book from the library

  var shelf = library.shelves[genre]

  for(var i = 0; i < shelf.length; i++) {
    var book = shelf[i]
    if(bookName === book.title) {
      shelf.splice(i, 1);
      return `You have now checked out ${bookName} from the ${library.name}`

    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

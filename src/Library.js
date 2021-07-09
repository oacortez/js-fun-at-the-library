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
module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};

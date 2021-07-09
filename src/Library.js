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
module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};

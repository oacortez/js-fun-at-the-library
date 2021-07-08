function shelfBook(book, shelf) {
  if(shelf.length < 3 ) {
  //   console.log(shelf.push(book))
    return shelf.unshift(book)
  // } else {
  //   return shelf.push(book)
  // }
  }
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};

function shelfBook(book, shelf) {
  if(shelf.length < 3 ) {
  //   console.log(shelf.push(book))
    return shelf.unshift(book)
  // } else {
  //   return shelf.push(book)
  // }
  }
}


function unshelfBook(bookName, shelf) {
  for(var i = 0; i < shelf.length; i++){
    if(shelf[i].title.includes(bookName)) {
      return shelf.splice(i, 1)
    }
  }
}


function listTitles(fantasyShelf) {
  var list = []
  for(var i = 0; i < fantasyShelf.length; i++) {
   list.push(fantasyShelf[i].title)
  }
  return list.join(', ')
}


function searchShelf(sciFiShelf) {

}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

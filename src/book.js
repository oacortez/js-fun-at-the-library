function createTitle(title) {
  return `The ${title}`;
}


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name : name,
    age : age,
    pronouns : pronouns
  }
  return character
}


function saveReview(bookTitle,reviews) {
  if(reviews.length === 0){
    return reviews.push(bookTitle)
  }
  for (var i = 0; i < reviews.length; i++) {
    if (bookTitle === reviews[i]) {
      return reviews;
    } else {
      reviews.push(bookTitle);
      return reviews;
    }
  }
}


function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.split('').length * 20;
  return bookPageCount;
}


function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle)
  }
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}

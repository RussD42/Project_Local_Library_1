function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length; 
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter(book => !book.borrows[0].returned);
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  let results = []
  let genreCats = books.map((book) => book.genre)
  let reducedGenres = genreCats.reduce((acc, genre) => {
    !acc[genre] ? acc[genre] = 1 : acc[genre] += 1
    return acc
  }, {})

  for (let genre in reducedGenres) {
    let count = reducedGenres[genre]
    results.push({name: genre, count: count})
  }
  results.sort((genreA, genreB) => (genreA.count < genreB.count) ? 1 : -1)
  results.length = 5;
  return results;
  }


function getMostPopularBooks(books) {
  let results = [];
  let mostBorrowed = books.sort((bookA, bookB) => 
  bookA.borrows.length < bookB.borrows.length ? 1 : -1
  );
  mostBorrowed.length = 5;
  for(let book in mostBorrowed){
  let title = mostBorrowed[book].title;
  let count = mostBorrowed[book].borrows.length;
  results.push({name: title, count: count});
  }
  return results;
}



function getMostPopularAuthors(books, authors) {
  let results = []
  let mostBorrows = books.sort((bookA, bookB) => 
  bookA.borrows.length < bookB.borrows.length ? 1 : -1
  );

  for (let book of mostBorrows) {
    for (let author of authors) {
      const authorName = `${author.name.first} ${author.name.last}`
      const count = book.borrows.length;
      if (book.authorId === author.id) {
        book.author = author;
        results.push({name: `${authorName}`, count: count})
      }
    }
  }
  results.length = 5;
  return results;
}




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

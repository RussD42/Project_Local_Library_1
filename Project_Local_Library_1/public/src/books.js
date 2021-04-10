function findAuthorById(authors, id) {
  const author = authors.find(author => author.id === id);
  return author;
}

function findBookById(books, id) {
  const book = books.find(book => book.id === id);
  return book; 
}

function partitionBooksByBorrowedStatus(books) {
let results = [];
let booksOut = books.filter((book) => !book.borrows[0].returned);
results.push(booksOut);
let booksIn = books.filter((book) => book.borrows[0].returned);
results.push(booksIn);
return results;
}

function getBorrowersForBook(book, accounts) {
   const { borrows } = book;
   let borrowers = borrows.map(({ id, returned })=> {
     const account = accounts.find(account => account.id === id);
     return {id, returned, ...account,};
   });
  return borrowers.slice(0, 10);
 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

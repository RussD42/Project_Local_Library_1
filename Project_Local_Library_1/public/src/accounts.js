function findAccountById(accounts, id) {
 return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1);
}

function getTotalNumberOfBorrows(account, books) {
  let userId = account.id;
  let total = 0;
  books.forEach((book) => book.borrows.forEach((borrow) => {
    if (borrow.id === userId) total++;
  }));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksOut= [];
  books.forEach(book=>{
    if (book.borrows.find((borrow)=>borrow.id === account.id && borrow.returned === false)) {
      booksOut.push(book);
    }
  })
  booksOut.forEach(book=>{
    let authorInfo = authors.find((author)=> author.id === book.authorId);
    book['author'] = authorInfo ;
  })
  return booksOut;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    return (
      total +
      book.borrows
        .filter((borrow) => borrow.id === account.id)
        .reduce((totalBorrows, borrow) => totalBorrows + 1, 0)
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let bookscheckedout = [];
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
      bookscheckedout.push(book);
    }
  });
  console.log(bookscheckedout);
  bookscheckedout.forEach((book) => {
    let anAuthor = authors.find((person) => person.id === book.authorId);
    book["author"] = anAuthor;
  });
  console.log(bookscheckedout);
  return bookscheckedout;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

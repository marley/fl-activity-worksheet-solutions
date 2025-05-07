function convertBookArrayToHTML(bookArray) {
  let htmlString = ``; // backticks allow for multiline string
  for (let i = 0; i < bookArray.length; i += 1) {
    const currentBook = bookArray[i];
    const htmlTitle = `<h2>${currentBook.title}</h2>`;
    const htmlCheckedoutStatus = `<p>Checked out: ${currentBook.checkedOut}</p>`;
    const currentListItem = `<li>${htmlTitle} ${htmlCheckedoutStatus}</li>\n`; // notice we add \n at the end for newline
    htmlString += currentListItem;
  }
  return htmlString;
}

const libraryBooks = [
  {
    id: "942372",
    title: "The Metamorphosis",
    checkedOut: true,
    dueDate: "2025-08-05T00:00:00.000Z",
    borrowerID: "1321332157766",
  },
  {
    id: "321737",
    title: "Animal Farm",
    checkedOut: false,
    dueDate: null,
    borrowerID: null,
  },
  {
    id: "788556",
    title: "Ada Lovelace: the Making of a Computer Scientist",
    checkedOut: true,
    dueDate: "2025-07-02T00:00:00.000Z",
    borrowerID: "7743267342132",
  },
  {
    id: "884627",
    title: "Atomic Habits",
    checkedOut: true,
    dueDate: "2025-06-01T00:00:00.000Z",
    borrowerID: "7743267342132",
  },
  {
    id: "985346",
    title: "All About Love",
    checkedOut: true,
    dueDate: "2025-01-01T00:00:00.000Z",
    borrowerID: "6789656437890",
  },
];

console.log(convertBookArrayToHTML(libraryBooks));

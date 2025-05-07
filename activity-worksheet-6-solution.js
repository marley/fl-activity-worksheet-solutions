function convertBookArrayToHTML(bookArray) {
  let htmlString = ``;
  for (let i = 0; i < bookArray.length; i += 1) {
    const currentBook = bookArray[i];
    let titleColor = "text-dark"; // Bootstrap class for black text. This is our default.
    let dueDateColor = "text-dark";
    let dueDateString = "In Stock"; // default to In Stock;

    if (currentBook.checkedOut === false) {
      titleColor = "text-success"; // Bootstrap class for green text.
    } else {
      const today = new Date();
      const dueDate = new Date(currentBook.dueDate);
      if (today > dueDate) {
        dueDateColor = "text-danger"; // Bootstrap class for red text.
      }
      dueDateString = `Due: ${currentBook.dueDate}`;
    }

    const htmlTitle = `<h2 class="${titleColor}">${currentBook.title}</h2>`;
    const htmlDueDate = `<p class="${dueDateColor}">${dueDateString}</p>`;
    const currentListItem = `<li>${htmlTitle} ${htmlDueDate}</li>\n`;
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

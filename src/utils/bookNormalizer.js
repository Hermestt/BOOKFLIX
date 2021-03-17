import { requestBookDetails } from "./requests";

// Get the book
function bookRequest(key) {
  return new Promise((resolve) => {
    requestBookDetails(key).then((resp) => {
      resolve(resp);
    });
  });
}

// [Normalizer] Creates a consistent book object to use throught the App.
const newBook = {
  id: "id",
  title: "string name",
  cover: "cover-id",
  description: "description goes here",
};
function bookNormalizer(book, cover) {
  newBook.id = book.key.slice(7);
  newBook.title = book.title;
  newBook.cover = cover;
  newBook.description = checkDescription(book);
  return newBook;
}

// [Normalizer] Checks if the book has description property, if it does then it checks if it's an object or a string.
function checkDescription(book) {
  if (book.hasOwnProperty("description")) {
    if (
      typeof book.description === "object" &&
      book.description !== null &&
      book.description !== undefined
    ) {
      return book.description.value;
    } else {
      return book.description;
    }
  }
  return "This book doesn't have a description";
}

// Get the book and return it on a normalized object.
export default async function returnBook(key, cover) {
  let bookObj = await bookRequest(key);
  // Next we send the cover_id we get from the list as an argument to solve the inconsistency of the covers property from the Book Object. There are too many right now to be taken care of, this solution works fine for now although theres signs of latency. This will be fixed when a backend is implemented to save the books and avoid unneccesary requests to the OL API.
  let newBook = bookNormalizer(bookObj, cover);
  return newBook;
}

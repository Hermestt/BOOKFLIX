import React, { useState } from "react";
import { requestSubjectsList } from "../utils/requests";
import "./BookRow.css";
import Book from "./Book";
import bookNormalizer from "../utils/bookNormalizer";
import useAsyncEffect from "use-async-effect";

function BookRow(props) {
  // Request the books from a specific subject
  const [booksList, setBooksList] = useState([]);
  useAsyncEffect(async () => {
    let response = await requestSubjectsList(props.subject);
    setBooksList(response);
  }, []);

  const [selectedBook, setSelectedBook] = useState({});
  const [bookKey, setBookKey] = useState(null);
  const [bookState, setBookState] = useState("");
  const handleClick = async (key, cover, index) => {
    // First check if the book is already selected, if it is do nothing.
    if (isBookSelected(index)) {
      return;
    }
    // If not then do the fetch magic.
    let normalizedBook = await bookNormalizer(key, cover);
    setBookState(index);
    setSelectedBook(normalizedBook);
    setBookKey(key);
  };

  // This function is responsible for verifying if the clicked book is already being shown. If it is then reset the states, aka close the book.
  const isBookSelected = (index) => {
    if (bookState === index) {
      setSelectedBook({});
      setBookKey(null);
      setBookState("");
      return true;
    }
    return false;
  };

  return (
    <div className="list-container">
      <h4>{props.subject}</h4>
      <div className="scroll-container">
        <ul className="book-list">
          {booksList.map((bookItem, i) => (
            <li className="book-list-item" key={i}>
              <div
                className={`book-list-item_container shadow bg-white rounded ${
                  bookState === i ? "is-selected" : ""
                }`}
                onClick={() => handleClick(bookItem.key, bookItem.cover_id, i)}
              >
                <img
                  className="book-list-item_cover"
                  src={`http://covers.openlibrary.org/b/id/${bookItem.cover_id}-M.jpg`} //TODO some books don't come with a cover-id, so I need to write a condition to verify and give a default book-cover if the api doesn't return one
                  alt={bookItem.title}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {bookKey ? <Book book={selectedBook} /> : null}
    </div>
  );
}
export default BookRow;

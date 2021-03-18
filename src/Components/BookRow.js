import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { requestSubjectsList } from "../utils/requests";
import bookNormalizer from "../utils/bookNormalizer";
import useAsyncEffect from "use-async-effect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookRow.css";
import BookModal from "./BookModal";

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

  // Modal
  const [modalShow, setModalShow] = useState(false);
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
    setModalShow(true);
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

  const config = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //This next comment is not correct to do, but for the slicky-slider to work the following useState has to be declared or else slicky-slider will throw errors.
  // eslint-disable-next-line
  const [settings, setSettings] = useState(config);

  return (
    <Container className={"topic-container"}>
      <h4 className="topic-heading">{props.subject}</h4>
      <Slider {...settings}>
        {booksList.map((bookItem, i) => (
          <div className="book-list-item" key={i}>
            <div
              className="book-list-item_container bg-white"
              onClick={() => handleClick(bookItem.key, bookItem.cover_id, i)}
            >
              <div className="cover-container">
                <img
                  className={`book-list-item_cover ${
                    bookState === i ? "is-selected" : ""
                  } `}
                  src={`http://covers.openlibrary.org/b/id/${bookItem.cover_id}-M.jpg`}
                  alt={bookItem.title}
                />
              </div>

              <p>{bookItem.title}</p>
            </div>
          </div>
        ))}
      </Slider>
      {bookKey ? (
        <BookModal
          book={selectedBook}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : null}
    </Container>
  );
}
export default BookRow;

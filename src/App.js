import React, { useState } from "react";
import BookRow from "./Components/BookRow";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import bookNormalizer from "./utils/bookNormalizer";

function App() {
  const [featuredBook, setFeaturedBook] = useState();
  async function getTheBook() {
    const bookId = "/works/OL1317211W";
    const bookCover = "6360286";
    let normalizedBook = await bookNormalizer(bookId, bookCover);
    setFeaturedBook(normalizedBook);
  }

  getTheBook();

  const subjectsList = {
    first: "programming",
    second: "design",
    third: "religion",
    forth: "philosophy",
    fifth: "short-stories",
  };

  return (
    <Container>
      {featuredBook ? <Header book={featuredBook} /> : <p>Loading...</p>}
      <BookRow subject={subjectsList.first} fetchUrl={subjectsList.first} />
      <BookRow subject={subjectsList.second} fetchUrl={subjectsList.second} />
      <BookRow subject={subjectsList.third} fetchUrl={subjectsList.third} />
      <BookRow subject={subjectsList.forth} fetchUrl={subjectsList.forth} />
      <BookRow subject={subjectsList.fifth} fetchUrl={subjectsList.fifth} />
      <Footer />
    </Container>
  );
}

export default App;

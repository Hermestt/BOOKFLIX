import React from "react";
import BookRow from "./Components/BookRow";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const subjectsList = {
    first: "programming",
    second: "design",
    third: "religion",
    forth: "philosophy",
    fifth: "psychology",
  };

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home" className="text-primary">
            BOOKFLIX
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Header />
      <BookRow subject={subjectsList.first} fetchUrl={subjectsList.first} />
      <BookRow subject={subjectsList.second} fetchUrl={subjectsList.second} />
      <BookRow subject={subjectsList.third} fetchUrl={subjectsList.third} />
      <BookRow subject={subjectsList.forth} fetchUrl={subjectsList.forth} />
      <BookRow subject={subjectsList.fifth} fetchUrl={subjectsList.fifth} />
      <Footer />
    </div>
  );
}

export default App;

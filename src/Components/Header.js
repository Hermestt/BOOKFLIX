import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./Header.css";
import getQuote from "../utils/randomQuote";

//Presentational component

function Header() {
  let randomQuote = getQuote();
  return (
    <Jumbotron fluid style={{ backgroundColor: "white" }}>
      <Container>
        <figure>
          <blockquote className="blockquote">
            <p className="font-italic">"{randomQuote.quote}"</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {randomQuote.name}
          </figcaption>
        </figure>
      </Container>
    </Jumbotron>
  );
}

export default Header;

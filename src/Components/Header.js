import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./Header.css";

//Presentational component
function Header() {
  return (
    <Jumbotron fluid style={{ backgroundColor: "white" }}>
      <Container>
        <figure>
          <blockquote className="blockquote">
            <p>
              “Most men and women, by birth or nature, lack the means to advance
              in wealth or power, but all have the ability to advance in
              knowledge.”
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">Pitagoras</figcaption>
        </figure>
      </Container>
    </Jumbotron>
  );
}

export default Header;

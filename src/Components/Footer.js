import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Footer.css";

function Footer() {
  return (
    <Jumbotron fluid id={"footer"}>
      <Container>
        <h4>BOOKPRIME</h4>
        <p className="project-description">
          BOOKPRIME is a MVP of a React Web App, created with the intention to
          learn and improve my skills on building React Wyeb Apps and Software
          Development. Improvements will be done in the future, so feel free to
          pass by and check them out.
        </p>
        <p className="github-links">
          Visit the GitHub Repository{" "}
          <a
            href="https://github.com/Hermestt/BOOKPRIME"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>{" "}
          or my profile at{" "}
          <a
            href="https://github.com/Hermestt/"
            target="_blank"
            rel="noreferrer noopener"
          >
            @Hermestt
          </a>
        </p>
        <p>
          The books and information provided are property of{" "}
          <a
            href="https://openlibrary.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open Library API.
          </a>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Footer;

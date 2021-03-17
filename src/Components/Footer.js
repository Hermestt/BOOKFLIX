import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <h5>BOOKFLIX</h5>
      <p>
        BOOKFLIX is a MVP of a React Web App, created with the intention to
        learn and improve my skills on building React Web Apps and Software
        Development. <br /> Improvements will be done in the future, so feel
        free to pass by and check them out.
      </p>
      <p>
        Visit my github profile at{" "}
        <a href="https://github.com/Hermestt" rel="noreferrer" target="_blank">
          @Hermestt
        </a>
      </p>
      <p>
        The books and information in this website is being fetched from{" "}
        <a
          href="https://openlibrary.org/developers/api"
          className="link-primary"
          target="_blank"
          rel="noreferrer"
        >
          Open Library API
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;

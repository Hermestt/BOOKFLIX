import React from "react";
import "./Book.css";

//Presentational component
function Book(props) {
  return (
    <div className="selected-container">
      <div className="selected-cover_container">
        {props.featured === true ? (
          <span className="ribbon">Featured Book</span>
        ) : null}
        <img
          src={`http://covers.openlibrary.org/b/id/${props.book.cover}.jpg`}
          alt={props.book.title}
          className={"shadow bg-body rounded"}
        />
      </div>
      <div className="selected-details_container">
        <h3>{props.book.title}</h3>
        <p>{props.book.description}</p>
      </div>
    </div>
  );
}

export default Book;

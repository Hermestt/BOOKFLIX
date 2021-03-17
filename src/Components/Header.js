import React from "react";
import "./Header.css";

//Presentational component
function Header(props) {
  return (
    <div className="selected-container">
      <div className="selected-cover_container">
        <span className="ribbon">Featured Book</span>
        <img
          src={`http://covers.openlibrary.org/b/id/${props.book.cover}-M.jpg`}
          alt={props.book.title}
          className={"shadow bg-body rounded"}
        />
      </div>
      <div className="selected-details_container">
        <h3>{props.book.title}</h3>
        <p>by Marcus Aurelius</p>
        <p>{props.book.description}</p>
      </div>
    </div>
  );
}

export default Header;

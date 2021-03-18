import React from "react";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import "./BookModal.css";

function BookModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="scroll-container">
          <div className="selected-container">
            <div className="selected-cover_container">
              <img
                src={`http://covers.openlibrary.org/b/id/${props.book.cover}-M.jpg`}
                alt={props.book.title}
                className={"border-bottom bg-body rounded"}
              />
            </div>
            <div className="selected-details_container">
              <h4>{props.book.title}</h4>
              <p>{props.book.description}</p>
              {props.book.subjects.map((subject) => (
                <Badge pill variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BookModal;

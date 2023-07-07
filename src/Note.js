import React from "react";
import "./style1.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p> {props.content}</p>
      <button className="button-delete" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
export default Note;
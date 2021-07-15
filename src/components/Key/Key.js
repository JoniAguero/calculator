import React from "react";
import "./Key.css";

export default function Key(props) {
  return (
    <div className="key" onClick={props.handleClick}>
      {props.text}
    </div>
  );
}

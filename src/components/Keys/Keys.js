import React from "react";
import Key from "../Key/Key";
import "./Keys.css";

const VALUES = [
  ["7", "8", "9", "/"],
  ["4", "5", "7", "*"],
  ["1", "2", "3", "-"],
  ["C", "0", "+", "="]
];

export default function Keys(props) {
  return (
    <div className="keys">
      {VALUES.map((item, index) => (
        <div className="keys-row" key={index}>
          {item.map((key) => (
            <Key
              text={key}
              key={key}
              handleClick={() => props.handleClick(key)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { ReactComponent as RightTriangleIcon } from "../Icons/forward-curved-arrow.svg";
import "./Component.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>

const Row = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="row">
      {/* The main text box with the link */}
      <a
        href={props.linkInfo}
        onClick={() => setClicked(true)}
        className="text"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        {props.name}{" "}
      </a>

      {/* Pop up Modal  */}
      {props.popUp && clicked && (
        <div className="shadow" onClick={() => setClicked(false)}>
          <div className="popup-content">
            <span className="close">&times;</span>
            <iframe
              title="modal"
              src={props.popUpLinkInfo}
              style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            ></iframe>
          </div>
        </div>
      )}

      {/* Create the Arrow head on the right */}
      {props.rightIcon && (
        <span
          className="right-arrow-bg"
          onClick={() => props.handleMenuSelection(props.index)}
        >
          <RightTriangleIcon className="right-arrow" />
        </span>
      )}
    </div>
  );
};

export default Row;

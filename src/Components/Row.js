import React, { useState } from "react";
import { ReactComponent as RightTriangleIcon } from "../Icons/forward-curved-arrow.svg";
import "./Component.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Sofia"
></link>;

const Row = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="">
      <div
        className=" row "
        onClick={() => {
          !props.index.includes("c") && props.handleMenuSelection(props.index);
          setClicked(true);
        }}
      >
        {/* The main text box with the link */}
        <span

        className="text"
        >
        {props.name}
        </span>

        {/* Create the Arrow head on the right */}
        {props.rightIcon && (
          <span className="right-arrow-bg">
            <a href={props.linkInfo} target="_blank" rel="noreferrer">
              <RightTriangleIcon className="right-arrow" />
            </a>
          </span>
        )}
      </div>

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
    </div>
  );
};

export default Row;

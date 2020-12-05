// This component utilizes the Row component to create a list/ menu of three dynamically layered columns
import React, { useState } from "react";
import { ReactComponent as LeftTriangleIcon } from "../Icons/back-curved-arrow.svg";
import Row from "./Row";
import "./Component.css";

const Menu = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [showInitialMenu, setShowInitialMenu] = useState(true);

  // Function to change into the next layer of column/menu
  const handleMenuSelection = (index) => {
    setSelectedIndex(index);
    setShowInitialMenu(false);
  };

  // Function to back into the previous layer of column/menu
  const goBack = () => {
    if (!selectedIndex.includes("b")) {
      setShowInitialMenu(true);
      setSelectedIndex("");
    } else {
      let newIndex = selectedIndex.substr(0, 1);
      setSelectedIndex(newIndex);
    }
  };

  // console.log(selectedIndex);

  return (
    <div className="menu-container">
      {/* Create the Arrow head on the left */}
      {!showInitialMenu && (
        <div
          className="menu-head-text"
          style={{ justifyContent: "flex-start" }}
          onClick={goBack}
        >
          <span className="arrow-bg">
            <LeftTriangleIcon className="left-arrow" />
          </span>
          <span>
            {!selectedIndex.includes("b")
              ? items[selectedIndex].name
              : !selectedIndex.includes("c") &&
                items[selectedIndex.substring(0, selectedIndex.indexOf("b"))]
                  .subMenu[selectedIndex.substr(selectedIndex.indexOf("b") + 1)]
                  .name}
          </span>
        </div>
      )}
      {/* --------------------------------- */}

      {/* Rendering all the menus */}
      <div className="row-container">
        {/* <span>Discipline</span> */}
        {items.map((item, index) => (
          <div key={`${item.name}${index}`}>
            {/* Renders the first menu of the app */}
            {showInitialMenu && (
              <Row
                index={`${index}`}
                key={`${index}`}
                handleMenuSelection={handleMenuSelection}
                linkInfo={item.linkInfo}
                rightIcon={item.rightIcon}
                leftIcon={item.leftIcon}
                name={item.name}
              />
            )}
            {/* Renders the second menu of the app */}
            {item.subMenu.map((item1, index1) => (
              <>
                {selectedIndex === `${index}` && (
                  <Row
                    index={`${index}b${index1}`} //00
                    key={`${index}b${index1}`}
                    handleMenuSelection={handleMenuSelection}
                    linkInfo={item1.linkInfo}
                    rightIcon={item1.rightIcon}
                    leftIcon={item1.leftIcon}
                    name={item1.name}
                  />
                )}

                {/* Renders the third menu of the app */}
                {item1.subMenu.map(
                  (item2, index2) =>
                    selectedIndex === `${index}b${index1}` && (
                      <Row
                        index={`${index}b${index1}c${index2}`} //000
                        key={`${index}b${index1}c${index2}`}
                        handleMenuSelection={handleMenuSelection}
                        popUpLinkInfo={item2.popUpLinkInfo}
                        rightIcon={item2.rightIcon}
                        leftIcon={item2.leftIcon}
                        popUp={item2.popUp}
                        name={item2.name}
                      />
                    )
                )}
              </>
            ))}
          </div>

          // End of Rendering all the menus
        ))}
      </div>
    </div>
  );
};

export default Menu;

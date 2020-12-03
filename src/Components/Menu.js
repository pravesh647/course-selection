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
    if (selectedIndex.length === 1) {
      setShowInitialMenu(true);
      setSelectedIndex("");
    } else {
      let newIndex = selectedIndex.substr(0, 1);
      setSelectedIndex(newIndex);
    }
  };

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
            {selectedIndex.length === 1
              ? items[selectedIndex].name
              : items[selectedIndex.substr(0, 1)].subMenu[
                  selectedIndex.substr(1, 2)
                ].name}
          </span>
        </div>
      )}
      {/* --------------------------------- */}

      {/* Rendering all the menus */}
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
                  index={`${index}${index1}`} //00
                  key={`${index}${index1}`}
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
                  selectedIndex === `${index}${index1}` && (
                    <Row
                      index={`${index}${index1}${index2}`} //000
                      key={`${index}${index1}${index2}`}
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
  );
};

export default Menu;

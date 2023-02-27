import React, { useState } from "react";
import "./Accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ heading, content, key }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <span className="title">{heading}</span>
        <span>
          {!isActive ? (
            <FontAwesomeIcon icon={faChevronUp} className="iconPosTop" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="iconPosTop" />
          )}
        </span>
      </div>
      {isActive && (
        <div className="accordion-content" key={key}>
          {content}
        </div>
      )}
    </>
  );
};

export default Accordion;

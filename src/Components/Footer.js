import React, {useState} from "react";

const Footer = ({items, flag, completed, allButClick, activeButClick, completedButClick, clearCompletedButClick}) => {

    const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="mainFooter">
        {items.length > 0 && (
          <div className="itemlist" id="footer"
          style={{
            color: flag
            ? "hsl(235, 19%, 35%)"
            : "hsl(234, 39%, 85%)",
          }}
          >
            <div> {items.length - completed.length} items left </div>
            <div>
              <button className="footerButton" onClick={allButClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {" "}
                All{" "}
              </button>
              <button className="footerButton" onClick={activeButClick}>
                {" "}
                Active{" "}
              </button>
              <button
                className="footerButton"
                onClick={completedButClick}
              >
                {" "}
                Completed{" "}
              </button>
            </div>
            <button
              className="footerButton"
              onClick={clearCompletedButClick}
            >
              {" "}
              Clear Completed{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;

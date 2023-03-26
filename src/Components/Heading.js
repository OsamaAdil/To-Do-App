import React from "react";

const Heading = ({clickTheme, flag}) => {
  return (
    <>
      <div className="mainHeading">
        <div>TODO</div>
        <div
          onClick={clickTheme}
          style={{
            backgroundImage: flag ? "url(icon-moon.svg)" : "url(icon-sun.svg)",
          }}
        ></div>
      </div>
    </>
  );
};

export default Heading;

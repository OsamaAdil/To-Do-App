import React from "react";

const Input = ({flag, text, inputEnterFunc, deleteInpBut, changeFunc}) => {
  return (
    <>
      <div className="mainInput">
        <div
          className="itemlist"
          id="mainInput"
          style={{
            backgroundColor: flag ? "white" : "hsl(237, 14%, 26%)",
            color: flag ? "hsl(235, 19%, 35%)" : "hsl(234, 39%, 85%)",
          }}
        >
          <button className="selectButton"> </button>
          <input
            className="input"
            type="text"
            value={text}
            placeholder="Enter here"
            onChange={changeFunc}
          />
          <button
            className="enterButton filter-color"
            onClick={inputEnterFunc}
          >
            {" "}
          </button>
          <button className="deleteButton" onClick={deleteInpBut}>
            {" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;

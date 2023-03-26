import React from "react";

const Items = ({flag, current, itemCheckButClick, deleteButClick}) => {

  return (
    <>
      <div className="mainContent">
        {current.map((item, index) => {
          return (
            <>
              <React.Fragment>
                {
                  <div
                    className="itemlist"
                    id="mainContentItem"
                    style={{
                      backgroundColor: flag ? "white" : "hsl(237, 14%, 26%)",
                      color: flag ? "hsl(236, 9%, 61%)" : "hsl(234, 39%, 85%)",
                      borderBottom: flag
                        ? "0.2px solid hsl(236, 33%, 92%)"
                        : "0.2px solid hsl(234, 11%, 52%)",
                    }}
                  >
                    <button
                      className="selectButton"
                      onClick={() => itemCheckButClick(index)}
                      style={{
                        backgroundImage: current[index].edit
                          ? "url(icon-check.svg)"
                          : "none",
                        background: current[index].edit
                          ? "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))"
                          : "transparent",
                      }}
                    >
                    </button>
                    <li
                      className="input"
                      style={{
                        textDecoration: current[index].edit
                          ? "line-through"
                          : "none",
                        color: flag
                          ? "hsl(235, 19%, 35%)"
                          : "hsl(234, 39%, 85%)",
                      }}
                    >
                      {item.text}
                    </li>
                    <button
                      className="deleteButton"
                      onClick={() => deleteButClick(index)}
                    >
                    </button>
                  </div>
                }
              </React.Fragment>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Items;

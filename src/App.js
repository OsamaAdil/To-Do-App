import "./App.css";
import React, { useState, useEffect } from "react";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Items from "./Components/Items";
import Footer from "./Components/Footer";

function App() {
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState();
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState([]);

  const clickTheme = () => {
    setFlag(!flag);
  };

  const changeFunc = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setCurrent(items)
  }, [items]);

  const inputEnterFunc = () => {
    setItems((olditems) => {
      return [...olditems, { text: text, edit: false }];
    });
    setText("");
  };

  const active = items.filter((value) => value.edit == false);
  const completed = items.filter((value) => value.edit == true);

  const deleteButClick = (index) => {
    let flg = [...items];
    flg.splice(index, 1);
    setItems([...flg]);
  };

  const deleteInpBut = () => {
    setText("");
  };

  const itemCheckButClick = (index) => {
    let flg = [...items];
    flg[index].edit = !flg[index].edit;
    setItems([...flg]);
  };

  const allButClick = () => {
    setCurrent(items);
  };

  const activeButClick = () => {
    setCurrent(active);
  };
  
  const completedButClick = () => {
    setCurrent(completed);
  };

  const clearCompletedButClick = () => {
    setItems(active);
  };

  return (
    <>
      <div
        className="main"
        style={{ backgroundColor: flag ? "hsl(0, 0%, 98%)" : "black" }}
      >
        <div
          style={{
            backgroundImage: flag
              ? "url(bg-desktop-light.jpg)"
              : "url(bg-desktop-dark.jpg)",
          }}
        >
          <div className="mainWrap">
            <Heading flag = {flag} clickTheme = {clickTheme}/>
            <Input flag={flag} text = {text} inputEnterFunc = {inputEnterFunc} deleteInpBut = {deleteInpBut} changeFunc = {changeFunc} />
            <Items flag={flag} current = {current} itemCheckButClick = {itemCheckButClick} deleteButClick = {deleteButClick} />
            <Footer flag = {flag} items = {items} completed = {completed} allButClick={allButClick} activeButClick = {activeButClick} completedButClick = {completedButClick} clearCompletedButClick = {clearCompletedButClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ClickCard from "./components/NewHome"; 
import DetailsCard from "./components/NewDetail";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="app">
      <TransitionGroup>
        <CSSTransition
          key={show ? "details" : "click"}
          timeout={300}
          classNames="fade"
        >
          {show ? (
            <DetailsCard handleClick={handleClick} />
          ) : (
            <ClickCard handleClick={handleClick} />
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
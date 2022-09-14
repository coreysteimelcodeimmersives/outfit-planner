import React, { useState } from "react";
import "./App.css";
import FashionButton from "./Components/FashionButton";
import FashionDisplayView from "./Components/FashionDisplayView";

function App() {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [shoes, setShoes] = useState("");

  return (
    <div className="Page">
      <div className="App">
        <div className="AppName">OUTFIT PLANNER</div>
        <div className="SpanText">FIND WHAT TO WEAR</div>
        <div className="MenuText">Fashion Styles / Dress Code</div>
        <FashionButton
          style={`Casual`}
          setTop={setTop}
          setBottom={setBottom}
          setShoes={setShoes}
        ></FashionButton>
        <FashionButton
          style={`Sport`}
          setTop={setTop}
          setBottom={setBottom}
          setShoes={setShoes}
        ></FashionButton>
        <FashionButton
          style={`Formal`}
          setTop={setTop}
          setBottom={setBottom}
          setShoes={setShoes}
        ></FashionButton>
        <div className="GapSpace"></div>
        <FashionDisplayView type={"TOP"} clothingImg={top}></FashionDisplayView>
        <FashionDisplayView
          type={"BOTTOM"}
          clothingImg={bottom}
        ></FashionDisplayView>
        <FashionDisplayView
          type={"SHOES"}
          clothingImg={shoes}
        ></FashionDisplayView>
      </div>
    </div>
  );
}

export default App;

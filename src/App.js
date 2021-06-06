import randomColor from "randomcolor";
import { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box";

const getRandomArbitrary = (min, max) => {
  // return Math.random() * (max - min) + min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const App = () => {
  const word = "Test jur lak";
  const lvlup = "Dawaj więcej pecha!";
  const lvldown = "Zabierz tego pecha!";
  const [kartunList, setKartunList] = useState([false, false]);
  const [colorMode, setColorMode] = useState("#1A202C");
  const switchColorMode = () => {
    if (colorMode === "#1A202C") setColorMode("#B8B8B8");
    else setColorMode("#1A202C");
  };

  const setWinner = (length) => {
    const number = getRandomArbitrary(0, length - 1);
    setKartunList((x) =>
      x.map((el, index) => (index === number ? true : false))
    );
  };
  const setLvlUp = () => {};

  useEffect(() => setWinner(kartunList.length), []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: colorMode,
      }}
    >
      <div></div>
      <div
        onClick={() => setWinner(kartunList.length)}
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          textDecorationLine: "underline",
          textDecorationColor: "#2B6CB0",
          fontStyle: "italic",
          fontFamily: "monospace",
          cursor: "pointer",
          borderRadius: "25px",
          backgroundColor: "#282D3E",
          width: "400px",
          margin: "25px",
          color: "white",
        }}
      >
        {word}
      </div>
      <div
        style={{
          padding: "15px",
          display: "flex",
          flexDirection: "row",
          width: "400px",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            if (kartunList.length > 2) {
              setKartunList(
                kartunList.filter((_, index) => index !== kartunList.length - 1)
              );
              setWinner(kartunList.length - 1);
            }
          }}
          style={{
            backgroundColor: "#ADD110",
            borderRadius: "40px",
            width: "150px",
            height: "50px",
            padding: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            border: "0px",
          }}
        >
          {lvldown}
        </button>

        <button
          onClick={() => {
            setKartunList([...kartunList, false]);
            setWinner(kartunList.length - 1);
          }}
          style={{
            backgroundColor: "#CC1420",
            borderRadius: "40px",
            width: "150px",
            height: "50px",
            padding: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            border: "0px",
          }}
        >
          {lvlup}
        </button>
      </div>
      <div
        style={{
          padding: "15px",
          display: "flex",
          flexDirection: "row",
          width: "80vw",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {kartunList.map((el) => (
          <Box
            isKartun={el}
            key={randomColor()}
            backgroundColor={randomColor()}
          ></Box>
        ))}
        {/* <div>
          <Box isKartun={kartunList[0]} />
          <Box isKartun={kartunList[1]} backgroundColor="teal" />
        </div>
        <div>
          <Box isKartun={kartunList[2]} backgroundColor="cyan" />
          <Box isKartun={kartunList[3]} backgroundColor="gray" />
        </div> */}
      </div>
    </div>
  );
};
export default App;

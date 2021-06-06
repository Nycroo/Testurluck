import { useEffect, useState } from "react";

const Box = (props) => {
    const [text, setText] = useState("To je kartun");
    const [color, setColor] = useState(props.backgroundColor);
    useEffect(() => {
      setText("To je kartun");
      setColor(props.backgroundColor);
    }, 
        // eslint-disable-next-line
    [])
  
    return (
      <div
        onClick={() => {
          setText("A jednak nie");
          setColor("red");
          if (props.isKartun === true) {
            setColor("lime");
            setText("A jednak tak");
          }
        }}
        style={{
          backgroundColor: color,
          color: props.textColor ?? "black",
          height: "200px",
          width: "200px",
          // textAlign: "center",
          boxShadow: "10px 7px 4px black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontFamily: "revert",
          fontWeight: "bold",
          margin: "20px 20px 40px 20px",
          cursor: "pointer",
          borderRadius: "10px"
        }}
      ><div style={{backgroundColor: "black",
      color: "white",
      borderRadius: "10px", 
      width: "140px",
      height: "35px",
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "cursive"
      
      }}>
          {text}
      </div>
        <br />
        <br />
        {/* <button
          onClick={() => {
            setText("A jednak nie");
            setColor("red");
            if (props.isKartun === true) {
              setColor("lime");
              setText("A jednak tak");
            }
          }} */}
        {/* > */}
        {/* Sprawdź
        </button> */}
      </div>
    );
  };
  export default Box;
  
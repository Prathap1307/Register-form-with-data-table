import React, { useState, useEffect } from 'react';
import "./Helloword.css"

function Helloword() {
  const [text, setText] = useState("H");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const words = ["H", "HE", "HEL", "HELL", "HELLO", "HELLO.","HELLO..","HELLO...","HELLO...!"];
    const interval = setInterval(() => {
      setText(words[i]);
      i = (i + 1) % words.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div >
     <div className='hello'>
        {text}
        {cursor && <span>|</span>}
     </div>
    </div>
  );
}

export default Helloword;

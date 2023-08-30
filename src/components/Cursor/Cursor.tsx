import React, { useEffect } from "react";
import "./Cursor.scss";

const Cursor = () => {
  useEffect(() => {
    const customCursor = document.getElementById("custom-cursor");

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      customCursor.style.left = `${x}px`;
      customCursor.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div id="custom-cursor"></div>;
};

export default Cursor;

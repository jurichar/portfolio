import { useEffect } from "react";
import "./Cursor.scss";

const Cursor = () => {
  useEffect(() => {
    const customCursor = document.getElementById("custom-cursor");
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      customCursor.style.left = `${x}px`;
      customCursor.style.top = `${y}px`;
    });
  }, []);

  return <div id="custom-cursor"></div>;
};

export default Cursor;

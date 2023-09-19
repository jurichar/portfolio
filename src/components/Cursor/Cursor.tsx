import { useEffect } from "react";
import "./Cursor.scss";

const Cursor = () => {
  useEffect(() => {
    const customCursor = document.getElementById("custom-cursor");
    const trail1 = document.getElementById("trail1");

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      customCursor.style.left = `${x}px`;
      customCursor.style.top = `${y}px`;

      // setTimeout(() => {
      // trail1.style.left = `${x - 15}px`;
      // trail1.style.top = `${y - 15}px`;
      // }, 100);
    });
  }, []);

  return (
    <div>
      <div id="custom-cursor"></div>
      {/* <div id="trail1"></div> */}
    </div>
  );
};

export default Cursor;

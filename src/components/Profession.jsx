import { useState } from "react";
import styles from "../styles/Profession.module.css";

const Profession = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState("SOFTWARE ENGINEER");
  let interval = null;
  const [isHovering, setIsHovering] = useState(false);

  const shuffleText = () => {
    const newText = isHovering ? "SOFTWARE ENGINEER" : "ML ENGINEER";
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setText(
        newText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return newText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

    if (iteration >= newText.length){
      clearInterval(interval);
      setIsHovering(!isHovering);
    }

    iteration += 1 / 3;
  }, 20);
};

  const resetText = () => {
    clearInterval(interval);
    const newText = isHovering ? "ML ENGINEER" : "SOFTWARE ENGINEER";
    setText(newText);
  };

  const handleMouseOver = () => {
    shuffleText();
  };

  const handleMouseOut = () => {
    resetText();
  };

  return (
    <span
      className={styles.profession}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
    </span>
  );
};

export default Profession;

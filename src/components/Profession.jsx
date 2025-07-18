import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Profession.module.css";

const PROFESSIONS = {
  primary: "SOFTWARE ENGINEER",
  secondary: "AI ENGINEER",
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ANIMATION_INTERVAL = 20;

const Profession = () => {
  const [text, setText] = useState(PROFESSIONS.primary);
  const [isHovering, setIsHovering] = useState(false);

  const getTargetProfession = useCallback(() => {
    return !isHovering ? PROFESSIONS.secondary : PROFESSIONS.primary;
  }, [isHovering]);

  const shuffleText = useCallback(() => {
    const targetText = getTargetProfession();
    let iteration = 0;

    const intervalId = setInterval(() => {
      setText(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(intervalId);
        setIsHovering(!isHovering);
      }

      iteration += 1 / 2;
    }, ANIMATION_INTERVAL);

    return intervalId;
  }, [isHovering, getTargetProfession]);

  const handleMouseOver = useCallback(() => {
    shuffleText();
  }, [shuffleText]);

  const handleMouseOut = useCallback(() => {
    setText(getTargetProfession());
  }, [getTargetProfession]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      const intervalId = shuffleText();
      if (intervalId) clearInterval(intervalId);
    };
  }, [shuffleText]);

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

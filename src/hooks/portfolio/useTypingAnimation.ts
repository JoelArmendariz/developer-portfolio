import { useState, useEffect } from "react";

enum Directions {
  forward,
  backward,
}

export default function useTypingAnimation(fullText: string) {
  const [text, setText] = useState("|");
  const [direction, setDirection] = useState(Directions.forward);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (
        text.length <= fullText.length + 1 &&
        direction === Directions.forward
      ) {
        setText(`${fullText.substring(0, text.length + 1)}|`);
        if (text.length === fullText.length - 1) {
          setDirection(Directions.backward);
        }
      }
      if (text.length >= 0 && direction === Directions.backward) {
        setText(`${fullText.substring(0, text.length - 2)}|`);
        if (text.length === 1) {
          setDirection(Directions.forward);
        }
      }
    }, 150);
    return () => {
      clearInterval(typingInterval);
    };
  }, [direction, fullText, text]);

  return text;
}

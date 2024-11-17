import React from "react";

const SpeakButton = ({text}) => {
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return <button onClick={handleSpeak}>Play Translation</button>;
};

export default SpeakButton;

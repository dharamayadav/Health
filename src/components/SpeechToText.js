import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

 const SpeechToText = ({ setTranscript }) => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Browser does not support speech recognition.</p>;
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{listening ? "Listening..." : "Click Start to Speak"}</p>
      <p>Transcript: {transcript}</p>
      


    </div>
  );
};

export default SpeechToText;

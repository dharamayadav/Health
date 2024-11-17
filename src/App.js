import React, { useState } from "react";
import SpeechToText from "./components/SpeechToText";
import translateText from "./components/translateText";
import LanguageSelector from "./components/LanguageSelector";
import SpeakButton from "./components/SpeakButton";

function App() {
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("es");
  const handleTranslation = async () => {
    const translation = await translateText(originalText, inputLang, outputLang);
    setTranslatedText(translation);
  };

  return (
    <div>
      <h1>Healthcare Translation App</h1>
      <SpeechToText setTranscript={setOriginalText} />
      <LanguageSelector
  inputLang={inputLang}
  setInputLang={setInputLang}
  outputLang={outputLang}
  setOutputLang={setOutputLang}></LanguageSelector>
      <button onClick={handleTranslation}>Translate</button>
      <p>Translation: {translatedText}</p>
      <SpeakButton text={translatedText} />
      

      


    </div>
  );
}

export default App;

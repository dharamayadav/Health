import React from "react";

const LanguageSelector = ({ inputLang, setInputLang, outputLang, setOutputLang }) => (
  <div>
    <label>
      Input Language:
      <select value={inputLang} onChange={(e) => setInputLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </label>
    <label>
      Output Language:
      <select value={outputLang} onChange={(e) => setOutputLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </label>
  </div>
);

export default LanguageSelector;

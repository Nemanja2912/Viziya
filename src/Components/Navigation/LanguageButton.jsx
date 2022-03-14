import React from "react";

const LanguageButton = ({ lang, active, setLanguage, langBar }) => {
  return (
    <p
      className={`language-button  ${active ? "active" : ""} ${
        !langBar && "not-show"
      }`}
      onClick={setLanguage}
    >
      {lang}
    </p>
  );
};

export default LanguageButton;

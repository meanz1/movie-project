import { useState } from "react";
import PapagoAPI from "../services/papagoAPI";

function Translator() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    try {
      const result = await PapagoAPI(textToTranslate);
      setTranslatedText(result);
    } catch (error) {
      console.error("Translation error: ", error);
    }
  };
  return (
    <div>
      <textarea
        value={textToTranslate}
        onChange={(e) => setTextToTranslate(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <div>
        <strong>Translated Text:</strong> {translatedText}
      </div>
    </div>
  );
}

export default Translator;

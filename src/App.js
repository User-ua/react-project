import React from "react";
import { Count } from "./counter.js";
import { InputText } from "./inputText.js";
import { ReadInEnglish } from "./english.js";

function App() {
    return (
        <div className="App">
            <Count />,
            <InputText />,
            <ReadInEnglish />
        </div>
    )
}
export default App
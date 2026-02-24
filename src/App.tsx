import { useState } from "react";
import Controls from "./components/Controls";
import PromptOutput from "./components/PromptOutput";
import { generatePrompt } from "./engine/promptEngine";

export default function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="container">
      <h1>🎛 استديو علي</h1>

      <Controls
        onGenerate={(data: any) => {
          const result = generatePrompt(data);
          setPrompt(result);
        }}
      />

      {prompt && <PromptOutput prompt={prompt} />}
    </div>
  );
}
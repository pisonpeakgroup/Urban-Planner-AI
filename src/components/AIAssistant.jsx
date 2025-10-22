// src/components/AIAssistant.jsx
import { useState } from 'react';

export default function AIAssistant() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('/api/ai/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    console.log('AI Response:', result);
  };

  return (
    <div className="ai-panel">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your city..."
      />
      <button onClick={handleSubmit}>Generate</button>
    </div>
  );
}

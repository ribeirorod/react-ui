import React, { useState } from 'react';

const SpeechRecognitionInput = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognition = new window.webkitSpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        setTranscript((prevTranscript) => prevTranscript + transcript + ' ');
      } else {
        interimTranscript += transcript;
      }
    }
    setTranscript((prevTranscript) => prevTranscript + interimTranscript);
  };

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div>
      <input
        type="text"
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Speak or type here..."
      />
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Stop' : 'Start'} Microphone
      </button>
    </div>
  );
};

export default SpeechRecognitionInput;
import { useCallback, useEffect, useState } from 'react';

const useInputSpeechField = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  useEffect(() => {
    if (!SpeechRecognition) {
      console.log('Speech Recognition is not supported in this browser.');
      return;
    }

    const newRecognition = new SpeechRecognition();
    newRecognition.continuous = true;
    newRecognition.interimResults = true;

    let finalTranscript = '';

    newRecognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }
      setTranscript(finalTranscript + interimTranscript);
    };

    newRecognition.onstart = () => setIsListening(true);
    newRecognition.onerror = (event) => console.error('Speech recognition error', event.error);
    newRecognition.onend = () => {
      if (isListening) {
        newRecognition.start();
      }
    };

    setRecognition(newRecognition);

    return () => {
      newRecognition.stop();
    };
  }, []);

  const startListening = useCallback(() => {
    if (recognition && !isListening) {
      recognition.start();
      setIsListening(true);
    } else if (!recognition) {
      console.log('Speech Recognition is not supported in this browser.');
    }
  }, [recognition, isListening]);

  const stopListening = useCallback(() => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition, isListening]);

  return { transcript, isListening, startListening, stopListening, setTranscript };
};

export default useInputSpeechField;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from "../../context/ThemeContext";
import baseTheme from "../../styles/base-theme";
import darkTheme from "../../styles/dark-theme";
import BaseComponent from '../base-component';
import DefaultButton from '../buttons/default-button';
import styles from './advanced-input-field.module.css';

const AdvancedInputField = ({ ...props }) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? baseTheme : darkTheme;
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const recognitionRef = useRef(null);

  const onInputChange = useCallback((value) => {
    setTranscript(value);
    console.log('Input changed:', value);
  }, []);

  const startListening = useCallback(() => {
    setIsListening(true);
    setTranscript('');
    recognitionRef.current?.start();
    mediaRecorder?.start();
  }, [mediaRecorder]);

  const stopListening = useCallback(() => {
    setIsListening(false);
    recognitionRef.current?.stop();
    mediaRecorder?.stop();
  }, [mediaRecorder]);

  const sendAudioToBackend = useCallback(async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob);
    try {
      const response = await fetch('/api/process-audio', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setTranscript(data.transcript);
      // onInputChange(data.transcript);
    } catch (error) {
      console.error('Error processing audio:', error);
    }
  }, [stopListening]);



  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPart = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setTranscript((prev) => prev + transcriptPart + ' ');
          } else {
            interimTranscript += transcriptPart;
          }
        }
        setTranscript((prev) => prev + interimTranscript);
      };

      recognitionRef.current = recognition;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (event) => {
          setAudioChunks((prev) => [...prev, event.data]);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          // Do not send audio to backend in this example
          // sendAudioToBackend(audioBlob);
        };
      });

    return () => {
      recognitionRef.current?.stop();
    };
  }, [startListening, onInputChange, audioChunks, sendAudioToBackend]);

  const handleTextChange = useCallback((e) => {
    setTranscript(e.target.value);
    onInputChange(e.target.value);
  }, [onInputChange]);

  return (
    <BaseComponent
      className={styles.advancedInputField}
      sx={{
        ...currentTheme.components.input,
        ...props.sx,
      }}
    >
      <input
        type="text"
        value={transcript}
        onChange={handleTextChange}
        placeholder="Type or speak here..."
        className={styles.textInput}
      />
      <DefaultButton
        onClick={toggleListening}
        color={isListening ? 'light' : 'primary'}
        className={styles.micButton}
      >
        {isListening ? 'Stop' : 'Start'} Listening
      </DefaultButton>
    </BaseComponent>
  );
};

export default AdvancedInputField;
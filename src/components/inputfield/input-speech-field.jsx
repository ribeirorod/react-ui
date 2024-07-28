import { AttachFile, Mic, Search } from '@mui/icons-material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import { useFormatTranscript } from '../../hooks/useFormatTranscript';
import useInputSpeechField from '../../hooks/useInputSpeechField';
import baseTheme from "../../styles/base-theme";
import darkTheme from "../../styles/dark-theme";
import styles from './input-speech-field.module.css';

const InputSpeechField = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? baseTheme : darkTheme;

  const { transcript, isListening, startListening, stopListening, setTranscript } = useInputSpeechField();
  const formattedTranscript = useFormatTranscript(transcript);
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    ...currentTheme.components.card,
    borderRadius: currentTheme.borderRadius.sm,
    boxShadow: currentTheme.shadows.md,
    ...(isHovered ? currentTheme.components.card["&:hover"] : {}),
    margin: '1rem',
  };
  const inputStyle = {
    ...currentTheme.components.input,
  };

  useEffect(() => {
    setInputValue(formattedTranscript);
  }, [formattedTranscript]);

  const handleMicClick = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      setInputValue(''); // Clear input when starting new recording
      setTranscript(''); // Clear transcript when starting new recording
      startListening();
    }
  }, [isListening, startListening, stopListening, setTranscript]);

  const handleAttachmentClick = () => {
    // Implement file upload logic for PDF and images
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setTranscript(newValue);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className={styles.container}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      >
      <div className={styles.inputContainer}
        style={inputStyle}
      >
        <Search className={styles.icon} />
        <input
          type="text"
          value={inputValue}
          className={styles.input}
          placeholder="Speak or type..."
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.iconContainer}>
        <button className={styles.iconButton} onClick={handleMicClick}>
          <Mic className={`${styles.icon} ${isListening ? styles.active : ''}`} />
        </button>
        <button className={styles.iconButton} onClick={handleAttachmentClick}>
          <AttachFile className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default InputSpeechField;
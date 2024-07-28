import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Highlight from 'react-highlight.js';
import { useTheme } from '../../context/ThemeContext';
import baseTheme from '../../styles/base-theme';
import darkTheme from '../../styles/dark-theme';
import BaseComponent from '../base-component';
import styles from './codebox.module.css';

const CodeBox = ({ text, lang = 'text', sx, ...props }) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? baseTheme : darkTheme;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const codeBoxStyle = {
    ...currentTheme.components.codeBox,
    ...sx,
  };

  const copyButtonStyle = {
    ...currentTheme.components.button,
    ...styles.copyButton,
  };

  return (
    <BaseComponent
      className={styles.codeBox}
      sx={codeBoxStyle}
      data-lang={lang}
      {...props}
    >
      <pre>
        <Highlight language={lang}>
          {text}
        </Highlight>
      </pre>
      <BaseComponent
        as="button"
        className={copied ? `${styles.copyButton} ${styles.copied}` : styles.copyButton}
        onClick={handleCopy}
        sx={copyButtonStyle}
      >
        {copied ? 'Copied!' : 'Copy'}
      </BaseComponent>
    </BaseComponent>
  );
};

CodeBox.propTypes = {
  ...BaseComponent.propTypes,
  text: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default CodeBox;
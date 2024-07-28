import React, { useRef, useState } from 'react';
import Highlight from 'react-highlight.js';
import Container from '../container/container';
import CopiedIcon from '../icons/CopiedIcon';
import CopyIcon from '../icons/CopyIcon';
import styles from './codebox.module.css';
const CodeBox = ({ text, lang = 'text' }) => {

  const [copied, setCopied] = useState(false);
  const preRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Container className={styles.codeBox} data-lang={lang}>
      <pre ref={preRef}>
        <Highlight language={lang}>
          {text}
        </Highlight>
      </pre>
      <button className={styles.copyButton} onClick={handleCopy}>
        {copied ? <CopiedIcon /> : <CopyIcon />}
      </button>
    </Container>
  );
};

export default CodeBox;
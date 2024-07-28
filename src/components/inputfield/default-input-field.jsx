import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import BaseComponent from '../base-component';
import styles from './input-field.module.css';

const DefaultInputField = forwardRef(({
  type = 'text',
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  required = false,
  name,
  id,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  inputMode,
  ...props
}, ref) => {
  return (
    <BaseComponent
      as="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      name={name}
      id={id}
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      inputMode={inputMode}
      className={`${styles.defaultInput} ${props.className || ''}`}
      ref={ref}
      {...props}
    />
  );
});

DefaultInputField.propTypes = {
  ...BaseComponent.propTypes,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  inputMode: PropTypes.string,
};

export default DefaultInputField;
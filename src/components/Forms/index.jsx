import { useState } from "react";
import PropTypes from "prop-types";

import {
  ContainerInput,
  ContainerTextArea,
  LabelInputWrapper,
  ContainerButton,
} from "./styles";

export function Input({ id, label, placeholder, value, onChange }) {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <LabelInputWrapper>
      <label htmlFor={id}>{label}</label>
      <ContainerInput
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.id, e.target.value);
        }}
      />
    </LabelInputWrapper>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export function TextArea({ id, label, placeholder, value, onChange }) {
  const [texteAreaValue, setTexteAreaValue] = useState(value || "");

  return (
    <LabelInputWrapper>
      <label htmlFor={id}>{label}</label>
      <ContainerTextArea
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        value={texteAreaValue}
        onChange={(e) => {
          setTexteAreaValue(e.target.value);
          onChange(e.target.id, e.target.value);
        }}
      />
    </LabelInputWrapper>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export function Button({ title, ...rest }) {
  return <ContainerButton {...rest}>{title}</ContainerButton>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

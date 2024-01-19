import { useState } from "react";

import {
  ContainerInput,
  ContainerTextArea,
  LabelInputWrapper,
  ContainerButton,
} from "./styles";

export function Input({ id, label, icon: Icon, placeholder, value, onChange }) {
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

export function TextArea({
  id,
  label,
  icon: Icon,
  placeholder,
  value,
  onChange,
}) {
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

export function Button({ title, ...rest }) {
  return <ContainerButton {...rest}>{title}</ContainerButton>;
}

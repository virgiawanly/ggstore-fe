import React from "react";

interface InputProps {
  label: string;
}

export default function Input(props) {
  const { label, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        placeholder="Input placeholder"
        {...nativeProps}
      />
    </>
  );
}
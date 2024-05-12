"use client";

import React, { useRef } from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  number?: boolean;
  type?: string;
  visible?: boolean;
  handleVisible?: () => void;
  message?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  number,
  message,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the input value
    let inputValue = event.target.value;

    if (number) {
      inputValue = inputValue.replace(/\D/g, "");
    }
    // Remove any non-numeric characters

    // Update the state with the sanitized value
    onChange(inputValue);
  };

  return (
    <div className="relative flex w-full flex-col gap-1">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="rounded-[16px] px-4 p-2 outline-none bg-gray text-white w-full h-[40px]"
      />

      {message && (
        <div className="flex gap-2 w-full">
          <span className="text-[11px] text-textd w-full ml-4">{message}</span>
        </div>
      )}
    </div>
  );
};

export const PasswordInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  number,
  type,
  visible,
  handleVisible,
  message,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the input value
    let inputValue = event.target.value;

    if (number) {
      inputValue = inputValue.replace(/\D/g, "");
    }
    // Remove any non-numeric characters

    // Update the state with the sanitized value
    onChange(inputValue);
  };

  return (
    <div className="relative flex flex-col gap-1 w-full">
      <input
        ref={inputRef}
        type={type ? type : "text"}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="rounded-[16px] px-4 p-2 outline-none bg-gray text-white w-full h-[40px]"
      />

      <div
        onClick={handleVisible}
        className="absolute top-[8px] right-[16px] flex w-[24px] h-[24px] items-center justify-center cursor-pointer"
      >
        {visible ? (
          <svg
            className="fill-[#666666] hover:fill-white transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8822 4.88158L19.1463 4.14564C18.9383 3.93765 18.5543 3.96966 18.3143 4.2576L15.7541 6.80157C14.602 6.30562 13.3382 6.06562 12.0101 6.06562C8.05798 6.08156 4.6342 8.38553 2.98608 11.6977C2.89006 11.9057 2.89006 12.1617 2.98608 12.3376C3.75402 13.9057 4.90609 15.2017 6.34609 16.1776L4.2501 18.3056C4.0101 18.5456 3.97809 18.9296 4.13813 19.1376L4.87408 19.8735C5.08207 20.0815 5.46606 20.0495 5.70606 19.7616L19.754 5.71369C20.058 5.47383 20.09 5.08987 19.882 4.88185L19.8822 4.88158ZM12.8581 9.71347C12.5861 9.64945 12.2981 9.56949 12.0261 9.56949C10.6661 9.56949 9.57818 10.6575 9.57818 12.0174C9.57818 12.2894 9.64219 12.5774 9.72215 12.8494L8.65003 13.9054C8.33008 13.3455 8.15409 12.7214 8.15409 12.0175C8.15409 9.88948 9.86611 8.17746 11.9941 8.17746C12.6982 8.17746 13.3221 8.35344 13.8821 8.6734L12.8581 9.71347Z"
              fill=""
              fillOpacity="0.8"
            />
            <path
              d="M21.0347 11.6979C20.4747 10.5779 19.7386 9.56994 18.8267 8.75391L15.8507 11.6979V12.0179C15.8507 14.1459 14.1387 15.8579 12.0107 15.8579H11.6907L9.80273 17.7459C10.5068 17.8898 11.2427 17.9859 11.9627 17.9859C15.9149 17.9859 19.3386 15.6819 20.9868 12.3537C21.1307 12.1297 21.1307 11.9058 21.0347 11.6977L21.0347 11.6979Z"
              fill=""
              fillOpacity="0.8"
            />
          </svg>
        ) : (
          <svg
            className="fill-[#666666] hover:fill-white transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8286 6C16.7963 6 19.7704 9.14768 20.9604 11.2547C21.2227 11.719 21.2227 12.281 20.9604 12.7453C19.7704 14.8523 16.7963 18 11.8286 18C6.86089 18 3.88675 14.8523 2.69671 12.7453C2.43443 12.281 2.43443 11.719 2.69671 11.2547C3.88675 9.14768 6.86089 6 11.8286 6ZM16.0004 12C16.0004 14.2091 14.2096 16 12.0004 16C9.79131 16 8.00045 14.2091 8.00045 12C8.00045 9.79086 9.79131 8 12.0004 8C14.2096 8 16.0004 9.79086 16.0004 12ZM12.0004 14C13.105 14 14.0004 13.1046 14.0004 12C14.0004 10.8954 13.105 10 12.0004 10C10.8959 10 10.0004 10.8954 10.0004 12C10.0004 13.1046 10.8959 14 12.0004 14Z"
              fill=""
            />
          </svg>
        )}
      </div>
      {message && (
        <div className="flex gap-2 w-full">
          <span className="text-[11px] text-textd w-full ml-4">{message}</span>
        </div>
      )}
    </div>
  );
};

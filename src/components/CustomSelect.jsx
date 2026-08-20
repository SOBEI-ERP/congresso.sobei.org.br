'use client';

import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({
  value,
  onChange,
  options = [],
  placeholder = 'Selecione uma opção',
  disabled = false,
  style,
  className = '',
  allowEmpty = false,
  emptyLabel = 'Selecione...',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((o) => o.value === value);
  const displayLabel = selectedOption ? selectedOption.label : (value || placeholder);

  return (
    <div
      className={`custom-select-container ${className} ${disabled ? 'custom-select-container--disabled' : ''}`}
      style={style}
      ref={containerRef}
    >
      <div
        className={`custom-select-trigger ${isOpen ? 'custom-select-trigger--open' : ''} ${!value ? 'custom-select-trigger--placeholder' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="custom-select-label">{displayLabel}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`custom-select-icon ${isOpen ? 'custom-select-icon--open' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isOpen && !disabled && (
        <div className="custom-select-dropdown">
          {allowEmpty && (
            <div
              className={`custom-select-option ${!value ? 'custom-select-option--selected' : ''}`}
              onClick={() => {
                onChange('');
                setIsOpen(false);
              }}
            >
              {emptyLabel}
            </div>
          )}
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`custom-select-option ${value === opt.value ? 'custom-select-option--selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

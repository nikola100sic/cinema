import React, { useState } from 'react';
import { FormLabel } from '../forms/Forms.styled';
import { Select } from './Dropdown.styled';

interface Option {
  id: number;
  name: String;
}

interface DropdownProps {
  label: String;
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<any>();
  return (
    <div>
      <FormLabel htmlFor={`${label}select`}>{label}</FormLabel>
      <Select
        id={`${label}select`}
        value={selectedValue}
        onChange={(e) => {
          onChange(e.target.value);
          setSelectedValue(e.target.value);
        }}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;

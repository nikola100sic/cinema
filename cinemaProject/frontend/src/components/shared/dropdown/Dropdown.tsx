import React, { useState } from 'react';
import { FormLabel } from '../forms/Forms.styled';
import { DropdownStyle, Select } from './Dropdown.styled';

interface Option {
  id: number;
  name: String;
}

interface DropdownProps {
  label: String;
  options: Option[];
  selectedValue: number;
  onChange: (value: number) => void;
}

const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<any>();
  return (
    <DropdownStyle>
      <FormLabel htmlFor={`${label}select`}></FormLabel>
      <Select
        id={`${label}select`}
        value={selectedValue}
        onChange={(e) => {
          onChange(Number(e.target.value));
          setSelectedValue(e.target.value);
        }}
      >
        <option value={0}>Select option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </DropdownStyle>
  );
};

export default Dropdown;

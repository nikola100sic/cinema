import React, { useState } from 'react';
import { FormLabel } from '../forms/Forms.styled';
import { DropdownStyle, Select } from './Dropdown.styled';

interface Option {
  id: number;
  name: string;
}

interface DropdownProps {
  label: string;
  options: Option[];
  selectedValue: number;
  onChange: (value: number) => void;
  color?: string;
  textColor?: string;
  type?: 'big' | 'small';
}

const Dropdown = ({
  label,
  options,
  onChange,
  color = '#1a72ac',
  textColor = 'white',
  type = 'small',
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<any>();

  return (
    <DropdownStyle type={type}>
      <FormLabel htmlFor={`${label}select`}></FormLabel>
      <Select
        id={`${label}select`}
        value={selectedValue}
        onChange={(e) => {
          onChange(Number(e.target.value));
          setSelectedValue(e.target.value);
        }}
        $color={color}
        $textColor={textColor}
        $type={type}
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

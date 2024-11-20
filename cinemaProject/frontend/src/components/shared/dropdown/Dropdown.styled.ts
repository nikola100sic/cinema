import styled from 'styled-components';

export const DropdownStyle = styled.div<{ type: string }>`
  display: flex;
  justify-content: ${(props) =>
    props.type === 'big' ? 'flex-start' : 'space-between'};
  flex-direction: row;
  margin-right: 27px;
  width: ${(props) => (props.type === 'big' ? '100%' : 'auto')};
`;

export const Select = styled.select<{
  $color: string;
  $textColor: string;
  $type: 'big' | 'small';
}>`
  display: flex;
  background-color: ${(props) => props.$color};
  font-style: italic;
  color: ${(props) => props.$textColor};
  padding: ${(props) => (props.$type === 'big' ? '11px' : '10px')};
  font-size: ${(props) => (props.$type === 'big' ? '15px' : '14px')};
  width: ${(props) => (props.$type === 'big' ? '97%' : 'auto')};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.$color};
  }
`;

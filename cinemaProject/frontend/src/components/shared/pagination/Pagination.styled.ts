import styled from 'styled-components';
import { StyledButton } from '../button/Button.styled';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PaginationButton = styled(StyledButton)<{ $isActive?: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive ? '#757575ad' : '#007bff00'};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#121212')};
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #34aadcc7;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

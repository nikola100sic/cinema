import styled from 'styled-components';
import { StyledButton } from '../../components/shared/button/Button.styled';

export const MovieCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

export const AddButton = styled(StyledButton)`
  background-color: #00bcf7;
  border: 1px solid #4a393952;
  border-radius: 10px;
  width: 129px;
`;

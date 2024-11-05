import styled from 'styled-components';

export const MovieCardStyled = styled.div`
  display: flex;
  background-color: #109af857;
  padding: 13px;
  border-radius: 18px;
  flex-direction: column;
  align-items: center;
  flex: 0 1 calc(20% - 25px);
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 58px;
  justify-content: center;
  margin-top: 20px;
`;

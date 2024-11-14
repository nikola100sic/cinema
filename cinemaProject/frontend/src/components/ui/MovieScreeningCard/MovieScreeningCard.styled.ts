import styled from 'styled-components';

export const MovieScreeningCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 27px 12px;
  background-color: #4cd9645e;
  border-radius: 13px;
  padding: 10px;
`;

export const ImageStyled = styled.div`
  display: flex;
`;

export const MovieInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const MovieTitle = styled.h3`
  font-size: 1.2em;
  margin: 5px 0;
`;

export const Details = styled.p`
  display: flex;
  font-size: 15px;
  color: #555;
  margin: 10px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ShowtimesAndRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const Time = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

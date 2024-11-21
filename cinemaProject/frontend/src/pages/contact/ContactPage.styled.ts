import styled from 'styled-components';

export const ContactPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitleStyled = styled.h2`
  font-size: 30px;
  font-weight: 400;
  text-align: center;

  hr {
    border: 0;
    border-top: 2px solid #000;
    margin: 10px auto;
  }
`;
export const ImageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;

  img {
    width: 50%;
    height: auto;
    max-width: 1000px;
    height: 110px;
    object-fit: fill;
  }
`;

export const InfoStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactUsStyle = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    font-family: 'Lucida Sans';
  }
`;

import styled from 'styled-components';

export const AddGenrePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #3498db80;
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 2px;
  box-shadow: -7px 13px 8px 0px rgba(0, 0, 0, 0.1);
`;
export const MoviePageStyled = styled(AddGenrePageStyled)`
  flex-direction: row;
  width: 50%;
  background-color: #109bec69;
  box-shadow: 9px 20px 13px 11px rgb(6 152 243 / 12%);
`;

export const EditPageStyled = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 9px 10px 19px 9px #00bcf74a;
  background: #0b9fef47;
  border-radius: 12px;
  margin-top: 100px;
`;

export const GenreFormTitle = styled.h3`
  text-align: center;
  color: #113775;
`;

export const MovieFormTitle = styled(GenreFormTitle)`
  text-align: left;
`;

export const GenreFormInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  ::placeholder {
    color: #888;
    font-style: italic;
  }
`;

export const MovieFormInput = styled(GenreFormInput)`
  width: 90%;
`;

export const FormLabel = styled.label`
  display: block;
  margin: 10px 0 5px;
  color: #ffffff;
  font-size: large;
`;

export const CheckBoxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

export const CheckBoxItem = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
  transform: scale(1.4);
`;

export const MoviePicture = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 400px;
  margin-left: 80px;
  img {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
export const MovieInfoPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddScreeningContainer = styled(AddGenrePageStyled)`
  flex-direction: column;
`;
export const ScreeningFormTitle = styled(GenreFormTitle)``;

export const ScreeningFormInput = styled(GenreFormInput)``;

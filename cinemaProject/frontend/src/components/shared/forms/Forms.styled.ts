import styled from 'styled-components';

export const AddPageStyled = styled.div`
  background: #3498db80;
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 2px;
  box-shadow: -7px 13px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const EditPageStyled = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  /* background-color: azure; */
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h3`
  text-align: center;
  color: #113775;
`;

export const FormInput = styled.input`
  width: 100%;
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

export const FormLabel = styled.label`
  display: block;
  margin: 10px 0 5px;
  color: #555;
`;

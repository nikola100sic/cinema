import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* position: fixed; */
  display: flex;
  /* width: 100%; */
  background: #076cab;
  /* top: 0; */
  color: black;
  box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.25);
  opacity: 0.85;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export const StyledLinks = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

export const StyledRegistrationLoginWrapper = styled.div`
  display: flex;
  gap: 13px;
  flex-direction: column;
`;

export const StyledLogoutWrapper = styled.div`
  display: flex;
  align-items: 'center';
  gap: 5px;
`;

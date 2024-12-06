import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

export const ImageStyle = styled.div`
  display: flex;
  padding: 20px;
`;
export const UserInformation = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

export const StyledCard = styled(Link)<{ image: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }
`;

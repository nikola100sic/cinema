import { MdEventSeat } from 'react-icons/md';
import styled from 'styled-components';

export const ReservationContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export const ScreeningDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ceecff87;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-width: 300px;
`;

export const LegendWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

export const LegendBox = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.color || 'gray'};
  margin-right: 10px;
`;

export const LegendText = styled.span`
  font-size: 14px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  min-width: 400px;
  justify-content: space-between;
`;

export const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 50px;
  align-items: center;
  justify-content: start;
`;

export const SeatBox = styled(MdEventSeat)`
  width: 45px;
  height: 45px;
  /* background-color: ${(props) => props.color || 'gray'}; */
  margin-right: 20px;
`;

export const ProjectionScreen = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #e0e0e087;
  justify-content: center;
  align-items: center;
  color: black;
  margin-top: 20px;
`;

export const PriceAndButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

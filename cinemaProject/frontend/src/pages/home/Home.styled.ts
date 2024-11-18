import styled, { keyframes } from 'styled-components';

export const marquee = keyframes`
  00% { transform: translateX(175%); }
  100% { transform: translateX(-100%); }
`;

export const StyledMarqueeText = styled.div`
  display: flex;
  width: 100%;
  background-color: #f1f1f14f;
  overflow: hidden;
  white-space: nowrap;
  margin-top: -20px;

  p {
    display: inline-block;
    font-size: 15px;
    animation: ${marquee} 20s linear infinite;
    color: #e74c3cfa;
    font-family: sans-serif;
  }
`;

export const StyledScreenings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledHome = styled.div`
  display: flex;
`;

export const ButtonContainerHome = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6px;
  margin-right: 27px;
  display: flex;
`;

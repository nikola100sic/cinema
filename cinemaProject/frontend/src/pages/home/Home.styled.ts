import styled, { keyframes } from 'styled-components';

export const marquee = keyframes`
  00% { transform: translateX(140%); }
  100% { transform: translateX(-100%); }
`;

export const StyledMarqueeText = styled.div`
  display: flex;
  width: 100%;
  background-color: #f1f1f14f;
  overflow: hidden;
  white-space: nowrap;

  p {
    display: inline-block;
    font-size: 14px;
    animation: ${marquee} 20s linear infinite;
    color: #0074f7;
    font-family: monospace;
  }
`;

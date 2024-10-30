import React from 'react';
import { StyledFooter } from './Footer.styled';

interface FooterProps {
  text: String;
}
const Footer = ({ text }: FooterProps) => {
  return <StyledFooter>{text}</StyledFooter>;
};

export default Footer;

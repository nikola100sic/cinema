import React from 'react';
import {
  StyledHeader,
  StyledLinks,
  StyledLinksWrapper,
  StyledRegistrationLoginWrapper,
} from './HeaderStyled';

interface HeaderProps {
  brandName: string;
  navItems: NavItem[];
}
interface NavItem {
  path: string;
  title: string;
}

const Header = ({ brandName, navItems }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledLinks to={'/home'}>
        <h3>{brandName}</h3>
      </StyledLinks>
      <StyledLinksWrapper>
        {navItems.map((item: NavItem) => (
          <StyledLinks to={item.path} key={item.path}>
            {item.title}
          </StyledLinks>
        ))}
      </StyledLinksWrapper>
      <StyledRegistrationLoginWrapper>
        <StyledLinks to={'/login'}>Login</StyledLinks>
        <StyledLinks to={'/registration'}>Registration</StyledLinks>
      </StyledRegistrationLoginWrapper>
    </StyledHeader>
  );
};

export default Header;

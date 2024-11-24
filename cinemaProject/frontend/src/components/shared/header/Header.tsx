import React, { useEffect } from 'react';
import {
  StyledHeader,
  StyledLinks,
  StyledLinksWrapper,
  StyledLogoutWrapper,
  StyledRegistrationLoginWrapper,
} from './Header.styled';
import Button from '../button/Button';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../../utils/authUtils';
import { FaUserLarge } from 'react-icons/fa6';

interface HeaderProps {
  brandName: string;
  navItems: NavItem[];
}
interface NavItem {
  path: string;
  title: string;
}

const Header = ({ brandName, navItems }: HeaderProps) => {
  const token = localStorage.getItem('jwt');
  const { username } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    window.location.replace('/home');
  };

  useEffect(() => {
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          handleLogout();
        }
      } catch (error) {
        console.error('Invalid token', error);
        handleLogout();
      }
    }
  }, [token]);

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
        {token ? (
          <>
            <StyledLogoutWrapper>
              <FaUserLarge />
              <>{'Hi, ' + username}</>
            </StyledLogoutWrapper>
            <Button text="Logout" onClick={handleLogout} color="#00bcf7" />
          </>
        ) : (
          <>
            <StyledLinks to={'/login'}>
              <FaUser style={{ marginRight: '5px' }} /> Login
            </StyledLinks>
            <StyledLinks to={'/registration'}>
              <FaUserPlus style={{ marginRight: '5px' }} /> Registration
            </StyledLinks>
          </>
        )}
      </StyledRegistrationLoginWrapper>
    </StyledHeader>
  );
};

export default Header;

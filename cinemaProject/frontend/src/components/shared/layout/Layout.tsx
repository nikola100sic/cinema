import React, { ReactNode } from 'react';
import { Content, StyledPageContainer } from './Layout.styled';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import useAuth from '../../../utils/authUtils';

const NAVITEMS = [
  {
    title: 'Home',
    path: '/home',
    requiresAuth: false,
  },
  {
    title: 'Genres',
    path: '/genres',
    requiresAuth: true,
    requiresAdmin: true,
  },
  {
    title: 'Movies',
    path: '/movies',
    requiresAuth: true,
  },
  {
    title: 'Contact',
    path: '/contact',
    requiresAuth: false,
  },
];

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const token = localStorage.getItem('jwt');
  const { isAdmin } = useAuth();

  const filteredNavItems = NAVITEMS.filter((item) =>
    item.requiresAuth ? (item.requiresAdmin ? isAdmin : token) : true,
  );
  return (
    <StyledPageContainer>
      <Header
        brandName="Cinema application"
        navItems={filteredNavItems}
      ></Header>
      <Content>{children}</Content>
      <Footer text="© 2024 Cinema. All rights reserved. | Made by Nikola"></Footer>
    </StyledPageContainer>
  );
};

export default Layout;

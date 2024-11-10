import React, { ReactNode } from 'react';
import { Content, StyledPageContainer } from './Layout.styled';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const NAVITEMS = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'Genres',
    path: '/genres',
  },
  {
    title: 'Movies',
    path: '/movies',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <StyledPageContainer>
      <Header brandName="Cinema application" navItems={NAVITEMS}></Header>
      <Content>{children}</Content>
      <Footer text="© 2024 Cinema. All rights reserved. | Made by Nikola"></Footer>
    </StyledPageContainer>
  );
};
export default Layout;

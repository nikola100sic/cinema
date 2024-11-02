import React, { ReactNode } from 'react';
import { Content, StyledPageContainer } from './Layout.styled';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import path from 'path';

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
    title: 'Movie',
    path: '/movies',
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
      <Footer text="© Cinema app by Nikola"></Footer>
    </StyledPageContainer>
  );
};
export default Layout;

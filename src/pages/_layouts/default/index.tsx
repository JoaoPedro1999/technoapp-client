/* eslint-disable no-unused-vars */
import React from 'react';
import { RouteProps } from 'react-router-dom';

import Header from '../../../components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }: RouteProps) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

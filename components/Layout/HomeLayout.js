import React from 'react';
import Hero from '../../containers/Hero/Hero';
import styles from './HomeLayout.module.css';

function HomeLayout({ children }) {
  return (
    <React.Fragment>
      <Hero />
      {children}
    </React.Fragment>
  );
}

export default HomeLayout;

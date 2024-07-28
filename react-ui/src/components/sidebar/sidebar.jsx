import React from 'react';
import BaseSidebar from './base-sidebar';

const SideBar = ({
  children, ...props}) => {
  return <BaseSidebar {...props}>{children}</BaseSidebar>;
};

export default SideBar;
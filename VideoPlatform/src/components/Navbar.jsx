import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">VideoPlayer</Link>
      <Search />
    </div>
  );
};

export default Navbar;
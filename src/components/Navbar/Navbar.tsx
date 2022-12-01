import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="/" />
        App Page
      </li>
      <li>
        <Link to="/home" />
        Home Page
      </li>
    </ul>
  );
};

export default Navbar;

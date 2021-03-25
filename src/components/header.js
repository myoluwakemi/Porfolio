import React from "react";
import { Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="logo">
            <Link to='/'>YOM</Link>
          </div>
          <div onClick={() => setDarkMode(prevMode =>!prevMode)} className='toggle'>
          <span>🌗</span>
          </div>
          <div className="menu">MENU</div>
        </div>
      </div>
    </header>
  );
};
export default Header;

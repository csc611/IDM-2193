import React from 'react';
import './styles.css';
import NavBar from '../NavBar';

function Header() {
  return (
    <div>
      <header>
          <div id="class-info">
            
            <span id="class-title">IDM-2193C Web Dev</span>

            <div id="student-info">
                <span>Caroline Cho</span>
                <span>Prof. Leopold</span>
            </div>

          </div>
      </header>

      <NavBar />
    </div>
  );
}

export default Header;
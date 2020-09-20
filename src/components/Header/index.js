import React from 'react';
import './styles.css';

function Header() {
  return (
    <div>
      <header>
          <div id="class-info">
            
            <span>IDM-2193C Web Dev</span>

            <div id="student-info">
                <span>Caroline Cho</span>
                <span>Prof. Leopold</span>
                <span>{Date.now()}</span>
            </div>

          </div>
      </header>

      <div id="nav-bar">

      </div>
    </div>
  );
}

export default Header;
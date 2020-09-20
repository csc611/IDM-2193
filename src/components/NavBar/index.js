import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function NavBar() {
  return (
    <div id="nav-bar-link-wrapper">
      <Link to="/">Home</Link>
      <Link to="/week-1">Week 1</Link>
      <Link to="/week-2">Week 2</Link>
      <Link to="/week-3">Week 3</Link>
      <Link to="/week-4">Week 4</Link>
      <Link to="/week-5">Week 5</Link>
      <Link to="/week-6">Week 6</Link>
      <Link to="/week-7">Week 7</Link>
      <Link to="/week-8">Week 8</Link>
    </div>
  );
};

export default NavBar;

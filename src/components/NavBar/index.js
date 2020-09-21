import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function NavBar() {
  return (
    <nav id="nav-bar-link-wrapper">
      <Link to="/" className={"link"}>Home</Link>
      <Link to="/week-1" className={"link"}>Week 1</Link>
      <Link to="/week-2" className={"link"}>Week 2</Link>
      <Link to="/week-3" className={"link"}>Week 3</Link>
      <Link to="/week-4" className={"link"}>Week 4</Link>
      <Link to="/week-5" className={"link"}>Week 5</Link>
      <Link to="/week-6" className={"link"}>Week 6</Link>
      <Link to="/week-7" className={"link"}>Week 7</Link>
      <Link to="/week-8" className={"link"}>Week 8</Link>
    </nav>
  );
};

export default NavBar;

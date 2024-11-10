import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ textAlign: 'center', padding: '10px', backgroundColor: 'purple'}}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
        <li style={{margin: '0 15px'}}>
          <Link to="/" style={{ textDecoration: 'none', color: 'pink'}}>Home</Link>
        </li>
        <li style={{margin: '0 15px'}}>
          <Link to="/about" style={{textDecoration: 'none', color: 'pink'}}>About</Link>
        </li>
        <li style={{margin: '0 15px'}}>
          <Link to="/services" style={{textDecoration: 'none', color: 'pink'}}>Services</Link>
        </li>
        <li style={{margin: '0 15px'}}>
          <Link to="/contact" style={{textDecoration: 'none', color: 'pink'}}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

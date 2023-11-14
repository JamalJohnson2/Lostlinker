import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const links = [
    { id: 'home', text: 'Home' },
    { id: 'lost', text: 'Lost' },
    { id: 'found', text: 'Found' },
    { id: 'help', text: 'Help' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`/${link.id}`}
              className={`nav-link ${activeLink === link.text ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.text)}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

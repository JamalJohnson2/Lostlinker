import React from 'react';
import './Home.css'
import imagePaths from '../components/imagepaths';
import CardList from './Cardlist';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
          <img src={imagePaths.Weblogo} alt="Weblogo" />
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/lost">Lost</a></li>
          <li><a href="/found">Found</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="submit-button">Submit</button>
      </div>
    </nav>
    <header className="header">
      <div className="header-bg"></div>
      <h1 className="header-title">Recovering Lost Valuables: A Comprehensive Guide to Reclaiming Your Lost Possessions</h1>
      <p className="header-description">Exchange information about lost or found items. Our platform allows you to connect with others to reunite with your 
      lost belongings or assist someone in finding theirs. Take advantage of all the available tools and resources to make the search for lost items as efficient 
      and effective as possible.</p>
    </header>
    <h1 className="recent-posts-title">Recent Posts</h1>
    <CardList/>
    <div className="load-more-button-container">
    <button className="load-more-button">Load More</button>
    </div>
    <div className="hero-container">
      <div className="left-column">
      <h1 className="welcome-header">Discover the Power of Connection with Lost Linker!</h1>
        <p className="welcome-message">
        Lost Linker isn't just a lost and found website; it's a beacon of hope, a virtual sanctuary for lost items seeking reunion with their owners. Our mission is simple yet profound: to bring together lost belongings and their rightful owners through the magic of connection.
        </p>
        <button className="login-button">
          Log In
        </button>
      </div>

      <div className="right-column">
      <img
          src={imagePaths.heroimg}
          alt="Hero Image"
          className="hero-image"
        />
      </div>
    </div>
  </>
  );
};

export default Navbar;

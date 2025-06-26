
import { NavLink , Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react';

function Header() {

    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <header className = "navbar">
            <div className ="container">
                <div className ="header-logo">
                <Link to="/">
                    <img src="/assets/spiceboysicon-removebg-preview.png" alt="SPICEBOYZ LOGO"/>
                </Link>
            </div >
            <nav className='nav-links'>
                <ul>
                    <li><NavLink to="Events">EVENTS</NavLink></li>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="About">ABOUT</NavLink></li>
                    
                </ul>
            </nav>
            {/* Hamburger icon for mobile */}
                <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <img src="/assets/menu-icon.png" alt="Menu" />
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        HOME
                    </Link>
                    <Link to="/Events" onClick={() => setIsMobileMenuOpen(false)}>
                        EVENTS
                    </Link>
                    <Link to="/About" onClick={() => setIsMobileMenuOpen(false)}>
                        ABOUT US
                    </Link>
                </div>
            )}

            
    </header>

    );
}

export default Header;
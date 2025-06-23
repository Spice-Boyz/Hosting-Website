import React from 'react';

function Footer() {
    return (
    <footer>
      <div className="footer-container">
        <div className="footer-contactus">
          <h4>CONTACT US:</h4>
          <p><a href="mailto:spiceboyz0198@gmail.com">spiceboyz0198@gmail.com</a></p>
        </div>
        <div className="footer-followus">
          <h4>FOLLOW US:</h4>
          <p>
            <a href="https://www.instagram.com/spiceboyz._" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;

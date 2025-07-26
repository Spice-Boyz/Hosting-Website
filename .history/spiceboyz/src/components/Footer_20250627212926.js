import React from 'react';

function Footer() {
    return (
    <footer>
      <div className="footer-container">
        <div className="footer-contactus">
          <h4>CONTACT US:</h4>
          <p><a href="mailto:spiceboyz0198@gmail.com">spiceboyz0198@gmail.com</a></p>
          <div style={{height: "3vh"}}></div>

          <h4>FOLLOW US:</h4>
          <p>
            <a href="https://www.instagram.com/spiceboyz._" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </p>

        </div>
       {/* ✅ Add SubscribeForm component here */}
                <div className="footer-subscribe">
                    <h4>STAY IN THE LOOP:</h4>
                    <SubscribeForm />
                </div>
      </div>
    </footer>
    );
}

export default Footer;

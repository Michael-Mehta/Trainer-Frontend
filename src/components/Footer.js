import React from 'react';

function Footer() {
  return (
    <footer>
      <div className= "footer">
        <p>&copy; {new Date().getFullYear()} Chandler Training. Terms and Conditions. Privacy Policy.</p>
      </div>
    </footer>
  );
}

export default Footer;
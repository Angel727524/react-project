import React from "react";

function Footer() {
const year = new Date().getFullYear();

return ( <footer className="footer"> <div className="footer-content"> <h3>React Portfolio Project</h3>
    <p>
      Final Project for React Course
    </p>

    <p>
      Built using React, React Router,
      useState, useEffect, and localStorage.
    </p>

    <p>
      © {year} Team Portfolio.
      All Rights Reserved.
    </p>
  </div>
</footer>

);
}

export default Footer;

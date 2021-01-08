import React from 'react';
import './Header.css';

function Header() {
  return (
      <div className="header">
          <dl>
              <dd>
                  <a href="#Works">WORKS</a>
                  <a href="#Concept">CONCEPT</a>
                  <a href="#Profile">PROFILE</a>　
              </dd>
          </dl>
      </div>
  );
}

export default Header;

import React from 'react';
import './Header.css';

function Header() {
  return (
      <div className="header">
          <dl>
              <dd>
                  <a className="js-smooth-scroll" href="#Development">
                      DEVELOPMENT</a>
                  <a className="js-smooth-scroll" href="#Skill">SKILL</a>
                  <a className="js-smooth-scroll" href="#Profile">PROFILE</a>　
              </dd>
          </dl>
      </div>
  );
}

export default Header;

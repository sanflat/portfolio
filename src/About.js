import React from 'react';
import './About.css';

function About() {
  return (
      <div className="about">
          <a id="Profile" className="profile1">- PROFILE -</a>
          <div className="nekosan">
              <img src={`${process.env.PUBLIC_URL}/karugamo.jpg`} alt="Logo" />
          </div>
          <div className="profile">
              <p className="name">
                  ウェブエンジニア サトウヨウヘイ
              </p>
              <p className="keireki">
                  東証一部上場企業でBtoBのコンサルタントに従事後、ウェブエンジニアへ。<br />
                  ビジネスとエンジニアの両方の視点から、結果に拘った無駄のない開発にコミットしています。
              </p>
              <p className="">
                  CONTACT：hogehoge@gmail.com
              </p>
          </div>
      </div>
  );
}

export default About;

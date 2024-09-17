import React from 'react';
import './Opportunity.css';

function Opportunity() {
  return (
    <div className="container">
      <div className="step-indicator">
        <div className="circle">1</div>
        <div className="l1"></div>
        <div className="circle">2</div>
        <div className="l2"></div>
        <div className="circle">3</div>
        <div className="l3"></div>
        <div className="circle active">4</div>
      </div>

      <div className="content">
        <div className="left-section">
          <h2>Hey John! Ready for your next big opportunity?</h2>
          <p>Answer a few questions and start building your profile.</p>
          <div className="line1"></div>
          <p>Apply for open roles or list services for clients to buy.</p>
          <div className="line2"></div>
          <p>Get paid securely.</p>
          <div className="bxa1">
          <button className="cta-button">LET'S GO!</button>
          <div className="bxaa1">
          <p className="sub-text" id='text1'>
            It takes only 5-10 minutes and you can  edit it later. We'll save as
            you go!
          </p>
          </div>
          </div>
        </div>

        <div className="right-section">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar"></div>
              <div className="profile-info">
                <h3>Batul Chougle</h3>
                <p>AI/ML Developer</p>
              </div>
            </div>
            <div className="rating">
              <span className="star">⭐5.0</span>
              <span className="hourly-rate">65$/hour</span>
              <span className="jobs">14 Jobs</span>
            </div>
            <div className="profile-description">
              <p>
                "BBD has enabled me to increase my rates. I know what I'm
                bringing to the table and love the feeling of being able to help
                a variety of clients."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunity;
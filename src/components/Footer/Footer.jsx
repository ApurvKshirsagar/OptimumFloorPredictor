import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <div className='footer-title'>SkyDashboard</div>
        <div className='footer-subtitle'>
          Professional Skyscraper Cost Estimation, Revenue Analysis and
          Optimizer
        </div>
      </div>
      <div className='footer-right'>
        <div className='footer-copyright'>
          © 2025 SkyDashboard. All rights reserved.
        </div>
        <div className='footer-helper'>
          Contact Us Email: civilodyssey.co@gmail.com
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import FontAwesome from 'react-fontawesome';

// importting components

// importing styles
import { StyledFooter } from './StyledFooter';

const Footer = () => (
  <StyledFooter>
    <div className="footer-content">
      
      <a href="https://github.com/AditiDey/movierecommendation" target="_blank">
        <FontAwesome className="fa fa-github" name="clock-o" />
      </a>
    </div>
  </StyledFooter>
);

export default Footer;

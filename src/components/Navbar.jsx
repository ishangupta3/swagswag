// NavBar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/SWAGLOGO.png';
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-container z-50 relative">
      <div className="inline-flex flex-col items-center justify-center bg-black overflow-hidden">
        <div className="inline-flex items-center gap-[65px] relative flex-[0_0_auto]">
          <img src={companyLogo} alt="Logo" className="h-8 w-8 mr-2" />
          <div className="relative w-fit font-medium text-white text-[18px] tracking-[4.32px] leading-[28.8px] whitespace-nowrap">
            HOME
          </div>
          <div className="relative w-fit font-medium text-white text-[18px] tracking-[4.32px] leading-[28.8px] whitespace-nowrap">
            BUY SWAG
          </div>
          <div className="relative w-fit font-medium text-white text-[18px] tracking-[4.32px] leading-[28.8px] whitespace-nowrap">
            CHART SWAG
          </div>
          <div className="relative w-fit font-medium text-white text-[18px] tracking-[4.32px] leading-[28.8px] whitespace-nowrap">
            SWAG SOCIALS
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

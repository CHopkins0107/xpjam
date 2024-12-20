'use client';

import React from 'react';
import "./background.css";
import "./layout.css";
import DesktopIcon from '../components/desktopicon';
import AboutMe from '../components/aboutme';

// import { IconifyIcon } from '@iconify/react';

interface DesktopIcon {
  iconSrc: string;
  linkUrl: string;
  iconName: string;
}

export default function Page() {

  // const desktopIcons: DesktopIcon[] = [
  //   { 
  //     icon: 'mdi:github', 
  //     label: 'GitHub', 
  //     onClick: () => window.open('https://github.com/CHopkins0107/', '_blank')
  //   },
  //   { 
  //     icon: 'mdi:linkedin', 
  //     label: 'LinkedIn', 
  //     onClick: () => window.open('https://www.linkedin.com/in/jamelhopkins/', '_blank')
  //   },
  //   { 
  //     icon: 'mdi:email-fast', 
  //     label: 'E-Mail', 
  //     onClick: () => window.open('mailto:chopkins0107@gmail.com', '_blank')
  //   },
  //   { 
  //     icon: 'mdi:file-text', 
  //     label: 'Resume', 
  //     onClick: () => window.open('https://docs.google.com/document/d/1sI3xnLcPB5STMVEp6VTHk4QRA_h5-LYAxcH5sPggEBc/edit?usp=sharing', '_blank')
  //   },
  // ];

  return (
    // <Background>
    <div className="background">
      <div className="container">
        <div className="icons">
          <DesktopIcon 
            iconSrc="/network.ico"
            linkUrl="https://github.com/CHopkins0107/"
            iconName="GitHub"
          />
          <DesktopIcon 
            iconSrc="/people.ico"
            linkUrl="https://www.linkedin.com/in/jamelhopkins/"
            iconName="LinkedIn"
          />
          <DesktopIcon 
            iconSrc="/document.ico"
            linkUrl="https://docs.google.com/document/d/1sI3xnLcPB5STMVEp6VTHk4QRA_h5-LYAxcH5sPggEBc/edit?usp=sharing"
            iconName="Resume"
          />
          <DesktopIcon 
            iconSrc="/email.ico"
            linkUrl="mailto:chopkins0107@gmail.com"
            iconName="E-Mail"
          />
        </div>
        <div className="display"><AboutMe /></div>
        <div className="taskbar"></div>
      </div>


    </div>
    // </Background>
  );
}
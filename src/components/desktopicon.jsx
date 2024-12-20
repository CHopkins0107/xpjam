import React from 'react';

// const DesktopIcon = ({ icon, label, onClick }) => {
//     return (
//         <div
//             className = "desktop-icon"
//             onClick = {onClick}
//             style = {{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '80px',
//                 margin: '10px',
//                 cursor: 'pointer',
//             }}
//         >
//             <Icon icon={icon} style={{ fontSize: '48px', marginBottom: '5px', color: 'black'}} />
//             <span style={{
//                 textAlign: 'center',
//                 wordWrap: 'break-word',
//                 fontSize: '12px',
//                 color: 'white',
//                 textShadow: '1px 1px 1px black'
//             }}>
//                 {label}
//             </span>
//         </div>
//     );
//};

import Image from 'next/image';
import Link from 'next/link';

const DesktopIcon = ({ iconSrc, linkUrl, iconName }) => {
    return (
      <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
        <div 
            className="desktop-icon"
            style = {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '80px',
                padding: '10px',
                margin: '10px',
                cursor: 'pointer',
                fontSize: '12px',
                color: 'white',
                textShadow: '1px 1px 1px black'
            }}
        >
          <Image src={iconSrc} alt={iconName} width={64} height={64} />
          <p>{iconName}</p>
        </div>
      </Link>
    );
  };

export default DesktopIcon;
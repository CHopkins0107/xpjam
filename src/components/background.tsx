import React, { ReactNode } from "react";
import Image from "next/image";
import backgroundImage from "../../public/background.jpg";

interface BackgroundProps {
    children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh', objectFit:"cover" }}>
        <Image
          alt="Background"
          src={backgroundImage}
          fill
          quality={100}
        />
        {children}
      </div>
    )
  }
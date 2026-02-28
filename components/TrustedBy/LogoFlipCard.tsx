'use client';
import React from 'react';

interface LogoFlipCardProps {
  frontLogo: React.ReactNode;
  backLogo: React.ReactNode;
  isActive: boolean;
  showBack: boolean;
}

export default function LogoFlipCard({ frontLogo, backLogo, isActive, showBack }: LogoFlipCardProps) {
  return (
    <div className="perspective-container h-32">
      <div 
        className={`flip-card-inner h-full`}
        style={{
          transform: showBack ? 'rotateX(180deg)' : 'rotateX(0deg)'
        }}
      >
        {/* Front Face */}
        <div className="flip-card-face flip-card-front">
          <div className="flex items-center justify-center h-full w-full p-6">
            {frontLogo}
          </div>
        </div>
        {/* Back Face */}
        <div className="flip-card-face flip-card-back">
          <div className="flex items-center justify-center h-full w-full p-6">
            {backLogo}
          </div>
        </div>
      </div>
      <style jsx>{`
        .perspective-container {
          perspective: 1000px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .flip-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        }
        
        .flip-card-front {
          transform: rotateX(0deg);
        }
        
        .flip-card-back {
          transform: rotateX(180deg);
        }
      `}</style>
    </div>
  );
}
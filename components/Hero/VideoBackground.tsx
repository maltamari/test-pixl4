'use client';

import React, { useRef } from 'react';
import { useVideoAutoplay } from './useVideoAutoplay';

interface VideoBackgroundProps {
  src: string;
  brightness: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  brightness,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useVideoAutoplay(videoRef);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // brightness is applied exclusively via the style prop from the `brightness` prop.
        // The previous static Tailwind class `brightness-[0.4]` was a duplicate that
        // always overrode the dynamic value — removed.
        style={{ filter: `brightness(${brightness})` }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-black/70" />
    </div>
  );
};
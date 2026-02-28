'use client';

import { BRAND_INFO } from "@/lib/constants/whyChooseUs.constants";


export function BrandVideo() {
  return (
    <div className="relative h-full bg-black rounded-3xl">
      {/* Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-3xl inset-0 w-full h-full object-cover"
      >
        <source src={BRAND_INFO.VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      {/* Logo/Brand */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-6xl font-bold">
        {BRAND_INFO.NAME}
        <span className={BRAND_INFO.ACCENT_COLOR}>.</span>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xl font-bold">
        {BRAND_INFO.COPYRIGHT}
      </div>
    </div>
  );
}

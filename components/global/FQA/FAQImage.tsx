'use client';

import Image from 'next/image';

interface FAQImageProps {
  src: string;
  alt: string;
  zoomScale: number;
}

export function FAQImage({ src, alt, zoomScale }: FAQImageProps) {
  return (
    <div className="relative bg-gray-200 rounded-3xl overflow-hidden h-125 lg:h-175 lg:sticky lg:top-24">
      <div
        className="w-full h-full transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${zoomScale})`,
          transformOrigin: 'center center',
        }}
      >
        <Image
          src={'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop'}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}

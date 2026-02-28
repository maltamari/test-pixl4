'use client';

import { Stat } from "@/lib/constants/whyChooseUs.constants";


interface StatCardProps {
  stat: Stat;
  statRef: React.RefObject<HTMLDivElement | null>;
}

export function StatCard({ stat, statRef }: StatCardProps) {
  return (
    <div
      ref={statRef}
      data-stat-id={stat.id}
      className="flex flex-col bg-white rounded-2xl p-6 justify-center mt-12"
    >
      {/* Number Section */}
      <div className="flex md:flex-row flex-col md:items-center justify-between gap-7 md:gap-4 border-b border-gray-300 pb-4">
        <div className="flex items-baseline">
          <span className="text-8xl md:text-[140px] font-bold text-black leading-none">
            <span data-counter>0</span>
          </span>
          {stat.suffix && (
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-400 ml-2">
              {stat.suffix}
            </span>
          )}
        </div>
        <h3 className="text-2xl text-black whitespace-pre-line">{stat.title}</h3>
      </div>

      {/* Description Section */}
      <div className="space-y-4 md:w-100 text-justify text-lg md:text-xl text-black">
        <p>
          {stat.description}{' '}
          {stat.highlightedText && (
            <span className="text-gray-400">{stat.highlightedText}</span>
          )}
        </p>
      </div>

      {/* Decorative Element */}
      <div className="text-4xl text-end text-black">✱</div>
    </div>
  );
}